function addUser() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let role = document.getElementById('role').value;
    let phoneNumber = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    try {
        let info = window.lms.authService.signUp(name, surname, phoneNumber, email, role,username, password);
        var modal = document.getElementById("UserModal");
        modal.style.display = "none";
        location.reload();
    } catch (e) {
        console.log(e);
        document.getElementById('error-message').innerText = e.message;
    }
}
