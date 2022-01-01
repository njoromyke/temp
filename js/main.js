$(document).ready(function () {
  if ($(window).width() < 990) {
    $("#ham").click(function () {
      $(".nav-all").toggle().css("visibility", "visible");
    });
  }
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
        loop: true,
      },
      1000: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
  });
  // All animations will take exactly 500ms
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true,
  });
});
