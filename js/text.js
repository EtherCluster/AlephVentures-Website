function openGallery(id) {
    closeAll();
    const gallery = document.getElementById("gallery-" + id);
    const card = document.getElementById("card-" + id);
    gallery.classList.add("Gallery--active");
    card.classList.add("Card--active");
  }
  
  function closeAll() {
    const galleryActv = document.querySelector(".Gallery--active");
    const cardActv = document.querySelector(".Card--active");
    if (galleryActv) {
      galleryActv.classList.remove("Gallery--active");
    }
    if (cardActv) {
      cardActv.classList.remove("Card--active");
    }
  }


  $(window).load(function(){
    $('#exampleModal').modal('show');
});

(function ($) {
  "use strict";

  // COLOR MODE
  $(".color-mode").click(function () {
    toggleLightAndDarkMode();
  });

  function toggleLightAndDarkMode() {
    console.log(" CLICKED!!!");
    $(".color-mode-icon").toggleClass("active");
    $(".color-mode-text").toggleClass("active");
    $("body").toggleClass("dark-mode");

    const isDarkMode = $(".color-mode-icon").hasClass("active");
    if (isDarkMode) {
      console.log(" IS DARK");
      localStorage.setItem("darkMode", 1);
    } else {
      console.log(" IS LIGHT");
      localStorage.setItem("darkMode", 0);
    }
  }

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
  });

  // SMOOTHSCROLL
  $(function () {
    $(".nav-link, .custom-btn-link").on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  // TOOLTIP
  $(".social-links a").tooltip();

  console.log(" CUSTOM JS LOADED");

  const selectedMode = localStorage.getItem("darkMode");
  if (selectedMode == 1) {
    console.log(" IS DARK");
    $(".color-mode-icon").addClass("active");
    $(".color-mode-text").addClass("active");
    $("body").addClass("dark-mode");
  } else {
    console.log(" IS LIGHT");
    $(".color-mode-icon").removeClass("active");
    $(".color-mode-text").removeClass("active");
    $("body").removeClass("dark-mode");
  }
})(jQuery);



$(window).load(function(){
  $('#exampleModal').modal('show');
});