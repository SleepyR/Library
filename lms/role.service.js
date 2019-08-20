class  RoleService {
    constructor () {
        this.roles = new Map();
        this.setUpRoles();
    }

    setUpRoles() {

        this.roles.set("Librarian", new Role("Librarian"));
        this.roles.set("Patron", new Role("Patron"));
        this.roles.set("Admin", new Role("Admin"));

        for(let [name, role]of this.roles) {
            switch(name)  {
                case "Librarian": {
                    role.Permissions.getBook = true;
                    role.Permissions.returnBook = true;
                    role.Permissions.renewBook = true;
                    role.Permissions.holdBook = false;
                    role.Permissions.reserveBook = false;
                    role.Permissions.addBook = true;
                    role.Permissions.editBook = true;
                    role.Permissions.deleteBook = true;
                    role.Permissions.addUser = false;
                    role.Permissions.editUser = false;
                    role.Permissions.deleteUser = false;
                    break;
                }
                case "Patron": {
                    role.Permissions.getBook = false;
                    role.Permissions.returnBook = false;
                    role.Permissions.renewBook = false;
                    role.Permissions.holdBook = true;
                    role.Permissions.reserveBook = true;
                    role.Permissions.addBook = false;
                    role.Permissions.editBook = false;
                    role.Permissions.deleteBook = false;
                    role.Permissions.addUser = false;
                    role.Permissions.editUser = false;
                    role.Permissions.deleteUser = false;
                    break;
                }
                case "Admin": {
                    role.Permissions.getBook = true;
                    role.Permissions.returnBook = true;
                    role.Permissions.renewBook = true;
                    role.Permissions.holdBook = true;
                    role.Permissions.reserveBook = true;
                    role.Permissions.addBook = true;
                    role.Permissions.editBook = true;
                    role.Permissions.deleteBook = true;
                    role.Permissions.addUser = true;
                    role.Permissions.editUser = true;
                    role.Permissions.deleteUser = true;
                    break;
                }
            }

        }
    }


    getPermissions(user) {
        return this.roles.get(user).Permissions;
    }

}
