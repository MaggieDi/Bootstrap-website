$(document).ready(function(){
    $(".img-proposed").mouseenter(function(){
                $(this).toggleClass("img-transform");
            });
            $(".img-proposed").mouseleave(function(){
                $(this).toggleClass("img-transform");
            });
 $('.navbar-toggle').click(function(){
  	$('ul.nav.navbar-nav').toggleClass('responsive');

  });
});