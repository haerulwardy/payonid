const swiper = new Swiper('.swiper-container', {
    // Optional parametersS
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1140: {
        slidesPerView: 3,
        spaceBetweenSlides: 30
      },
      720: {
        slidesPerView: 1,
        spaceBetweenSlides: 30
      },
      540: {
        slidesPerView: 1,
        spaceBetweenSlides: 30
      }, 
      300: {
        slidesPerView: 1,
        spaceBetweenSlides: 30
      }
    }
  });
// Now you can use all slider methods like
swiper.slideNext();

// show menu function
function showMenu() {
    // change icon
    addChangeIcon();
    // drop menu animation
    addDropMenuAnimation();
}
function closeMenu() {
  // change icon
  closeChangeIcon();
  // drop menu animation
  closeDropMenuAnimation();
}

// change icon function
function addChangeIcon() {
  const hamburgerMenu = document.querySelector('.header-hamburger');
  const closeMenu = document.querySelector('.header-close');
  hamburgerMenu.classList.add('hide');
  closeMenu.classList.add('show');
}

// function dropMenuAnimation
function addDropMenuAnimation() {
  const responsiveMenu = document.querySelector('.responsive-menu');
  responsiveMenu.classList.add('active');

  responsiveMenus('add');
}

function responsiveMenus(action) {
  const responsiveMenus = document.querySelector('.responsive-menus');
  if(action === 'add') {
    responsiveMenus.classList.add('active')
  } else if(action === 'remove') {
    responsiveMenus.classList.remove('active')
  }
}

// change icon function
function closeChangeIcon() {
  const hamburgerMenu = document.querySelector('.header-hamburger');
  const closeMenu = document.querySelector('.header-close');
  hamburgerMenu.classList.remove('hide');
  closeMenu.classList.remove('show');
}

// function dropMenuAnimation
function closeDropMenuAnimation() {
  const responsiveMenu = document.querySelector('.responsive-menu');
  responsiveMenu.classList.remove('active');

  // responsive menus
  responsiveMenus('remove');
}

// window on scroll
window.addEventListener('scroll', function() {
  // console.log(window.scrollY = 100);
  // header
  if( window.scrollY <= 0 ) {
    changeBgHeader('remove');
    headerMenus('remove');

    // show logo
    showLogo();
    // btn
    showBtnDownload();
  } else if ( window.scrollY > 0 ) {
    changeBgHeader('add');
    headerMenus('add');

    // hide logo
    hideLogo();
    // btn
    document.getElementById('btn-download').classList.add('scroll-btn');
  }
})

// function change bg header
function changeBgHeader(action) {
  const header = document.getElementById('header');
  if(action === 'remove') {
    header.classList.remove('scroll');
  } else if(action === 'add') {
    header.classList.add('scroll');
  }
}

// function header menus
function headerMenus(action) {
  const headerMenus = document.querySelectorAll('.header-menus a');
  if(action === 'remove') {
    headerMenus.forEach(menu => {
      menu.classList.remove('scroll');
    })
  } else if(action === 'add') {
    headerMenus.forEach(menu => {
      menu.classList.add('scroll');
    })
  }
}
// function header menus
function hideLogo() {
  document.getElementById('main-logo').classList.add('hide-logo');
  document.getElementById('secondary-logo').classList.remove('hide-logo');
}
// function header menus
function showLogo() {
  document.getElementById('main-logo').classList.remove('hide-logo');
  document.getElementById('secondary-logo').classList.add('hide-logo');
}

function showBtnDownload() {
  document.getElementById('btn-download').classList.remove('scroll-btn')
}
function hideBtnDownload() {
  document.getElementById('btn-download').classList.add('scroll-btn')
}

// window on laad
window.addEventListener('load', function() {
  const bottombar = document.querySelector('.bottom-bar');
  setTimeout(() => {
    bottombar.classList.add('bottom-show')
  }, 2000)
})

function closeBottomBar() {
  const bottombar = document.querySelector('.bottom-bar');
  bottombar.classList.remove('bottom-show')
}

// menu active
const headerMenu = document.querySelectorAll('.header-menus a');
headerMenu.forEach(menu => {
  menu.addEventListener('click', function() {
    headerMenu.forEach(item => {
      item.classList.remove('active');
    });
    menu.classList.add('active');
  })
})

// res clicked
const resMenu = document.querySelectorAll('.res-menu');
resMenu.forEach(res => {
  res.addEventListener('click', function() {
    closeChangeIcon();
    closeDropMenuAnimation()
  })
})