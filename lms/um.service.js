class UmService {
    constructor() {
        this.usernameToUser = new Map();
        this.usernameToUser.set("superman", {username: "superman", password: "foobar"}); // TEMPORARY LINE
    }


    getUserByUsername(username) {
        return this.usernameToUser.get(username);
    }


    setUser(firstName, lastName, phone, email, role, username) {
        this.usernameToUser.set(username, new User(firstName, lastName, phone, email,role, password, username));
    }
}
