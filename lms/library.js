class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }
    registerBooks(book){
        if(book instanceof Book)
            this.books.push(book);
        else alert("You can only register a valid book");
    }
    getAllAuthors(){
        let allAuthors = [];
        for(let book of this.books){
            allAuthors.push(book.author);
        }
        return allAuthors;
    }
    getBooksOfAuthor(author){
        let newBooks = [];
        for( let book of this.books) {
            if (book.author === author)
                newBooks.push(book.name);
        }
        return newBooks;
    }
    authorReport(){
        let allAuthors= this.getAllAuthors();
        allAuthors.map((a) =>{return this.getBooksOfAuthor(a).length;});
    }
    takeBook(bookName){
        for(let book of books){
            if(book.name === bookName){
                book.isAvalable = false;
                break;
            }
        }
    }
    returnBook(bookName){
        for(let book of books){
            if(book.name === bookName){
                book.isAvalable = true;
                break;
            }
        }
    }
    getAllNotAvailableBooks(){
        let notAvailableBooks = [];
        for(let book of books){
            if(book.isAvalable === false){
                notAvailableBooks.push(book.name);
            }
        }
        return notAvailableBooks;
    }
}
