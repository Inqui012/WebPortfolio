$(document).ready(function() {
    $('.mainSlider .slider').bxSlider({
        auto: true,
        autoHover: true,
        speed: 750,
        controls: false,
        mode: 'fade'
    });
    if (window.matchMedia('(min-width: 1280px)').matches){
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
            pager: false,
            prevText: '<span class="material-icons">keyboard_arrow_up</span>',
            nextText: '<span class="material-icons">keyboard_arrow_down</span>'
        });
    }else{
        $('.tabControl .slider').bxSlider({
            minSlides: 4,
            slideMargin: 20,
            moveSlides: 2,
            hideControlOnEnd: true,
            infiniteLoop: false,
            touchEnabled: true,
            controls: false,
            pager: false,
/*             slideWidth: 290 */
        });
    }
})
