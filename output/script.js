document.getElementById('SignupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (password.length < 10) {
        errorMessage.textContent = 'Password must be at least 8 characters long.';
    } else {
        errorMessage.textContent = '';
       
        alert('Login successful!');
    }
});
