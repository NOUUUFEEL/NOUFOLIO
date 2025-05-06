# Portfolio Website

This is a personal portfolio website built with Next.js and Tailwind CSS.

## EmailJS Contact Form

The contact form uses EmailJS to send emails directly from the client side without requiring any server-side code or environment variables. The setup is already complete with your service ID and public key.

### Features Added to the Contact Form

1. **Direct Email Sending**: Uses EmailJS's direct sending method without requiring a template
2. **Character Counter**: Shows the number of characters in the message field
3. **Loading Animation**: Displays a spinner while the form is submitting
4. **Form Validation**: Validates email format and required fields
5. **Spam Protection**: Includes a honeypot field to catch bots
6. **Success/Error Feedback**: Visual feedback for form submission states

### How It Works

The contact form sends the following information:
- Name of the person contacting you
- Email address of the person contacting you
- Message content

### Customization

If you want to customize the email parameters, you can modify the `templateParams` object in the `handleSubmit` function of both contact form components.

## Features

- Full-screen sections with smooth scrolling
- Responsive design for all screen sizes
- Dark/light mode toggle
- Language switching (English/French)
- Interactive resume viewer
- Project showcase with links to code and demos
- Contact form with EmailJS integration

## Troubleshooting

If you encounter issues with the contact form:

1. Check the browser console for error messages
2. Verify that your EmailJS service is active
3. Check your EmailJS dashboard for any account limitations or issues
