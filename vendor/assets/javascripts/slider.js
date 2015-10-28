$(document).ready( function() {
    $('#myCarousel').carousel({
      interval:   3000
  });
  var clickEvent = false;
  $('#myCarousel').on('click', '.nav a', function() {
      clickEvent = true;
      $('.nav li').removeClass('active');
      $(this).parent().addClass('active');    
  }).on('slid.bs.carousel', function(e) {
    if(!clickEvent) {
      var count = $('#slider_id').children().length -1;
      var current = $('#slider_id li.active');
      current.removeClass('active').next().addClass('active');
      var id = parseInt(current.data('slide-to'));
      if(count == id) {
        $('#slider_id li').first().addClass('active');  
      }
    }
    clickEvent = false;
  });  
});