var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});