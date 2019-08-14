class Role {
    constructor (roleName) {
        this.roleName = roleName;
        this.PermissionService = new PermissionService();
    }
}