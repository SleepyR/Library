class LMS {

    constructor() {
        this._authService = new AuthService(new UmService(), new PermissionService());
        this._roleService = new RoleService();
    }


    get authService() {
        return this._authService;
    }
}