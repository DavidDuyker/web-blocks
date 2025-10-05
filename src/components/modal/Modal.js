/**
 * Modal Component
 * A flexible modal component with overlay, dialog, and accessibility features
 * @param {Object} options - Component configuration
 * @param {string} options.title - Modal title
 * @param {string} options.content - Modal content
 * @param {string} options.footer - Modal footer content
 * @param {string} options.size - 'small'|'medium'|'large'|'fullscreen'
 * @param {boolean} options.closable - Whether the modal can be closed
 * @param {boolean} options.backdrop - Whether to show backdrop
 * @param {string} options.className - Additional CSS classes
 * @param {Object} options.attributes - Additional HTML attributes
 * @param {Function} options.onClose - Function called when modal is closed
 * @param {Function} options.onOpen - Function called when modal is opened
 */
export class Modal {
  constructor(options = {}) {
    this.options = {
      title: '',
      content: '',
      footer: '',
      size: 'medium',
      closable: true,
      backdrop: true,
      className: '',
      attributes: {},
      onClose: () => {},
      onOpen: () => {},
      ...options
    };
    
    this.isOpen = false;
    this.modalElement = null;
    this.backdropElement = null;
    this.focusableElements = [];
    this.previousActiveElement = null;
  }

  render() {
    // Create modal container
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';
    
    // Create backdrop
    if (this.options.backdrop) {
      this.backdropElement = document.createElement('div');
      this.backdropElement.className = 'modal-backdrop';
      this.backdropElement.setAttribute('aria-hidden', 'true');
      
      // Close on backdrop click
      this.backdropElement.addEventListener('click', () => {
        if (this.options.closable) {
          this.close();
        }
      });
      
      modalContainer.appendChild(this.backdropElement);
    }
    
    // Create modal dialog
    this.modalElement = document.createElement('div');
    this.modalElement.className = 'modal-dialog';
    this.modalElement.setAttribute('role', 'dialog');
    this.modalElement.setAttribute('aria-modal', 'true');
    this.modalElement.setAttribute('aria-hidden', 'true');
    
    // Add size class
    this.modalElement.classList.add(`modal-dialog--${this.options.size}`);
    
    // Add custom classes
    if (this.options.className) {
      this.modalElement.classList.add(this.options.className);
    }
    
    // Add custom attributes
    Object.entries(this.options.attributes).forEach(([key, value]) => {
      this.modalElement.setAttribute(key, value);
    });
    
    // Build modal content
    let modalHTML = '';
    
    // Header
    if (this.options.title || this.options.closable) {
      modalHTML += '<div class="modal-header">';
      if (this.options.title) {
        modalHTML += `<h2 class="modal-title">${this.options.title}</h2>`;
      }
      if (this.options.closable) {
        modalHTML += '<button class="modal-close" type="button" aria-label="Close modal">×</button>';
      }
      modalHTML += '</div>';
    }
    
    // Body
    if (this.options.content) {
      modalHTML += `<div class="modal-body">${this.options.content}</div>`;
    }
    
    // Footer
    if (this.options.footer) {
      modalHTML += `<div class="modal-footer">${this.options.footer}</div>`;
    }
    
    this.modalElement.innerHTML = modalHTML;
    
    // Add event listeners
    this.setupEventListeners();
    
    modalContainer.appendChild(this.modalElement);
    
    return modalContainer;
  }

  setupEventListeners() {
    // Close button
    const closeButton = this.modalElement.querySelector('.modal-close');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        this.close();
      });
    }
    
    // Keyboard navigation
    this.modalElement.addEventListener('keydown', (e) => {
      this.handleKeydown(e);
    });
  }

  handleKeydown(e) {
    // Close on Escape
    if (e.key === 'Escape' && this.options.closable) {
      this.close();
      return;
    }
    
    // Trap focus within modal
    if (e.key === 'Tab') {
      this.trapFocus(e);
    }
  }

  trapFocus(e) {
    const focusableElements = this.getFocusableElements();
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }

  getFocusableElements() {
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])'
    ];
    
    return Array.from(this.modalElement.querySelectorAll(focusableSelectors.join(', ')));
  }

  open() {
    if (this.isOpen) return;
    
    this.isOpen = true;
    this.previousActiveElement = document.activeElement;
    
    // Show modal
    this.modalElement.setAttribute('aria-hidden', 'false');
    this.modalElement.classList.add('modal-dialog--open');
    
    if (this.backdropElement) {
      this.backdropElement.classList.add('modal-backdrop--open');
    }
    
    // Focus first focusable element
    const focusableElements = this.getFocusableElements();
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    } else {
      this.modalElement.focus();
    }
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Call onOpen callback
    this.options.onOpen();
  }

  close() {
    if (!this.isOpen) return;
    
    this.isOpen = false;
    
    // Hide modal
    this.modalElement.setAttribute('aria-hidden', 'true');
    this.modalElement.classList.remove('modal-dialog--open');
    
    if (this.backdropElement) {
      this.backdropElement.classList.remove('modal-backdrop--open');
    }
    
    // Restore body scroll
    document.body.style.overflow = '';
    
    // Restore focus
    if (this.previousActiveElement) {
      this.previousActiveElement.focus();
    }
    
    // Call onClose callback
    this.options.onClose();
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  destroy() {
    if (this.modalElement && this.modalElement.parentNode) {
      this.modalElement.parentNode.remove();
    }
    document.body.style.overflow = '';
  }
}

// Export for direct CDN usage
export default Modal;
