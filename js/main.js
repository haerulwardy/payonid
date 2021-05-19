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
      720: {
        slidesPerView: 1,
        spaceBetweenSlides: 30
      },
      540: {
        slidesPerView: 1,
        spaceBetweenSlides: 30
      }
    }
  });
// Now you can use all slider methods like
swiper.slideNext();