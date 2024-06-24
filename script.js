document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const submitBtn = document.getElementById('submitBtn');

    loginBtn.addEventListener('click', () => {
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    });

    signupBtn.addEventListener('click', () => {
        signupBtn.classList.add('active');
        loginBtn.classList.remove('active');
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });

    // when pressing submit button, prevent default form submission and check manually the email and password
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email === 'admin@admin.com' && password === 'admin') {
            alert('Login successful');
        } else {
            alert('Login failed');
        }
    });
});
