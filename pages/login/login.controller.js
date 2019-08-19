window.onload = function () {
    window.lms = new LMS();
};


function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    try {
        let info = window.lms.authService.login(username, password);
        window.location = '../../../main/profile pages/gallery.html';
        console.log(info);
    } catch (e) {
        console.log(e);
        document.getElementById('error-message').innerText = e.message;
    }
}
