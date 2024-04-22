document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 1024) {
    let swiper = new Swiper(".swiper-container", {
      autoplay: {
        delay: 2000,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      slidesPerView: 4,
      spaceBetween: 0,
    });
  }
});
