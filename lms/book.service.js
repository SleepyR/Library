class BookService {

    getBookByName(username) {
        let json = localStorage.getItem("users");
        console.log(json);
        let myobj = JSON.parse(json)[username];
        return myobj;
    }


    addBook(img, title, authors, genres, description) {
        authors = authors.toString().split(",");
        genres = genres.toString().split(",");
        let book = new Book(img, title, authors, genres, description);
        let bla = JSON.parse(localStorage.getItem("books"));
        bla.push(book);
        localStorage.setItem("books", JSON.stringify(bla));
        console.log( (localStorage.getItem("books")));
    }
}
