const hamburgerBtn = document.querySelector('.hamburger-btn');
hamburgerBtn.addEventListener('click', openHamburgerMeny);
const navList = document.querySelector('nav');
const hamburgerCrossBtn = document.querySelector('.hamburger-cross');
hamburgerCrossBtn.addEventListener('click', closeHamburgerMeny)
const body = document.querySelector('body');
const header = document.querySelector('header')



function openHamburgerMeny() {
    navList.classList.add('nav-list-show');
    body.classList.add('fade-out-animation');
    
}
 
function closeHamburgerMeny() {
    navList.classList.remove('nav-list-show');
}