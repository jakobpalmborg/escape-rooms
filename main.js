const hamburgerBtn = document.querySelector('.hamburger-btn');

hamburgerBtn.addEventListener('click', openOrCloseHamburgerMeny);

const navList = document.querySelector('nav');
console.log(navList);

function openOrCloseHamburgerMeny() {
    if(navList.classList.contains('nav-list-show')) {
        navList.classList.remove('nav-list-show');
    } else {
        navList.classList.add('nav-list-show');
        
    }
    
    
}


// hamburgerBtn.classList.add('hamburger-cross')
//     console.log('clicked');
//     console.log(navList);