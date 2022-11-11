const hamburgerBtn = document.querySelector('#hamburger-btn');
hamburgerBtn.addEventListener('click', openHamburgerMeny);
const navList = document.querySelector('nav');
const hamburgerCrossBtn = document.querySelector('#hamburger-cross');
hamburgerCrossBtn.addEventListener('click', closeHamburgerMeny)
const backDrop = document.querySelector('div')



function openHamburgerMeny() {
    navList.classList.add('nav-list-show');
    backDrop.classList.add('backdrop');
    hamburgerCrossBtn.classList.add('hamburger-cross');
    
}
 
function closeHamburgerMeny() {
    navList.classList.remove('nav-list-show');
    backDrop.classList.remove('backdrop');
    hamburgerCrossBtn.classList.add('hamburger-cross');
}