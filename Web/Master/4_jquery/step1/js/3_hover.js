$(document).ready(function(){
    /* 
    mouse event list
            click - 클릭
            dblclick - 더블클릭
            mousedown - 마우스버튼을 누르고있는중
            mouseup - 마우스 버튼을 뗄 때
            mousemove - 마우스커서이동

            mouseenter - 마우스가 영역으로 들어 갈 때
            mouseover - 마우스가 영역으로 들어 갈 때 (버블링 일어남)

            mouseleave - 엔터의 반대 ( 내부에서 외부로 이동)
            mouseout - 마우스 오버의 반대 (버블링 일어남)


            문서객체삽입 메서드  B를 기준으로 A를
            $(A).appendTo(B) - B 뒷부분에 A를 삽입
            $(A).prependTo(B) - B 앞부분에 A를 삽입
            $(A).insertAfter(B) - A를 B의 뒤에 추가
            $(A).insertBefore(B) - A를 B의 앞에 추가

            역순    A를 기준으로 B를
            $(A).append(B) - A 뒷 부분에 B를 삽입
            $(A).prepend(B) - A 앞 부분에 B를 삽입
            $(A).after(B) - B를 A뒤에 추가
            $(A).before(B) - B를 A앞에 추가
    */

    $('.inner').mousedown(function(){
        console.log('누르고 있는 중..');
    })

    $('.inner').mouseup(function(){
        console.log('마우스 버튼을 뗄 때...');
    })

    /* $('.outer').mousemove(function(){
        console.log('마우스 커서 이동중...')
    }); */

    // $('.outer').mouseover(function(){
    //     console.log('마우스가 영역으로 들어 갈 때...');
    // });

    $('.outer').hover(function(){
        $('body').append('<h1>마우스 hover 들어가 때 효과</h1>')
    },function(){
        $('body').append('<h1>마우스 hover 나갈 때 효과</h1>')
    })

});