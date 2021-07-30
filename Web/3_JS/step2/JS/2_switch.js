/* 
    스위치 조건문
        if문 같은 부등호 기호 없이 참 거짓만 비교하는 조건문이라고 생각하면 좀 편할듯.
*/

function Lotto()
{
    var NumbValue = window.prompt('입력하실 번호는?');
    switch(NumbValue)
    {
        case "1":
            alert("1등");
            break;
        case "2":
            alert("2등");
            break;
        case "3":
            alert("3등");
            break;
        case "4":
            alert("4등");
            break;
        case "5":
            alert("5등");
            break;
        default :
            alert("낙첨되었습니다");
            break;    
    }
}

/* 예제 1. 짝홀판별. */
function SwitchGrammar()
{
    var input = prompt('입력해주세요');
    switch(Number(input)%2)
    {
        case 0:
            alert('짝수입니다');
            break;
        case 1:
            alert('홀수입니다');
            break;
        default:
            alert('숫자가 아닙니다');
            break;
    }
}

/* 예제 2. 로그인 */
function Login()
{
    var UserID = prompt('아이디를 입력하세요');
    var UserPW = prompt('패스워드를 입력하세요');
    switch(UserID)
    {
        case "seidn":
            switch(UserPW)
            {
                case "1234":
                    alert('로그인 되었습니다');
                    break;
                default:
                    alert('비밀번호가 틀립니다');
                    break;
            }
            break;
        default:
            alert('아이디가 틀립니다');
            break;
    }
}