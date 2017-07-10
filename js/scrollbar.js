// JavaScript

  $(document).ready(funktion(e){
      $('.lw_icon').hover(function(e){
        $(this).children('span').stop().animate({left:'0px'},200);
      },function(e) {
        $(this).children('span').stop().animate({left:'-70px'},200);
      });
)};
