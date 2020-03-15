
export function loginExit() {
    const currentToken = localStorage.getItem('token');
    localStorage.removeItem('token');   
    window.location.reload();
    
}