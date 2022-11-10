const hamburgerBtn = document.querySelector('.hamburger-btn');

hamburgerBtn.addEventListener('click', openHamburgerMeny);

const navList = document.querySelector('nav');

const hamburgerCrossBtn = document.querySelector('.hamburger-cross');

hamburgerCrossBtn.addEventListener('click', closeHamburgerMeny)

function openHamburgerMeny() {
    
        navList.classList.add('nav-list-show');
        
    }
      


function closeHamburgerMeny() {
    navList.classList.remove('nav-list-show');
}


// hamburgerBtn.classList.add('hamburger-cross')
//     console.log('clicked');
//     console.log(navList);