//copy menu for mobile


function copyMenu() {
    // copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departaments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    // copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('nav');
    navPlace.innerHTML = mainNav.innerHTML;

    // copy .header-top .wrapper to thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canva .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}

copyMenu();

//show mobile menu
const menuButton = document.querySelector('.trigger');
const closeButton = document.querySelector('.t-close');
const siteElement = document.querySelector('.site');

if (menuButton && closeButton && siteElement) {
    menuButton.addEventListener('click', function () {
        siteElement.classList.toggle('showmenu');
    });

    closeButton.addEventListener('click', function () {
        siteElement.classList.remove('showmenu');
    });
} else {
    console.error('No se encontraron uno o más elementos en el DOM.');
}


//show menu on mobile
const submenu = document.querySelectorAll('.has-child');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand');
}

//slider
const swiper = new Swiper('.swiper', {
    
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  
  });