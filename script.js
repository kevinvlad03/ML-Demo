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
    
    document.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            

        }
    });


    // When pressing submit button, prevent default form submission and check manually the email and password
    
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
    
            // Show the Toast alert
            const Toast = Swal.mixin({
                toast: true,
                position: "top",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                background: 'rgba(58, 75, 60, 0.902)',
                color: '#fff',
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            
            Toast.fire({
                icon: "warning",
                title: "Verifying Credentials..."
            });
            
            // Continue with login logic after toast is shown
            setTimeout(() => {
                const email = document.getElementById('loginEmail').value;
                const password = document.getElementById('loginPassword').value;
    
                if (email === 'admin@admin.com' && password === 'admin') {
                    Swal.fire({
                        title: "Access Granted",
                        icon: "success",
                        text: "Welcome, Commander! You have successfully logged into the secure system.",
                        confirmButtonText: 'Proceed',
                        background: '#1c1c1c',
                        color: '#fff',

                }).then(() => {
                    window.location.href = 'redirect.html'; // Redirect to the redirect page
                });

                    
                } else {
                    let timerInterval;
                    Swal.fire({
                        title: "BOT DETECTED, you have been kicked!",
                        html: "The page will automatically close in <b></b> milliseconds.",
                        width: 600,
                        padding: "3em",
                        color: "#fff",
                        background: "#fff url('doorlogo.jpg') center/cover no-repeat",
                        backdrop: `
                          rgba(0,0,123,0.4)
                          url("https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnR5M3g0am5zemdhNGI1Y3FwcHA4dDN2ajZleXNlOXd2Zjh2Ym5pMSZlcD12MV9pbnRlcm5naWYmY3Q9Zw/ohONS2y8GTDoI/giphy.webp")
                          top
                            repeat
                        `,
                        timer: 5000,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading();
                            const timer = Swal.getHtmlContainer().querySelector("b");
                            timerInterval = setInterval(() => {
                                timer.textContent = `${Swal.getTimerLeft()}`;
                            }, 100);
                        },
                        willClose: () => {
                            clearInterval(timerInterval);
                        }
                    }).then((result) => {
                        if (result.dismiss === Swal.DismissReason.timer) {
                            window.location.href = "index.html";
                        }
                    });
                }
            }, 3000); // 3000ms delay to wait for the toast to finish
        });
    });
    
