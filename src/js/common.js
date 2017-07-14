// BxSlider functionality -------------------------
$(window).on('load', function () {

  var md_sm_screen = window.matchMedia("(max-width: 767px)");

  // BxSlider in "perfect if" section
  perfect_if_slider = $('#perfect_if_bx_slider').bxSlider();
  function perfect_if_bxslider() {
    if (md_sm_screen.matches) {
      perfect_if_slider.reloadSlider();
    } else {
      perfect_if_slider.destroySlider('all');
    }
  }

  perfect_if_bxslider();

  var perfect_if_resizeId;

  $(window).resize(function () {
    clearTimeout(perfect_if_resizeId);
    perfect_if_resizeId = setTimeout(perfect_if_doneResizing, 300);
  });

  function perfect_if_doneResizing() {
    clearTimeout(perfect_if_resizeId);
    perfect_if_bxslider();
  }


  // BxSlider in "is points" section
  $(window).on('load', function () {
    is_points_slider = $('#is_points_bx_slider').bxSlider();
    function is_points_bxslider() {
      if (md_sm_screen.matches) {
        is_points_slider.reloadSlider();
      } else {
        is_points_slider.destroySlider('all');
      }
    }

    is_points_bxslider();

    var is_points_resizeId;

    $(window).resize(function () {
      clearTimeout(is_points_resizeId);
      is_points_resizeId = setTimeout(is_points_doneResizing, 300);
    });

    function is_points_doneResizing() {
      clearTimeout(is_points_resizeId);
      is_points_bxslider();
    }
  });

});
// -------------------------------------------------