class UmService {

    getUserByUsername(username) {
        let json = localStorage.getItem("users");
        console.log(json);
        let myobj = JSON.parse(json)[username];
        return myobj;
    }


    setUser(firstName, lastName, phone, email, role,username,password) {
        let user = new User(firstName, lastName, phone, email,role, username,password);
        console.log( localStorage.getItem("users"));
        let bla = JSON.parse(localStorage.getItem("users"));
        console.log(bla);
        console.log(user);
        bla[username]= user;
        localStorage.setItem("users", JSON.stringify(bla));
        console.log( (localStorage.getItem("users")));

    }
}
