$(document).ready(function(){
    $('.list').click(function(){
        $('ul li').removeClass('active');
        $(this).addClass('active');
        /* $(this).addClass('active).siblings().removeClass('active');  같은 기능임 */
        
        var value = $(this).attr('data-filter')
        if(value == 'All'){
            $('.itemBox').show('1000');
        }else{
            $('.itemBox').not('.' + value).hide('1000');
            $('.itemBox.' + value).show('1000');
        }

    })
});