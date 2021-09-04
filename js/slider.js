var sliderMain;
var sliderTabPc;
var sliderTabMobile;
var sliderTab;
var windowWidth = $(window).width();

$(document).ready(function() {
    
    sliderTabPc = {
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
    sliderTabMobile = {
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
        sliderLoad();
    });

    // index.html 에서는 리로드를 해도 해당 슬라이더가 없으니까 에러발생
    // 메인에서는 기능을 실행하지 않게 해야하나?
});

function sliderLoad(){
    if (windowWidth >= 1280){
        // Pc
        sliderTab = $(".tabControl .slider").bxSlider(sliderTabPc);
    }else if (windowWidth < 1280 && windowWidth > 640){
        // Tablet
    }else{
        // Mobile
        sliderTab = $(".tabControl .slider").bxSlider(sliderTabMobile);
    };
};
function sliderReload(){
    if (windowWidth >= 1280){
        // Pc
        sliderTab.reloadSlider(sliderTabPc);
    }else if (windowWidth < 1280 && windowWidth > 640){
        // Tablet
    }else{
        // Mobile
        sliderTab.reloadSlider(sliderTabMobile);
    };
};

