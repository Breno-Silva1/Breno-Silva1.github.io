$('.wrapper').removeClass('maxheight');

$('#btn-read-more').click(function() {
  $(this).animate({
    top: '-10px'
  }, 150, 'easeInOutCubic');
  $(this).animate({
    top: '10px'
  }, 150, 'easeInOutCubic', function() {
    $(this).toggleClass('readless');
    $(this).parent().children('.container').children('.wrapper').children('.background').toggle();
    $(this).parent().children('.container').children('.wrapper').toggleClass('maxheight');

    if ($(this).hasClass('readless')) {
      $(this).text("Ver Menos");
    } else {
      $(this).text("Ver Mais");
    };
  });

});
