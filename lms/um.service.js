class UmService {

    getUserByUsername(username) {
        let json = localStorage.getItem(username);
        let myobj = JSON.parse(json);
        return myobj;
    }


    setUser(firstName, lastName, phone, email, role, username,password) {
        let user = new User(firstName, lastName, phone, email,role, password, username);
        let json = JSON.stringify(user);
        localStorage.setItem(user.username,json);
    }
}

//
// localStorage.setItem("books",JSON.stringify([
//     {
//         "id": 1,
//         "title": "In Search of Lost Time",
//         "authors": [
//             "Marcel Proust"
//         ],
//         "genres": [
//             "novel"
//         ],
//         "status": "Available",
//         "description": "Swann's Way, the first part of A la recherche de temps perdu, Marcel Proust's seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work.  ",
//         "img": "https://images-na.ssl-images-amazon.com/images/I/51A685AMYoL._SL160_.jpg"
//     },
//     {
//         "id": 2,
//         "title": "Don Quixote",
//         "authors": [
//             "Miguel de Cervantes"
//         ],
//         "genres": [
//             "novel"
//         ],
//         "status": "Available",
//         "description": "Alonso Quixano, a retired country gentleman in his fifties, lives in an unnamed section of La Mancha with his niece and a housekeeper. He has become obsessed with books of chivalry.",
//         "img": "https://images-na.ssl-images-amazon.com/images/I/41u9Jedk-mL._SL160_.jpg"
//     },
//     {
//         "id": 3,
//         "title": "Ulysses",
//         "authors": [
//             "James Joyce"
//         ],
//         "genres": [
//             "novel"
//         ],
//         "status": "Available",
//         "description": "Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus (Latinised into Ulysses).",
//         "img": "https://images-na.ssl-images-amazon.com/images/I/51wTLf4JVwL._SL160_.jpg"
//     },
//     {
//         "id": 4,
//         "title": "The Divine Comedy",
//         "authors": [
//             "Dante Alighieri"
//         ],
//         "genres": [
//             "novel"
//         ],
//         "status": "Available",
//         "description": " Belonging in the immortal company of the great works of literature, Dante Alighieri&#39;s poetic masterpiece, The Divine Comedy, is a moving human drama, an unforgettable visionary journey.",
//         "img": "https://images-na.ssl-images-amazon.com/images/I/61Ml8RHqxrL._SL160_.jpg"
//     },
//     {
//         "id": 5,
//         "title": "The Great Gatsby",
//         "authors": [
//             "F. Scott Fitzgerald"
//         ],
//         "genres": [
//             "novel"
//         ],
//         "status": "Available",
//         "description": "The novel chronicles an era that Fitzgerald himself dubbed the &quot;Jazz Age&quot;. Following the shock and chaos of World War I, American society enjoyed unprecedented levels of prosperity during the &quot;",
//         "img": "https://images-na.ssl-images-amazon.com/images/I/51vv75oglyL._SL160_.jpg"
//     },
//     {
//         "id": 6,
//         "title": "Moby Dick",
//         "authors": [
//             "Herman Melville"
//         ],
//         "genres": [
//             "novel"
//         ],
//         "status": "Available",
//         "description": "First published in 1851, Melville&#39;s masterpiece is, in Elizabeth Hardwick&#39;s words, &quot;the greatest novel in American literature.&quot;",
//         "img": "https://images-na.ssl-images-amazon.com/images/I/41h1CVFjjdL._SL160_.jpg"
//     },
//     {
//         "id": 7,
//         "title": "Hamlet",
//         "authors": [
//             "William Shakespeare"
//         ],
//         "genres": [
//             "novel"
//         ],
//         "status": "Available",
//         "description": "The Tragedy of Hamlet, Prince of Denmark, or more simply Hamlet, is a tragedy by William Shakespeare, believed to have been written between 1599 and 1601. ",
//         "img": "https://images-na.ssl-images-amazon.com/images/I/51dhOwUuI3L._SL160_.jpg"
//     },
//     {
//         "id": 8,
//         "title": "War and Peace",
//         "authors": [
//             "Leo Tolstoy"
//         ],
//         "genres": [
//             "novel"
//         ],
//         "status": "Available",
//         "description": "Epic in scale, War and Peace delineates in graphic detail events leading up to Napoleon&#39;s invasion of Russia, and the impact of the Napoleonic era on Tsarist society.",
//         "img": "https://images-na.ssl-images-amazon.com/images/I/51J1nb00FLL._SL160_.jpg"
//     },
//     {
//         "id": 9,
//         "title": "The Odyssey",
//         "authors": [
//             "Homer"
//         ],
//         "genres": [
//             "novel"
//         ],
//         "status": "Available",
//         "description": "The Odyssey is one of two major ancient Greek epic poems attributed to Homer. It is, in part, a sequel to the Iliad, the other work traditionally ascribed to Homer.",
//         "img": "https://images-na.ssl-images-amazon.com/images/I/51FR8mSgqoL._SL160_.jpg"
//     },
//     {
//         "id": 10,
//         "title": "One Hundred Years of Solitude",
//         "authors": [
//             "Gabriel Garcia Marquez"
//         ],
//         "genres": [
//             "novel"
//         ],
//         "status": "Available",
//         "description": "One of the 20th century&#39;s enduring works, One Hundred Years of Solitude is a widely beloved and acclaimed novel known throughout the world, and the ultimate achievement in a Nobel Prize–winning.",
//         "img": "https://images-na.ssl-images-amazon.com/images/I/51tkcSAhSDL._SL160_.jpg"
//     }
// ]));
