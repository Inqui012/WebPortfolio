/* 
    *. 버블링 = 상속?
*/
$(document).ready(function(){
    $('.inner').mousedown(function(){
        console.log('press holding...');
    })
    $('.inner').mouseup(function(){
        console.log('mouse is up...');
    })
    $('.inner').mouseenter(function(){
        console.log('bubbling?');
    })
});