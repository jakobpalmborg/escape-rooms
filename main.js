const hamburgerMeny = document.querySelector('.hamburger-btn');

hamburgerMeny.addEventListener('click', openHamburgerMeny);

const navList = document.querySelector('nav');
console.log(navList);

function openHamburgerMeny() {
    navList.classList.add('nav-list-show');
    console.log('clicked');
    console.log(navList);
}