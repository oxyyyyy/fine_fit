var md_sm_screen = window.matchMedia("(max-width: 767px)");




$(window).resize(function () {
  if (md_sm_screen.matches) {
    $(document).ready(function () {
      $('.bxslider').bxSlider();
    });
  }
});