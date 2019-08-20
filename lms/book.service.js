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
        let book = new Book(img, title, authors, genres, description, this.ID());
        let tempHolder = JSON.parse(localStorage.getItem("books"));
        tempHolder.push(book);
        localStorage.setItem("books", JSON.stringify(tempHolder));
        console.log((localStorage.getItem("books")));
    }

    constructor() {
        function incrementer() {
            let c = 1;
            return function () {
                return c++;
            }
        }
        this.ID = incrementer();
    }


    getBookByTitle(user, title) {
        this.bookArray = JSON.parse(localStorage.getItem("books"));
        if(RoleService.getPermissions(user).getBook) {
            let arr = JSON.parse(localStorage.getItem("books"));
            let answer = [];
            for(let book of arr) {
                if(book.title == title) {
                    answer.push(book);
                }
            }
            return answer;
        }
    }
}

