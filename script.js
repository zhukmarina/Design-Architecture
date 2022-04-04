$(document).ready(function(){
    $("#nav-page").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

(function($) {  
    $(function() {         
      $('#up').click(function() {  
        $('body,html').animate({scrollTop:0},1500);  
        return false;  
      })  
    })  
})(jQuery)  
    
    $(window).scroll(function() {
        if ($(this).scrollTop()>800) {          
          $('#up').fadeIn();
        }    
        else {
          $('#up').fadeOut();
        }
      });

$(document).ready(function(){

    $(".btn-slide").click(function(){
        $(".most-popular-posts").slideToggle("slow");
        $(this).toggleClass("active"); return false;
    });
    
     
});