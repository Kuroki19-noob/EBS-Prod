document.addEventListener('DOMContentLoaded', () => {
const loginForm = document.getElementById('loginForm'); 

if (loginForm){
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
  

    const accounts = {
        user: {
            username: "lccborrower",
            password: "lccborrower123",
            role: '/user'                            
        },
        admin: {
            username: "lccborroweradmin",
            password: "lccborroweradmin123",
            role: '/admin'
        }
    };

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    const loginMessage = document.getElementById('loginMessage'); 
    const account = accounts[role];

    if (account && username === account.username && password === account.password) {
        loginMessage.textContent = 'Login successful!';
        loginMessage.className = 'login-message success';

        setTimeout(() => { window.location.href = account.role; });
    } else {
        loginMessage.textContent = 'Invalid username or password.';
        loginMessage.className = 'login-message error';
    }
    })

}});