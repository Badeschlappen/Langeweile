// JavaScript Document

$(document).ready(function(e) {

	$(window).scroll(function(e) {

		var document_height = $(document).height();
		var scroll_position = $(window).scrollTop();

		var scroll_action = ((scroll_position)/(document_height-$(window).height()))*100;

		if(scroll_position > 850) {

			$('#lw_gesamt_scrollbar').stop().animate({top: '65px'},300);

		};

		if(scroll_position < 850) {

			$('#lw_gesamt_scrollbar').stop().animate({top: '0px'},300);

		};

		$('#lw_active_scrollbar').stop().animate({width: scroll_action + '%'},200);

	});
  $('.lw_icon').hover(function(e){
        $(this).children('span').stop().animate({right:'0px'},200);
      },function(e) {
        $(this).children('span').stop().animate({right:'-70px'},200);
      });
});
