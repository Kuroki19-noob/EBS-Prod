document.addEventListener('DOMContentLoaded', () => {
const greetings = document.getElementById('greetings');
const currentPage = window.location.pathname;

if (currentPage.includes('user')){
    greetings.textContent = 'Welcome User'
}
else if (currentPage.includes('admin')){
    greetings.textContent = 'Welcome Admin'
}
else{
    greetings.textContent = ' Guest'
}});

document.addEventListener('DOMContentLoaded', () => {
const loginForm = document.getElementById('loginForm'); 

if (loginForm){
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
  

    const accounts = {
        user: {
            username: "lccborrower",
            password: "lccborrower123",
            role: './user/user.html'                            
        },
        admin: {
            username: "lccborroweradmin",
            password: "lccborroweradmin123",
            role: './admin/admin.html'
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

        setTimeout(() => { window.location.href = account.role; }, 800);   // removed the pointless if
    } else {
        loginMessage.textContent = 'Invalid username or password.';
        loginMessage.className = 'login-message error';
    }
})}});



