const IN_CIRCULATION = 3;
const ON_HOLD = 2;
const AVAILABLE = 1;

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

class Book {
    constructor(img, title, authors, genres, description, id){
        this.id = id;
        this.title = title;
        this.authors = authors; // array
        this.genres = genres; // array
        this.description = description;
        this.pageCount = getRandomArbitrary(123, 4567);
        this.status = AVAILABLE;
        this.img = img;
    }
}
