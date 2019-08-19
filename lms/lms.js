class LMS {

    constructor() {
        this._authService = new AuthService(new UmService(), new PermissionService(), new RoleService(), new BookService());
    }
    get authService() {
        return this._authService;
    }
}
