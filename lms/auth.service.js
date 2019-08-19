class AuthService {

    constructor(umService, permissionService, RoleService, BookService) {
        this.umService = umService;
        this.permissionService = permissionService;
        this.roleService = RoleService;
        this.bookService = BookService;
    }

    login(username, password) {
        debugger;
        let user = this.umService.getUserByUsername(username);

        if(user == null) {
            throw new Error(`user with ${username} not found`);
        }

        console.log(user);

        if(user.password === EncryptionHelper.encrypt(password)) {
            let userPermissions = this.roleService.getPermissions(user.role);
            sessionStorage.setItem('authInfo', JSON.stringify({
                user: user,
                permissions: userPermissions
            }));
        } else {
            throw new Error(`incorrect username or password`);
        }
        return user;
    }

    logout() {
        sessionStorage.removeItem('authInfo');
    }

    isLogined() {
        return sessionStorage.getItem('authInfo') != null;
    }

    signUp(firstName, lastName, phone, email,username, password) { // TODO needs to be changed
        password = EncryptionHelper.encrypt(password);
        this.umService.setUser(firstName, lastName, phone, email, "Patron", username,password);
    }
}
