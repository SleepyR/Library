class LMS {

    constructor() {
        this._authService = new AuthService(new UmService(), new Permissions(), new RoleService(), new BookService());
    }
    get authService() {
        return this._authService;
    }
}
