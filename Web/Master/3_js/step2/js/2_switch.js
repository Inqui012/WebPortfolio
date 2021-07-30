/* 
    ? switch
    switch는 딱딱 떨어지는 값의 조건을 비교할 때 사용한다.
    ( > , < , >= , <= , != 와 같은 연산자를 사용 안했을 경우에만)
*/

function lotto(){
    var numbValue = window.prompt("입력하실 번호는?");

    switch(numbValue){
        case "1":
            alert("1등");
            break;
        case "2" :
            alert("2등");
            break;
        case "3" :
            alert("3등");
            break;
        default:
            alert("낙첨되었습니다.")
            break;
    }
}


// todo.1 숫자판변
function switchGrammar(){
    var input = prompt('숫자를 입력하라');

    switch(input % 2){
        case 0:
            alert('짝수입니다.');
            break;
        case 1:
            alert('홀수입니다.')
            break;
        default:
            alert('숫자가 아닙니다');
            break;
    }
}

// todo.2 로그인
function userInfoCheck(){
    var userID = window.prompt('사용자 아이디');
    var userPW = window.prompt('사용자 비밀번호'); 

    switch(userID){
        case "id":
            switch(userPW){
                case "pw":
                    alert('승인');
                    break;
                default:
                    alert('입력정보가 틀렸습니다')
                    break;
            }
            break;
        default:
            alert('입력정보가 틀렸습니다')
            break;
    }
}

// todo.3 switch 문을 이용한 계산기
// ? 첫번째 숫자와 연산자 와 두번째 숫자를 입력받아 계산해주는 계산기
function calculator(){
    var firstNumb = window.prompt('첫번째 숫자를 입력하세요');
    var operator = window.prompt('사칙연산 연산자중 하나를 입력하세요.(+,-,*,/)');
    var lastNumb = window.prompt('두번째 숫자를 입력하세요');
}