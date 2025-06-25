// إعدادات EmailJS - سيتم استيرادها من ملف config.js
const emailConfig = window.emailConfig || {
    serviceID: 'YOUR_SERVICE_ID',     // استبدل هذا بـ Service ID الخاص بك
    templateID: 'YOUR_TEMPLATE_ID',   // استبدل هذا بـ Template ID الخاص بك
    publicKey: 'YOUR_PUBLIC_KEY'      // استبدل هذا بـ Public Key الخاص بك
};

// Contact Form Handler
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.submitBtn = document.getElementById('submit-btn');
        this.messagesDiv = document.getElementById('form-messages');
        
        // استخدام إعدادات EmailJS
        this.emailjsConfig = emailConfig;
        
        this.init();
    }
    
    init() {
        // Initialize EmailJS
        emailjs.init(this.emailjsConfig.publicKey);
        
        // Add form submit event listener
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        // Validate form
        if (!this.validateForm()) {
            return;
        }
        
        // Show loading state
        this.setLoadingState(true);
        
        try {
            // Get form data
            const formData = new FormData(this.form);
            const templateParams = {
                from_name: formData.get('from_name'),
                from_email: formData.get('from_email'),
                subject: formData.get('subject'),
                message: formData.get('message'),
                to_name: 'Habeeb Andraws' // Recipient name
            };
            
            // Send email using EmailJS with better error handling
            console.log('Sending email with params:', {
                serviceID: this.emailjsConfig.serviceID,
                templateID: this.emailjsConfig.templateID,
                templateParams: templateParams
            });
            
            const response = await emailjs.send(
                this.emailjsConfig.serviceID,
                this.emailjsConfig.templateID,
                templateParams,
                this.emailjsConfig.publicKey
            );
            
            console.log('EmailJS Response:', response);
            
            if (response.status === 200 || response.status === '200') {
                this.showMessage('success', 'Your message has been sent successfully! I will get back to you soon.');
                this.form.reset();
            } else {
                throw new Error(`Failed to send email. Status: ${response.status}`);
            }
            
        } catch (error) {
            console.error('Error sending email:', error);
            this.showMessage('error', 'An error occurred while sending the message. Please try again or contact me directly via email.');
        } finally {
            this.setLoadingState(false);
        }
    }
    
    validateForm() {
        const formData = new FormData(this.form);
        const name = formData.get('from_name')?.trim();
        const email = formData.get('from_email')?.trim();
        const subject = formData.get('subject')?.trim();
        const message = formData.get('message')?.trim();
        
        // Check if all fields are filled
        if (!name || !email || !subject || !message) {
            this.showMessage('error', 'Please fill in all required fields.');
            return false;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.showMessage('error', 'Please enter a valid email address.');
            return false;
        }
        
        // Check minimum message length
        if (message.length < 10) {
            this.showMessage('error', 'Message must be at least 10 characters long.');
            return false;
        }
        
        return true;
    }
    
    setLoadingState(loading) {
        if (loading) {
            this.submitBtn.classList.add('loading');
            this.submitBtn.disabled = true;
        } else {
            this.submitBtn.classList.remove('loading');
            this.submitBtn.disabled = false;
        }
    }
    
    showMessage(type, message) {
        this.messagesDiv.className = `form-messages ${type}`;
        this.messagesDiv.textContent = message;
        
        // Auto hide message after 5 seconds
        setTimeout(() => {
            this.messagesDiv.className = 'form-messages';
            this.messagesDiv.textContent = '';
        }, 5000);
        
        // Scroll to message
        this.messagesDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Alternative method using Formspree (simpler setup)
class FormspreeContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.submitBtn = document.getElementById('submit-btn');
        this.messagesDiv = document.getElementById('form-messages');
        
        // Formspree endpoint - Replace with your endpoint
        this.formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
        
        this.init();
    }
    
    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        if (!this.validateForm()) {
            return;
        }
        
        this.setLoadingState(true);
        
        try {
            const formData = new FormData(this.form);
            
            const response = await fetch(this.formspreeEndpoint, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                this.showMessage('success', 'Your message has been sent successfully! I will get back to you soon.');
                this.form.reset();
            } else {
                throw new Error('Failed to send message');
            }
            
        } catch (error) {
            console.error('Error sending message:', error);
            this.showMessage('error', 'An error occurred while sending the message. Please try again.');
        } finally {
            this.setLoadingState(false);
        }
    }
    
    validateForm() {
        const formData = new FormData(this.form);
        const name = formData.get('from_name')?.trim();
        const email = formData.get('from_email')?.trim();
        const subject = formData.get('subject')?.trim();
        const message = formData.get('message')?.trim();
        
        if (!name || !email || !subject || !message) {
            this.showMessage('error', 'Please fill in all required fields.');
            return false;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.showMessage('error', 'Please enter a valid email address.');
            return false;
        }
        
        if (message.length < 10) {
            this.showMessage('error', 'Message must be at least 10 characters long.');
            return false;
        }
        
        return true;
    }
    
    setLoadingState(loading) {
        if (loading) {
            this.submitBtn.classList.add('loading');
            this.submitBtn.disabled = true;
        } else {
            this.submitBtn.classList.remove('loading');
            this.submitBtn.disabled = false;
        }
    }
    
    showMessage(type, message) {
        this.messagesDiv.className = `form-messages ${type}`;
        this.messagesDiv.textContent = message;
        
        setTimeout(() => {
            this.messagesDiv.className = 'form-messages';
            this.messagesDiv.textContent = '';
        }, 5000);
        
        this.messagesDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Simple mailto fallback
class MailtoContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.init();
    }
    
    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        const name = formData.get('from_name');
        const email = formData.get('from_email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Create mailto link
        const mailtoLink = `mailto:habeebandrew4@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        // Open default email client
        window.location.href = mailtoLink;
        
        // Show success message
        const messagesDiv = document.getElementById('form-messages');
        messagesDiv.className = 'form-messages info';
        messagesDiv.textContent = 'Default email application has been opened. Please send the message from there.';
    }
}

// Initialize the contact form handler when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ContactForm();
});