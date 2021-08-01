$(document).ready(function(){
    var $hoverBar = $('#hoverBar');

    $('nav a').hover(function(){
       $hoverBar.css({
           width: $(this).width(),
           left: $(this).position().left + parseInt($(this).css('padding-left'))
       }) 
    });
});