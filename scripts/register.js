window.onload = function () {
    const register = document.getElementById("form-register")
    register.addEventListener('submit', Register);
   
    function Register(event) {
        event.preventDefault();
        document.location.href = 'index.html'
    }
}

