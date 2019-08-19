function addBook() {
    let img = document.getElementById('img').value;;
    let title = document.getElementById('title').value;
    let authors = document.getElementById('authors').value;
    let genres = document.getElementById('genres').value;
    let description = document.getElementById('description').value;
    try {
        let info = window.lms.authService.bookService.addBook(img, title, authors, genres, description);
        var modal = document.getElementById("BookModal");
        modal.style.display = "none";
        location.reload();
        console.log(info);
    } catch (e) {
        console.log(e);
        document.getElementById('error-message').innerText = e.message;
    }
}
