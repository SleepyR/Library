window.onload = function () {
    window.lms = new LMS();
    console.log('sdfs');

    if (window.lms.authService.isLogined()) {
        window.location = 'some.html'
    }
};


function signUp() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let phoneNumber = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    try {
        let info = window.lms.authService.signUp(name,surname,phoneNumber,email, "Patron", username, password);
        window.location = "../../../login/Login_v3/Login_v3/index.html";
    } catch (e) {
        console.log(e);
        document.getElementById('error-message').innerText = e.message;
    }
}
