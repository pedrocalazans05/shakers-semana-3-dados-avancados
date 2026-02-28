function swiperStart() {
  let container = document.querySelector('.metaobject__swiper--container');

  if (container !== null) {
    
    if (container.swiper !== undefined) {
      container.swiper.destroy();
    }

    const swiperSlider = new Swiper('.metaobject__swiper--container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      
      observer: true,
      observeParents: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', iniciarSwiper);
document.addEventListener('shopify:section:load', iniciarSwiper);