var md_sm_screen = window.matchMedia("(max-width: 767px)");





if (md_sm_screen.matches) {
  $(document).ready(function () {
    $('.bxslider').bxSlider();
  });
}

// test