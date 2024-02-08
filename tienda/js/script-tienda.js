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
    //var topNav = document.querySelector('.header-top .wrapper');
    // var topPlace = document.querySelector('.off-canva .thetop-nav');
    //topPlace.innerHTML = topNav.innerHTML;
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


// Show dpt menu 
const dptButton = document.querySelector('.dpt-cat .dtp-trigger');
const dptClass = document.querySelector('.site');

dptButton.addEventListener('click', function () {
    dptClass.classList.toggle('showdpt');
});


//image product slider
var productThumb = new Swiper('.small-image', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3, 
    freeMode: true,
    watchSlidesProgress: true, 
    breakpoints: {
        481: {
            spaceBetween: 32,
        }
    }
});

var productBig = new Swiper('.big-image', {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: productThumb,
    }
});
