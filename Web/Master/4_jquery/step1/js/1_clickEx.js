$(document).ready(function(){
/* 
        종류
        1. show() 보여주기
        2. hide() 감추기
        3. toggle() show and hide를 번갈아가며 
        4. fadeIn() 문서객체를 점점 선명하게
        5. fadeOut() 문서객체를 점점 흐리게 
        6. fadeToggle() fade를 toggle로

        사용형태
        1. $(selector).method();
        2. $(selector).method(speed);
*/

    $('.list').click(function(){
        // $('.list').removeClass('active');
        $(this).addClass('active').siblings().removeClass('active');

        var value = $(this).attr('data-filter');
        console.log(value);
        if(value == 'All'){
            $('.itemBox').show();    
        }else{
            $('.itemBox').not('.' + value).hide('1000');
            $('.itemBox.' + value).show('1000');
        }
    });
});