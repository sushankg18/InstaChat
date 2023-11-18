const loginButton = document.getElementById('login');
        const username = document.getElementById('username');
        const password = document.getElementById('password');
        const invalidUsername = document.getElementById('invalid-username');
        const invalidPassword = document.getElementById('invalid-password');
        const loadingLine = document.getElementById('loading-line');

        loginButton.addEventListener('click', () => {
            const loaderTimeout = setTimeout(() => {
                loadingLine.style.visibility = 'visible';
                setTimeout(() => {
                    if (username.value.trim() === "" || password.value.trim() === "") {
                        alert('Please fill all the given fields');
                        loadingLine.style.visibility = 'hidden';
                    } else if (username.value === 'user' && password.value === 'user') {
                        window.location.href = 'userdashboard.html';
                    } else {
                        invalidUsername.style.display = "block";
                        invalidPassword.style.display = "block";
                        loadingLine.style.visibility = 'hidden';
                    }
                }, 2000);
            }, 0);
        });