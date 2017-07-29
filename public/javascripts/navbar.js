$(document).ready(function() {

  var sideslider = $('[data-toggle=collapse-side]');
  var sel = sideslider.attr('data-target');
  var sel2 = sideslider.attr('data-target-2');

  sideslider.click(function(event) {
      $(sel).toggleClass('in');
      $(sel2).toggleClass('out');
  });

  var blastOffset = $("#blast").offsetTop;
  var educationOffset = $("#education").offsetTop;
  var portfolioOffset = $("#portfolio").offsetTop;
  var contactOffset = $("#contact-me").offsetTop;

  var $w = $(window).scroll(function() {

      if(!$('#menu').hasClass('in')) {
        return;
      }

      if($w.scrollTop() < 360) {
        $('.icon-bar').css('background-color', 'white');
      }
      if($w.scrollTop() > blastOffset) {
        $('.icon-bar').css('background-color', 'black');
      }
      if($w.scrollTop() > educationOffset) {
        $('.icon-bar').css('background-color', 'white');
      }
      if($w.scrollTop() > portfolioOffset) {
        $('.icon-bar').css('background-color', 'black');
      }
  });
});
