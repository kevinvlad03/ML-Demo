document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const submitBtn = document.querySelector('#loginForm button[type="submit"]');

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

    // When pressing enter, display alert
    document.addEventListener('keypressed', (e) => {
        if (e.key === 'Enter') {
            Swal.fire({
                title: "Custom width, padding, color, background.",
                width: 600,
                padding: "3em",
                color: "#138A36",
                background: "#fff url(https://img.freepik.com/premium-photo/hacker-code-running-down-computer-screen-terminal-3d-rendering_94607-1157.jpg?w=2000)",
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnR5M3g0am5zemdhNGI1Y3FwcHA4dDN2ajZleXNlOXd2Zjh2Ym5pMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ohONS2y8GTDoI/giphy.webp")
                  left top
                  no-repeat
                `
              });
        }
    });

    // When pressing submit button, prevent default form submission and check manually the email and password
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        if (email === 'admin@admin.com' && password === 'admin') {
            Swal.fire({
                title: "Login successful",
                icon: "success",
                text: "Welcome Admin!",
            });
        } else {
            Swal.fire({
                title: "Invalid email or password",
                width: 600,
                padding: "3em",
                color: "#138A36",
                background: "#fff url(https://img.freepik.com/premium-photo/hacker-code-running-down-computer-screen-terminal-3d-rendering_94607-1157.jpg?w=2000)",
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnR5M3g0am5zemdhNGI1Y3FwcHA4dDN2ajZleXNlOXd2Zjh2Ym5pMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ohONS2y8GTDoI/giphy.webp")
                  left top
                  no-repeat
                `
              });
        }
    });
});
