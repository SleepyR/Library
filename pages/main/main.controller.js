window.onload = ()=>{
    createBooks();
    createStaff();
    document.getElementById("staff").style.display = "none";
    window.lms = new LMS();
    let logOut = document.getElementById("signIn/signOut");
    if(window.lms.authService.isLogined()){
        logOut.innerHTML = "LOG OUT";
        logOut.href = "gallery.html";
        logOut.onclick = window.lms.authService.logout;
    }
    showLabel("Books");
    var modal1 = document.getElementById("BookModal");
    var modal2 = document.getElementById("UserModal");
    window.onclick = function(event) {
        if (event.target == modal1 || event.target == modal2) {
            modal1.style.display = "none";
            modal2.style.display = "none";
        }
    }
};
function showLabel(label) {
    let div = document.getElementById("label");
    div.innerHTML = "";
    let name = document.createElement("div");
    name.innerHTML = label;
    div.appendChild(name);
    let buttons = document.createElement("div");
    let button1 = document.createElement("div");
    let button2 = document.createElement("div");
    let button3 = document.createElement("div");
    switch (label) {
        case "Users":
            button1.setAttribute("class","button border-radius background-primary text-size-12 text-white text-strong");
            button1.innerHTML = "ADD USER";
            button2.setAttribute("class","button border-radius background-primary text-size-12 text-white text-strong");
            button2.innerHTML = "EDIT USER";
            button3.setAttribute("class","button border-radius background-primary text-size-12 text-white text-strong");
            button3.innerHTML = "DELETE USER";
            buttons.appendChild(button3);
            buttons.appendChild(button2);
            buttons.appendChild(button1);
            var modal2 = document.getElementById("UserModal");
            button1.onclick = () => { modal2.style.display = "block"; }
            break;
        case "Books":
            button1.setAttribute("class","button border-radius background-primary text-size-12 text-white text-strong");
            button1.innerHTML = "ADD BOOK";
            button2.setAttribute("class","button border-radius background-primary text-size-12 text-white text-strong");
            button2.innerHTML = "EDIT BOOK";
            button3.setAttribute("class","button border-radius background-primary text-size-12 text-white text-strong");
            button3.innerHTML = "DELETE BOOK";
            buttons.appendChild(button3);
            buttons.appendChild(button2);
            buttons.appendChild(button1);
            var modal1 = document.getElementById("BookModal");
            button1.onclick = () => { modal1.style.display = "block"; }
            break;
    }
    document.getElementById("label").appendChild(buttons);
}
function showStaff() {
    document.getElementById("container").style.display = "none";
    document.getElementById("books").style.display = "none";
    document.getElementById("staff").style.display = "block";
    showLabel("Users");
}
function showBooks() {
    document.getElementById("container").style.display = "block";
    document.getElementById("books").style.display = "block";
    document.getElementById("staff").style.display = "none";
    showLabel("Books");
}
function createStaff() {
    let users = JSON.parse(localStorage.getItem("users"));
    for (let user in users){
        let div1 = document.createElement("div");
        div1.setAttribute("class","s-12 m-12 l-4 margin-bottom");
        let div2 = document.createElement("div");
        div2.setAttribute("class","padding-2x block-bordered border-radius");
        let icon = document.createElement("i");
        icon.setAttribute("class","icon-user_male icon2x text-primary margin-bottom-30");
        let name = document.createElement("h2");
        name.setAttribute("class","text-thin");
        name.innerHTML = users[user]["name"] + " "+ users[user]["surname"];
        let info = document.createElement("p");
        info.setAttribute("class","margin-bottom-30");
        info.innerText = "Email: " + users[user]["email"] + "\n"+"Phone: "+users[user]["phoneNumber"];
        let button = document.createElement("div");
        button.innerHTML = "EDIT USER";
        button.setAttribute("class","button border-radius background-primary text-size-12 text-white text-strong");
        div2.appendChild(icon);
        div2.appendChild(name);
        div2.appendChild(info);
        div2.appendChild(button);
        div1.appendChild(div2);
        document.getElementById("staff").appendChild(div1);
    }
}
function createBooks() {
    div = document.getElementById("label");
    div.innerHTML = "Books";
    let my_JSON_object = JSON.parse(localStorage.getItem("books"));
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
    }
}



