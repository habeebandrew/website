# Contact Form Setup Guide

The contact form messaging system has been developed with three different methods. You can choose the method that suits you best:

## Currently Active Method: Mailto (Simple)

**Advantages:**
- No additional setup required
- Works immediately
- Completely free

**Disadvantages:**
- Opens the user's default email application
- May not work on all devices
- Depends on having a configured email app on the user's device

## Method 1: EmailJS (Professional)

### Steps:
1. Go to [EmailJS](https://www.emailjs.com/)
2. Create a free account
3. Add an email service (Gmail, Outlook, etc.)
4. Create a message template
5. Get:
   - Service ID
   - Template ID  
   - Public Key

### Activation:
In the `contact.js` file, change the last line from:
```javascript
new MailtoContactForm();
```
to:
```javascript
new ContactForm();
```

And update the information in:
```javascript
this.emailjsConfig = {
    serviceID: 'YOUR_SERVICE_ID',
    templateID: 'YOUR_TEMPLATE_ID', 
    publicKey: 'YOUR_PUBLIC_KEY'
};
```

## Method 2: Formspree (Easy)

### Steps:
1. Go to [Formspree](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Get the Form Endpoint

### Activation:
In the `contact.js` file, change the last line from:
```javascript
new MailtoContactForm();
```
to:
```javascript
new FormspreeContactForm();
```

And update the link:
```javascript
this.formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
```

## Suggested EmailJS Message Template:

```
Subject: New message from {{subject}}

Hello {{to_name}},

You have received a new message from your personal website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the contact form on your personal website.
```

## Features Available in All Methods:

✅ Data validation
✅ User confirmation messages
✅ Loading state during sending
✅ Responsive design
✅ Clear error messages
✅ Form reset after successful sending

## Testing the System:

1. Open `contact.html` in the browser
2. Fill the form with test information
3. Click "Send Message"
4. Verify the confirmation message appears

## Troubleshooting:

- Make sure to update IDs and keys
- Check the developer console (F12) for errors
- Verify the email address used is correct

## Security:

- All methods are secure
- No data is stored locally
- EmailJS and Formspree use HTTPS
- No sensitive information in the code

---

**Note:** The current method (Mailto) works immediately without additional setup, but for a more professional experience, it's recommended to use EmailJS or Formspree.