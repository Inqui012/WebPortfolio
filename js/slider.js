$(document).ready(function() {
    $('.mainSlider .slider').bxSlider({
        auto: true,
        autoHover: true,
        speed: 750,
        controls: false,
        mode: 'fade'
    });
    $('.jobIntro.cra .slider').bxSlider({
        mode: 'vertical',
        maxSlides: 4,
        minSlides: 4,
        moveSlides: 2,
        hideControlOnEnd: true,
        infiniteLoop: false,
        touchEnabled: false,
        controls: true,
        nextSelector: '.sliderNext',
        prevSelector: '.sliderPrev',
    });
})
