// Toggle the dropdown menu on the main page
document.querySelector('.menu-button').addEventListener('click', function() {
    const dropdown = document.querySelector('.dropdown-content');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});

// Handle form submission for Parent Login
document.querySelector('#parent-login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.querySelector('#parent-username').value;
    const password = document.querySelector('#parent-password').value;
    
    // Here you can add login validation logic (e.g., check if username/password match)
    alert(`Parent Logged in: ${username}`);
});

// Handle form submission for Worker Login
document.querySelector('#worker-login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.querySelector('#worker-username').value;
    const password = document.querySelector('#worker-password').value;
    
    // Here you can add login validation logic for workers
    alert(`Worker Logged in: ${username}`);
});

// Handle form submission for Contact Form
document.querySelector('#contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    // You can add email sending logic or display an alert message
    alert(`Thank you, ${name}. We have received your message.`);
});



const footer = document.getElementById('site-footer');
footer.style.backgroundColor = '#007bff';