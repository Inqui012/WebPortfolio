$(document).ready(function(){

    /* 
            $(선택자1).parent()               - 선택자의 부모요소

            $(선택자).prev()                   - 선택자의 이전요소
            $(선택자).next()                   - 선택자의 다음요소
            
            $(선택자).children('자식요소')     - 선택자의 자식요소
            $(선택자).find('후손요소')         - 선택자의 후손요소
            
            $(선택자1).not(선택자2)            
            - 선택자1중에서 선택자2가 아닌것
    */
    $(window).scroll(function(e){
    //     if($(window).scrollTop() > $('div').eq(1).offset().top ){
    //         $('div').eq(1).addClass('active');
    //     }else{
    //         $('div').eq(1).removeClass('active');
    //     }


        $('div').each(function(){
            if($(window).scrollTop() > $(this).offset().top - 1 ){
                $(this).addClass('active');
            }else{
                $(this).removeClass('active');
            }
        })
    });


    $('button').click(function(){
        $('html,body').animate({scrollTop: 0},2000);
    });

    // $.each() 메서드
    // $.each(array, function (index, item) {
    // })


    $('.test').each(function(){
        $(this).on('mousewheel DOMMouseScroll',function(e){
            if($('html, body').is(':animated')){
                return;
            }
            if(e.originalEvent.wheelDelta > 0){
                // 마우스 휠을 위로
                if(!($(this).prev().offset() == undefined)){
                    $('html, body').stop().animate({scrollTop: $(this).prev().offset().top},1000);
                }
            }else{
                // 마우스 휠을 아래로
                if(!($(this).next().offset() == undefined)){
                    $('html, body').stop().animate({scrollTop: $(this).next().offset().top},1000);
                }
            }
        })
    })

    // var fullPageElement = [$('.scroll01'),$('.scroll02'),$('.scroll03'),$('.scroll04'),$('.scroll05')];
    // $.each(fullPageElement, function(){
    //     $(this).on('mousewheel DOMMouseScroll',function(e){
    //         if($('html, body').is(':animated')){
    //             return;
    //         }
    //         if(e.originalEvent.wheelDelta > 0){
    //             // 마우스 휠을 위로
    //             if(!($(this).prev().offset() == undefined)){
    //                 $('html, body').stop().animate({scrollTop: $(this).prev().offset().top},1000);
    //             }
    //         }else{
    //             // 마우스 휠을 아래로
    //             if(!($(this).next().offset() == undefined)){
    //                 $('html, body').stop().animate({scrollTop: $(this).next().offset().top},1000);
    //             }
    //         }
    //     })
    // })


});