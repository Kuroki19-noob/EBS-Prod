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
}
 if(currentPage.includes('user/borrow')){
    greetings.textContent = 'Borrow Section'
 } 
 else if (currentPage.includes('user/inventory')){
    greetings.textContent = 'Inventory Section'
 }
 else if (currentPage.includes('user/reports')){
    greetings.textContent = 'Reports Section'
 }
 else{
    greetings.textContent = 'Dashboard'
 }
});










