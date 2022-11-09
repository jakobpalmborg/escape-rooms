const hamburgerBtn = document.querySelector('.hamburger-btn');

hamburgerBtn.addEventListener('click', openHamburgerMeny);

const navList = document.querySelector('nav');
console.log(navList);

function openHamburgerMeny() {
    navList.classList.add('nav-list-show');
    hamburgerBtn.classList.add('hamburger-cross')
    console.log('clicked');
    console.log(navList);
}