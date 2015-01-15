$(document).ready(function() {
    
    var slider = $('#content-slider').bxSlider({
            infiniteLoop: false,
            hideControlOnEnd: true
    });

    $('.go-first').click(function(){
            slider.goToSlide(0);
            return false;
    });

    $('.go-second').click(function(){
            slider.goToSlide(1);
            return false;
    });

    $('.go-third').click(function(){
            slider.goToSlide(2);
            return false;
    });

    $('.go-forth').click(function(){
            slider.goToSlide(3);
            return false;
    });

    $('.go-fifth').click(function(){
            slider.goToSlide(4);
            return false;
    });

    $('.go-sixth').click(function(){
            slider.goToSlide(5);
            return false;
    });

    var sliderone = $('#program-slider').bxSlider({
            infiniteLoop: false,
            hideControlOnEnd: true
    });

    $('#go-next').click(function(){
        slider.goToNextSlide();
        return false;
    });

    $('#go-prev').click(function(){
        slider.goToPreviousSlide();
        return false;
    });
});
  