window.onload = ()=>{
    showBooks();
}
function showBooks() {
    // let request = new XMLHttpRequest();
    // request.open("GET", "../../../data/books.json", true);
    // request.send(null);
    // let my_JSON_object = JSON.parse(request.responseText);
    // console.log(my_JSON_object["books"]);
    let my_JSON_object = JSON.parse(localStorage.getItem("books"));
    // let table = document.createElement("table");
    for(let book of my_JSON_object){
        let div1 = document.createElement("div");
        div1.setAttribute("class","s-12 m-6 l-3");
        let div2 = document.createElement("div");
        div2.setAttribute("class","image-with-hover-overlay image-hover-zoom margin-bottom");
        let div3 = document.createElement("div");
        let img = document.createElement("img");
        img.src = book["img"];
        div3.setAttribute("class","image-hover-overlay background-primary");
        let div4 = document.createElement("div");
        div4.setAttribute("class","image-hover-overlay-content text-center padding-2x");
        let p = document.createElement("p");
        let authors = "";
        book["authors"].forEach((author) => {authors += author;});
        p.innerText = book["id"] + ". " + book["title"] +"\n"+ authors +"\n";
        div4.appendChild(p);
        div3.appendChild(div4);
        div2.appendChild(div3);
        div2.appendChild(img);
        div1.appendChild(div2);
        document.getElementById("container").appendChild(div1);

        // let row = document.createElement("tr");
        // let imgtd = document.createElement("td");
        // let img = document.createElement("img");
        // img.src = book["img"];
        // imgtd.appendChild(img);
        //
        // let info = document.createElement("td");
        // let authors = "";
        // book["authors"].forEach((author) => {authors += author;});
        // info.innerText =  book["id"] + ". " + book["title"] +"\n"+ authors +"\n" + book["description"];
        //
        // row.appendChild(imgtd);
        // row.appendChild(info);
        // table.appendChild(row);
    }

    // let tableContainer = document.getElementById("table");
    // tableContainer.appendChild(table);
}
