// Determines if user is in the right section
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


