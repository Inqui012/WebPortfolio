/* 
    timer function

    ? setInterval() : 
        일정 시간마다 주기적으로 특정 구문을 실행하는 기능
    ? setTimeout() :
        일정 시간이 지난 후 특정 구문을 한번만 실행하는 기능
    ? clearInterval() :

*/



$(document).ready(function(){
    $('button').click(function(){
        alert();
        clearInterval(clearCount);
    })

    timeout3s();


    var $output = $('#output');
    var count = 0;

    var clearCount = setInterval(function(){
        count++; 

        if(count >= 4){
            count = 1;
        }
        $output.text(count);
    }, 1000);
    
    function timeout3s(){
        var $test = $('#test');

        setTimeout(function(){
            $test.text('바보');
        },3000)
    }
});
