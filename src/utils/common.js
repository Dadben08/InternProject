export const sliderSettings = {
    slidesPerView: 1, // Number of slides visible by default
    spaceBetween: 50, // Space (in pixels) between slides
    breakpoints: {
      400: {
        slidesPerView: 1, // Single slide for small screens
      },
      600: {
        slidesPerView: 2, // Two slides for medium screens
      },
      750: {
        slidesPerView: 3, // Three slides for tablets and desktops
      },
      1100: {
        slidesPerView: 4, // Four slides for large screens
      },
    },
    loop: true, // Enables infinite looping
    navigation: true, // Enables navigation arrows
    pagination: {
      clickable: true, // Makes the pagination dots clickable
    },
    autoplay: {
      delay: 3000, // Automatically slides every 3 seconds
      disableOnInteraction: false, // Keeps autoplay running after interaction
    },
  };
  