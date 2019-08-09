class AuthService{
    constructor(umService,permissionService){
        this.umService =umService;
        this.permisssionService = permissionService;

    }
    login(username,password){
        let user = this.umService.getUserByUsername(username);
        if(user.password === Encryption.encrypt(password)){
            let userPermissions= this.permisssionService.getPermissions();
        }
    }
}
