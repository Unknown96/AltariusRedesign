
$(document).ready(function() {
	var pause = 1500
	var height = $('#logo').width();
	var cHeight = height/3

		$('#logo').fadeIn(pause)
		$('#oneteam').delay(pause).animate({
			top: "-=100px",
			opacity: 1
		},pause)
});


$(document).ready(function() {
	
	var height = $('#logo').width();
	var img = $('#oneteam')
		img.css('top', height/3);
		img.css('top', "+=100px")

	var nav = $('nav ul li')
	var height = nav.outerHeight()

		if($( window ).width() > 783) {
			$('nav ul').css('height', height)
		} else {
			$('nav ul').css('height', height*6)
		}

	
	$(window).resize(function() {
		var width = nav.outerWidth()-4
		var height = $('#logo').width();
		var img = $('#oneteam')
		img.css('top', height/3);	

		var height = nav.outerHeight()

		if($( window ).width() > 783) {
			$('nav ul').css('height', height)
		} else {
			$('nav ul').css('height', height*6)
		}

	})

	$('section span').click(function(){
		key = $(this).attr("id");

		if($(this).text() == 'Read more...') {
			$(this).text('Read Less..')
		} else {
			$(this).text('Read more...')
		}


   var welcome = $('#welcome')
   var f = welcome.width() / $('#welcome').parent().width() * 100;    

		if($('section').attr('id') == 'welcome') {
			if(f > '60') {
				welcome.css('width', '60%')
			} else {
				welcome.css('width', '80%')
			}
			$('.frame').slideToggle();
		}

		$('.' + key).slideToggle(400);
	});
});


$(function() {

 	var speed = 1000;
 	var pause = 3000;
 	var count = 1;
 	var size = 8	;
 	var width = 720;

 	var header = $('.frame');
 	var slide = header.find('.slide');

	$('.slider').css('left', -width)

	slider = setInterval(function() {
	slide.animate({'margin-left': '-='+width}, speed, function() {
	 	 	
	count++;

	if(count === size) {
	 	count = 1;
	 	slide.css('margin-left', 0);
	};
	});
	}, pause)

});