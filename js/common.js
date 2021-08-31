$(document).ready(function() {
    var urlAry = new Array();
    for (var i = 0; i < $(".tabContent li").length; i++){
        urlAry[i] = $(".tabContent li:eq(" + i + ") iframe").attr("src");
    };
    var videoUrl = $(".popup div iframe").attr("src");
    if($(".tabControl ul li").length < 5){
        $(".tabControl span").addClass("hide");
    };
    $(".tabControl ul li").click(function (e) {
        e.preventDefault();
        $(".tabControl ul li").removeClass("active");
        $(this).addClass("active");                
        $(".tabContent li").removeClass("active");
        $(".tabContent li").eq($(this).index()).addClass("active");
        $(".tabContent li iframe").attr("src","");
        $(".tabContent li").eq($(this).index()).children("iframe").attr("src",urlAry[$(this).index()]);
    });
    $(".trailerVideo img").click(function(){
        $(".popup").css("visibility","visible");
        $(".popup div iframe").attr("src",videoUrl);
    });
    $(".popup div span").click(function(){
        $(".popup").css("visibility","hidden");
        $(".popup div iframe").attr("src","");
    });
})