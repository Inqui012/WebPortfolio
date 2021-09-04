$(document).ready(function() {
    var sliderPc;
    var sliderMobile;
    var sliderTab;
    var windowWidth = $(window).width();
    
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
    };
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
    };

    $(".mainSlider .slider").bxSlider({
        auto: true,
        autoHover: true,
        speed: 750,
        controls: false,
        mode: 'fade'
    });

    sliderLoad();
    $(window).resize(function(){
        windowWidth = $(window).width();
        sliderReload();
    });

    function sliderLoad(){
        if (windowWidth >= 1280){
            // Pc
            sliderTab = $(".tabControl .slider").bxSlider(sliderPc);
        }else if (windowWidth < 1280 && windowWidth > 640){
            // Tablet

        }else{
            // Mobile
            sliderTab = $(".tabControl .slider").bxSlider(sliderMobile);
        };
    };
    function sliderReload(){
        if (windowWidth >= 1280){
            // Pc
            sliderTab.reloadSlider(sliderPc);
        }else if (windowWidth < 1280 && windowWidth > 640){
            // Tablet

        }else{
            // Mobile
            sliderTab.reloadSlider(sliderMobile);
        };
    };
})

