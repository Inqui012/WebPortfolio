$(document).ready(function(){
    /* 
        $('선택자').click()  선택자 클릭 이벤트

        $('선택자').addClass('클래스명')    
            선택자에게 class('클레스명') 추가

        $('선택자').removeClass('클래스명')     
            선택자에게 class('클래스명') 제거

        $('선택자').hasClass('클래스명')  
            선택자가 class('클래스명') 을 가지고 있으면 true,
            선택자가 class('클래스명') 을 가지고 있지 않으면 false


        $('선택자').toggleClass('클래스명')
            선택자가 class('클래스명') 을 가지고 있으면 class('클래스명') 제거,
            선택자가 class('클래스명') 을 가지고 있지 않으면 class('클래스명') 추가

        $('선택자').eq('순서')
            선택자가 여러개 라면 해당 인덱스('숫자') 번째 선택자를 선택

        preventDefault() - 기본이벤트제거
            기본값 방지
        stopPropagation() - 이벤트전달제거
        전파 중지
    */

    // $('ul li').eq(2).css('color','white');

    // ul li  -> 3개 
    $('body > ul li').click(function(){    // 클릭
        // if($('ul li').hasClass('active')){
        //     // if문의 조건이 true(클래스를 가지고 있다) 여기..
        //     $('ul li').removeClass('active');
        // }else{
        //     // if문의 조건이 false(클래스를 가지고 있지 않다) 여기..
        //     $('ul li').addClass('active');
        // }
    
        $('body > ul li').removeClass('active');
        $(this).addClass('active');

        $('body > ol li').removeClass('active');
        $('body > ol li').eq($(this).index()).addClass('active');
    });

    $('.menuBtn').click(function(){
        $('.menuBtn').toggleClass('active');
        $('nav').toggleClass('active');
    });

    $('nav').click(function(){
        $('.menuBtn').toggleClass('active');
        $('nav').toggleClass('active');
    })

    $('nav ul').click(function(e){
        e.stopPropagation();
    })

    $('nav ul a').click(function(e){
        e.preventDefault();
    });
});