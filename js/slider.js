$(document).ready(function() {
    $('.mainSlider .slider').bxSlider({
        auto: true,
        autoHover: true,
        speed: 750,
        controls: false,
        mode: 'fade'
    });
    $('.tabControl .slider').bxSlider({
        mode: 'vertical',
        minSlides: 4,
        slideMargin: 20,
        moveSlides: 2,
        hideControlOnEnd: true,
        infiniteLoop: false,
        touchEnabled: false,
        controls: true,
        nextSelector: '.sliderNext',
        prevSelector: '.sliderPrev',
        pager: false
/*         nextText: 'test',
        prevText: '' */
    });
    // $('.sliderPrev').click(function(){
    //     slider = $('.bxslider').bxSlider();
    //     slider.onSlidePrev();
    //     return false;
    // });
    // $('.sliderNext').click(function(){
    //     slider = $('.bxslider').bxSlider();
    //     slider.goToNextSlide();
    //     return false;
    // });
})
