document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    if (username === '' || password === '') {
        message.textContent = 'Both fields are required!';
        return;
    }

   
    if (username === ' ' && password === ' ') {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
        
    } else {
        message.textContent = 'Invalid username or password!';
        message.style.color = 'red';
    }
});
