window.onload = function () {
    window.lms = new LMS();
    console.log('sdfs');
};


function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    try {
        let info = window.lms.authService.login(username, password);
        window.location = '../../../Profile/profile pages/gallery.html';
        console.log(info);
    } catch (e) {
        console.log(e);
        document.getElementById('error-message').innerText = e.message;
    }
}
