class UmService {
    constructor() {

    }

    findUser(username) {
        let users = localStorage.getItem("users");
        let tempArr = JSON.parse(users);
        for (let user of tempArr) {
            if(user.username == username) {
                return user;
            }
        }
    }

    isAlreadyInThesystem(username) {
        let users = localStorage.getItem("users");
        let tempArr = JSON.parse(users);
        for (let user of tempArr) {
            if(user.username == username) {
                return true;
            }
        }
        return false;
    }

    getUserByUsername(username) {
        debugger;
        let json = localStorage.getItem("users");
        console.log(json);
        let myobj = JSON.parse(json);

        let user = this.findUser(username);
        return user;
        //return myobj.get(user); // TODO change this part to an array get
    }


    setUser(firstName, lastName, phone, email, role, username, password) {
        debugger;
        let user = new User(firstName, lastName, phone, email,role, username, password);
        let users = localStorage.getItem("users");
        let tempArr = JSON.parse(users);
        if(this.isAlreadyInThesystem()) { // TODO: a message showing that user already exists in the signUp part of the HTML
            throw new Error(`user with username: ${username} is already in the system`);
        }
        tempArr.push(user);
        localStorage.setItem("users", JSON.stringify(tempArr));
        console.log(localStorage.getItem("users"));
    }
}
