/* 
    ? while
    while 반복문은 조건이 참일 경우 무한 반복한다.
    (물론 조건이 정해진다면 for문 처럼도 사용 가능하지만,
        용도를 구분지어 사용하는 것이 좋다.)
    정해진 횟수만큼의 반복은 for를 사용하지만, 무한반복처리, 
        파일 읽고쓰기 및 전송(java,php...), DB 데이터 출력하기
*/

// exp.1 while문
function whileContinue(){
    var i = 0;
    while(true){
        console.log(i);
        i++;
        if( i > 10){
            break;
        }
    }
}

// todo.1 구구단 숫자를 입력받아 출력하는 while문
function gugudan(){
    var guguNumb = window.prompt('구구단숫자를 입력(1~9)');
    var i = 1;
    while(i <= 9){
        document.write(guguNumb + ' X ' + i + ' = ' + guguNumb*i + "<br>");
        i++;
    }
}

// todo.2 패스워드 '1234' 가 입력되면 '접속승인' , 아니면 '잘못 입력하였습니다.'
function pwCheck(){
    while(true){
        var value = prompt("패스워드를 입력하세요.");
        if(value == 1234){
            alert("접속승인");
            break;
        }else{
            alert("잘못 입력하였습니다");
        }
    }
    
    console.log('확인');
}


// todo.3 end가 입력될 때 까지 숫자를 계속해서 입력받아 입력값 합을 출력하고,
//          prompt에는 몇 번 수행 했는가에 대한 'x 번째 입력'이 표시되어야함
function sumNumb(){
    var i = 1;
    var result = 0;
    while(true){
        var numb = window.prompt(i + '번째 입력');

        if(numb == "end"){
            alert('입력이 종료되었습니다.');
            break;
        }

        result += parseInt(numb);
        document.write(i + "번째까지의 총합 : " + result + "<br/>");
        i++;
    }
}