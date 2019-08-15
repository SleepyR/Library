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
