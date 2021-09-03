$(document).ready(function() {
    var sliderMain;
    var sliderPc;
    var sliderMobile;
    
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if (windowWidth >= 1280){
            console.log('px');
/*             reloadSlider(sliderPc); */
        }else if (windowWidth > 640, windowWidth < 1280){
            console.log('tablet');

        }else{
            console.log('mobile');
        }
    });



    sliderMain = {
        auto: true,
        autoHover: true,
        speed: 750,
        controls: false,
        mode: 'fade'
    }
    sliderPc = {
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
    }
    sliderMobile = {
        minSlides: 1,
        slideMargin: 20,
        moveSlides: 1,
        hideControlOnEnd: true,
        infiniteLoop: false,
        touchEnabled: true,
        controls: false,
        pager: false,
        slideWidth: 300
    }
})

