$(document).ready(function () {

//    TOOLTIPS
  $('#favorites-button').tooltip({
    toggle: "tooltip",
    placement: "bottom",
    title: "Wish List",
    trigger: "hover",
  });

  $('#cart-button').tooltip({
    toggle: "tooltip",
    placement: "bottom",
    title: "Cart",
    trigger: "hover",
  });
  // LOGIN PASSWORD SHOW/HIDE
  $(".toggle-password").hover(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });



});