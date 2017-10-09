$(document).ready(function() {

    var $doc = $('html, body');
            $('.scrollslow').click(function() {
                $doc.animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top - 80
            }, 750);
            return false;
    });

     var topOfWindow2 = $(window).scrollTop();
     if(topOfWindow2>0){
                $('nav.desk').addClass('active');
            }
            else{
                $('nav.desk').removeClass('active');
    }
     $(window).scroll(function(){
             var bottomOfWindow = $(window).scrollTop() + $(window).height();
             var topOfWindow = $(window).scrollTop();
            if(topOfWindow>0){
                $('nav.desk').addClass('active');
            }
            else{
                $('nav.desk').removeClass('active');
            }

        });
});