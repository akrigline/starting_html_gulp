$(document).ready( function() {

  $('[data-svg]').each(function(i, val) {
    var element = $(this);
    $.ajax({
  		url: element.data('svg'),
		  cache: true,
		  async: true,
		  dataType: 'html',
		  success: function(data) {
		    element.replaceWith(data);
		  }
		});
  });
	
});

$(document).ajaxComplete( function(){
  $('body').removeClass('loading');
});



// Functions to make the left/right scrolling nav clickable as well.
$('.scroll-left').click( function() {
	var leftPos = $('.scroll-horiz').scrollLeft();
	$('.scroll-horiz').animate({scrollLeft: leftPos-400}, 600);
});
$('.scroll-right').click( function() {
	var leftPos = $('.scroll-horiz').scrollLeft();
	$('.scroll-horiz').animate({scrollLeft: leftPos+400}, 600);
});
