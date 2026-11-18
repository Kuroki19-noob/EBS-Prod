document.addEventListener('DOMContentLoaded', () => {
const greetings = document.getElementById('greetings');
const currentPage = window.location.pathname;

//if (currentPage.includes('user')){
//    greetings.textContent = 'Welcome User'
//}
//else if (currentPage.includes('admin')){
//    greetings.textContent = 'Welcome Admin'
//}
//else{
//    greetings.textContent = ' Guest'
//}
//User Pages

if(currentPage.includes('user')){
 if(currentPage.includes('user/borrow')){
    greetings.textContent = 'Borrow Section'
 } 
 else if (currentPage.includes('user/borrowed')){
    greetings.textContent = 'Borrowed Section'
 }
 else if (currentPage.includes('user/reports')){
    greetings.textContent = 'Reports Section'
 }
 else{
    greetings.textContent = 'User Dashboard'
 }
}
else{
//Admin Pages
 if(currentPage.includes('admin/equipments')){
    greetings.textContent = 'Equipments Section'
 } 
 else if (currentPage.includes('admin/inventory')){
    greetings.textContent = 'Borrowed Section'
 }
 else if (currentPage.includes('admin/reports')){
    greetings.textContent = 'Reports Section'
 }
 else{
    greetings.textContent = 'Admin Dashboard'
 }
}

});










