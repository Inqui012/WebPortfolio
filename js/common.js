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
            // window.addEventListener("load", function(e) {
            // 윈도우에 지정된 이벤트가 발생했을때 기능실행. "load"는 윈도우 로드되면
            //     var container = document.querySelector(".scroll_container");
            // 가로 스크롤 컨테이너 지정. 이거는 $(""); 랑 같은 의미인듯
            //     var middle = container.children[Math.floor((container.children.length - 1) / 2)];
            // 가운데를 구하는것 같은데 (컨데이너 안에있는 내용물 -1) /2 의 소숫점 버림 정수인데... 왜 이걸 이렇게 구하는지를 모르겠네 
            //     container.scrollLeft = middle.offsetLeft +
            // scrollleft는 해당 요소가 기존위치에서 얼만큼 왼쪽으로 스크롤 됬는지 수치값 반환하는 기능.
            // offsetleft는 해당 요소의 왼쪽위 꼭짓점 기준 위치
            //       middle.offsetWidth / 2 - container.offsetWidth / 2;
            // offsetwidth는 해당 요소의 넓이 가져오는 기능
            //   });
            // 이걸로 선택된 요소를 화면 중앙으로 오게할 수 있다는거 같은데 잘 이해를 못하겠다.
            // (컨테이너 넓이 / 2) - (요소넓이 / 2) 만큼 왼쪽으로부터 공간을 가지면 중앙으로 가겠지만...
            // middle 변수는 왜 있는거지?? 뭐 구하는 변수인거지...
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