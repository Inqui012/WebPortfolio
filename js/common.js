var funcPc;
var funcMobile;

$(document).ready(function() {
    // 화면크기와 상관없이 공통으로 들어감
    var videoUrl = $(".popup div iframe").attr("src");
    var urlAry = new Array();
    for (var i = 0; i < $(".tabContent li").length; i++){
        urlAry[i] = $(".tabContent li:eq(" + i + ") iframe").attr("src");
    };
    $(".trailerVideo img").click(function(){
        $(".popup").css("visibility","visible");
        $(".popup div iframe").attr("src",videoUrl);
    });
    $(".popup div span").click(function(){
        $(".popup").css("visibility","hidden");
        $(".popup div iframe").attr("src","");
    });
    
    $(".tabControl ul li").click(function (e) {
        e.preventDefault();
        $(".tabControl ul li").removeClass("active");
        $(this).addClass("active");                
        $(".tabContent li").removeClass("active");
        $(".tabContent li").eq($(this).index()).addClass("active");
        $(".tabContent li iframe").attr("src","");
        $(".tabContent li").eq($(this).index()).children("iframe").attr("src",urlAry[$(this).index()]);
    });


    $(window).resize(function(){
        windowWidth = $(window).width();
        if (windowWidth >= 1280){
            // Pc
            if($(".tabControl ul li").length < 5){
                $(".tabControl span").addClass("hide");
            };
            $(".subMenu.other ul li a").click(function(e){
                var target = $((this).getAttribute("href"));
                e.preventDefault();
                $("html, body").animate({
                    scrollTop: $(target).offset().top - 200
                    }, 750); 
            });
            $(".scrTop").click(function(){
                $("html, body").animate({
                    scrollTop: $("html, body").offset().top
                    }, 500);
            });
        }else if (windowWidth < 1280 && windowWidth > 640){
            // Tablet
        }else{
            // Mobile
            $(".burger").click(function(){
                $(this).toggleClass("on");
                $("header div nav").toggleClass("on");
            });
            $("header div nav > ul > li > a").click(function(e){
                e.preventDefault();
                $("header div nav > ul > li").removeClass("active");
                $(this).parent().addClass("active");
            });
            $(".trailerVideo img").click(function(){
                $(".popup").css("visibility","visible");
                $(".popup div iframe").attr("src",videoUrl);
            });
            $(".popup div span").click(function(){
                $(".popup").css("visibility","hidden");
                $(".popup div iframe").attr("src","");
            });
        };
    });
    
    $(window).scroll(function () {
        var scr = $(document).scrollTop();
        if (scr >= 500){
            $(".material-icons.scrTop").removeClass("hide");
        }else{
            $(".material-icons.scrTop").addClass("hide");
        };   
    });

})