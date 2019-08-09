function StepRange(from,to,step) {
    let array = new Array();
    let j = from;
    for(let i =0; j<to;i++){
        array[i] = j;
        j+=step;
    }
    return array;
}

function Name(number){
    this.name = "";
    for(let i=0;i< number;i++){
        let k = Math.random() * (122 - 97) + 97;
        if(i===0){this.name +=(String.fromCharCode(k)).toUpperCase();}
        else{this.name +=(String.fromCharCode(k));}
    }

}
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
//authors[Math.floor(Math.random()*authers.length)]
function book(id,title,author,pages) {
    this.id = id;
    this.name = title;
    this.author = author;
    this.pageCount = pages;
}
function Library(name){
    this.name = name;
    this.books = [];


}

let myBook = new book();
let x = new StepRange(2,100,3);
for (let i of x){
    console.log(i);
}


let name = new Name(2);
console.log(name.name);
