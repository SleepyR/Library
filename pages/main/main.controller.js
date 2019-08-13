
function createTable() {
    let request = new XMLHttpRequest();
    request.open("GET", "../../data/books.json", false);
    request.send(null);
    let my_JSON_object = JSON.parse(request.responseText);
    console.log(my_JSON_object["books"]);
    let table = document.createElement("table");
    for(let book of my_JSON_object["books"]){
        let row = document.createElement("tr");
        let imgtd = document.createElement("td");
        let img = document.createElement("img");
        img.src = book["img"];
        imgtd.appendChild(img);

        let info = document.createElement("td");
        let authors = "";
        book["authors"].forEach((author) => {authors += author;});
        info.innerText =  book["id"] + ". " + book["title"] +"\n"+ authors +"\n" + book["description"];

        // let infoTable = document.createElement("table");
        //
        // let title = document.createElement("td");
        // title.innerHTML = book["id"] + ". " + book["title"];
        // let authors = document.createElement("td");
        // authors.innerText = "";
        // book["authors"].forEach((author) => {authors.innerText += author;});

        row.appendChild(imgtd);
        row.appendChild(info);
        table.appendChild(row);
    }
    let tableContainer = document.getElementById("table");
    tableContainer.appendChild(table);
}
