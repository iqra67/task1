document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (!name || !email || !message) {
        document.getElementById('response').innerHTML = '<p style="color:red;">Please fill in all fields.</p>';
        return;
    }
    
    // In a real application, you would send this data to a server
    // For GitHub pages demo, we'll just display the submitted data
    document.getElementById('response').innerHTML = `
        <h3>Thank you for your submission, ${name}!</h3>
        <p>We'll contact you at ${email} soon.</p>
        <p>Your message: ${message}</p>
    `;
    
    // Clear the form
    document.getElementById('contactForm').reset();
});
