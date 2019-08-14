class  RoleService {
    constructor () {
        this.roles = new Map();
        this.setUpRoles();
    }

    setUpRoles() {
        this.roles.set("Librarian", new Role("Librarian"));
        this.roles.set("Patron", new Role("Patron"));
        this.roles.set("Admin", new Role("Admin"));

        for(let R of this.roles) {
            let name = R.roleName;
            switch(name)  {
                case "Librarian": {
                    R.PermissionService.getBook = true;
                    R.PermissionService.returnBook = true;
                    R.PermissionService.renewBook = true;
                    R.PermissionService.holdBook = false;
                    R.PermissionService.reserveBook = false;
                    R.PermissionService.addBook = true;
                    R.PermissionService.editBook = true;
                    R.PermissionService.deleteBook = true;
                    R.PermissionService.addLibrarian = false;
                    R.PermissionService.editLibrarian = false;
                    R.PermissionService.deleteLibrarian = false;
                    break;
                }
                case "Patron": {
                    R.PermissionService.getBook = false;
                    R.PermissionService.returnBook = false;
                    R.PermissionService.renewBook = false;
                    R.PermissionService.holdBook = true;
                    R.PermissionService.reserveBook = true;
                    R.PermissionService.addBook = false;
                    R.PermissionService.editBook = false;
                    R.PermissionService.deleteBook = false;
                    R.PermissionService.addLibrarian = false;
                    R.PermissionService.editLibrarian = false;
                    R.PermissionService.deleteLibrarian = false;
                    break;
                }
                case "Admin": {
                    R.PermissionService.getBook = true;
                    R.PermissionService.returnBook = true;
                    R.PermissionService.renewBook = true;
                    R.PermissionService.holdBook = true;
                    R.PermissionService.reserveBook = true;
                    R.PermissionService.addBook = true;
                    R.PermissionService.editBook = true;
                    R.PermissionService.deleteBook = true;
                    R.PermissionService.addLibrarian = true;
                    R.PermissionService.editLibrarian = true;
                    R.PermissionService.deleteLibrarian = true;
                    break;
                }
            }

        }
    }


    getPermissions(user) {
        return this.roles.get(user).PermissionService;
    }

}
