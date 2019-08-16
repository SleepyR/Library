window.onload = ()=>{
    createBooks();
    window.lms = new LMS();
    let logOut = document.getElementById("signIn/signOut");
    if(window.lms.authService.isLogined()){
        logOut.innerHTML = "LOG OUT";
        logOut.href = "gallery.html";
        logOut.onclick = window.lms.authService.logout;
    }
};

function showStaff() {
    document.getElementById("container").style.display = "none";
    let div = document.createElement("div");
    div.innerHTML = "Welcome To Our Library"
    document.body.appendChild(div);

}
function showBooks() {
    document.getElementById("container").style.display = "block";
}
function createBooks() {
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
