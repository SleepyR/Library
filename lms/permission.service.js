class PermissionService {

    permissions = {
            'getBook': ['Admin', 'Librarian'],
            'returnBook': ['Admin', 'Librarian'],
            'renewBook': ['Admin', 'User'], 
            'holdBook': ['Admin', 'User'],
            'reserveBook': ['Admin', 'User'],
            'addBook': ['Admin', 'Librarian'],
            'editBook': ['Admin', 'Librarian'],
            'deleteBook': ['Admin', 'Librarian'],
            'addLibrarian': ['Admin'],
            'editLibrarian': ['Admin'],
            'deleteLibrarian': ['Admin'],
        }

    getPermission(permission) {
        let role = sessionStorage.getItem('authInfo')['role'];
        return (this.permissions)[permission].includes(role);
    }
}
