window.onload = function () {
    const login = document.getElementById("form-login")
    login.addEventListener('submit', Login);

    function Login(event) {
        event.preventDefault();
        document.location.href = 'dashboard.html'
    }
}

