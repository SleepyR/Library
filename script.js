let authors = [
    "William Shakespeare","Emily Dickinson",
    " H. P. Lovecraft",
    "Arthur Conan Doyle",
    "Leo Tolstoy",
    "Edgar Allan Poe",
    "Robert Ervin Howard",
    "Rabindranath Tagore",
    "Rudyard Kipling",
    "Seneca",
    "John Donne",
    "Sarah Williams",
    "Oscar Wilde",
    "Catullus",
    "Alfred Tennyson",
    "William Blake",
    "Charles Dickens",
    "John Keats",
    "Theodor Herzl",
    "Percy Bysshe Shelley",
    "Ernest Hemingway",
    "Barack Obama",
    "Anton Chekhov",
    "Henry Wadsworth Longfellow",
    "Arthur Schopenhauer",
    "Jacob De Haas",
    "George Gordon Byron",
    "Jack London",
    "Robert Frost",
    "Abraham Lincoln",
    "Henry",
    "Ovid",
    "Robert Louis Stevenson",
    "John Masefield",
    "James Joyce",
    "Clark Ashton Smith",
    "Aristotle",
    "William Wordsworth",
    "Jane Austen",
    "Niccolo Machiavelli",
    "Lewis Carroll",
    "Robert Burns",
    "Edgar Rice Burroughs",
    "Plato",
    "John Milton",
    "Ralph Waldo Emerson",
    "Margaret Thatcher",
    "Sylvie d'Avigdor",
    "Marcus Tullius Cicero",
    "Banjo Paterson",
    "Woodrow Wilson",
    "Walt Whitman",
    "Theodore Roosevelt",
    "Agatha Christie",
    "Ambrose Bierce",
    "Nikola Tesla",
    "Franz Kafka"
];

function Name(number){
    this.name = "";
    for(let i=0;i< number;i++){
        let k = Math.random() * (122 - 97) + 97;
        if(i===0){this.name +=(String.fromCharCode(k)).toUpperCase();}
        else{this.name +=(String.fromCharCode(k));}
    }

}
let author = authors[Math.floor(Math.random()*authors.length)];
let myBook = new Book(1,"WIlliams",author,652);
let myLib = new Library("Khnko Aper");
myLib.registerBooks(myBook);
console.log(myLib);
console.log(myLib.getAllAuthors());
console.log(myLib.authorReport());
let name = new Name(2);
console.log(name.name);



