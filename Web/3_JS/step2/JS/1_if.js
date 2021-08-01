/* 
    실무사용 예
    1. 로그인후 아이디와 패스워드를 서버와 비교
    2. 게임의 경우 플레이어의 공격이 상대방을 타격했는지의 여부
    3. 경품추첨시 유저의 번호과 당첨 번호를 비교
    4. 삭제시 사용자의 의사를 물어 yes, no 의 행동
    5. slide 같은 ul component 의 좌, 우 방향으로 이동했는지 판단

    *. 조건비교 연산자
        if (a > b)
        {
            true
        }
        else
        {
            false
        }
    *. 다중조건비교 연산자
        if (a > b)
        {
            a > b true
        }
        else if (c > d)
        {
            a > b false
            c > d true
        }
        else
        {
            a > b false
            c > d flase
        }
*/
function NumJudgement()
{
    var numb = prompt('숫자를 입력하세요');
    console.log(numb);

    if (numb > 0)
    {
        alert('양수입니다');
    }
    else
    {
        alert('음수입니다');
    }
}

/* 예제 1. 홀, 짝 */
function OddorEven()
{
    var numb = prompt('숫자를 입력하세요', '홀 짝을 구분합니다');
    if(numb%2==0)
    {
        alert('짝수입니다');
    }
    else
    {
        alert('홀수입니다');
    }
}

/* 예제 2. 사용자에게 id를 입력받아 맞다면 승인 메시지 */
function UserIdCheck()
{
    var userID = prompt('아이디를 입력하세요');
    var ID = "test";
    if(userID==ID)
    {
        alert('로그인 되었습니다');
    }
    else
    {
        alert('아이디가 일치하지 않습니다');
    }
}

/* 
    예제 3. 세 과목을 점수를 받아 평균을 구한다. 
    수우미양가로 평가. 평균이 100 이상일경우 입력값이 오류.
    100 - 90 수
    90 - 80 우
    80 - 70 미
    70 - 69 양
    60 - 가    
*/
function AvgScore()
{
    var korScore = prompt('국어점수를 입력하세요','');
    var EngScore = prompt('영어점수를 입력하세요','');
    var MathScore = prompt('수학점수를 입력하세요','');
    var Avg = (Number(korScore) + Number(EngScore) + Number(MathScore))/3;
    console.log(Avg);
    if(Avg > 100)
    {
        alert('잘못된 값입니다. 다시 입력해주세요')
    }
    else if (Avg >= 90)
    {
        alert('수');
    }
    else if (Avg >= 80)
    {
        alert('우');
    }
    else if (Avg >= 70)
    {
        alert('미');
    }
    else if (Avg >= 60)
    {
        alert('양');
    }
    else
    {
        alert('가');
    }
}

/* 예제 4. 사용자 ID 와 PW 를 받아 둘 다 맞을 경우에만 승인. ID 와 PW 틀린 메세지는 다르게*/
function Login()
{
    var UserID = prompt('아이디를 입력하세요','아이디');
    var UserPW = prompt('비밀번호를 입력하세요','비밀번호');
    if(UserID == "seidn" && UserPW == "1234")
    {
        alert('로그인 되었습니다');
    }
    else if (UserID == "seidn" && UserPW != "1234")
    {
        alert('비밀번호가 틀렸습니다');
    }
    else if (UserID != "seidn" && UserPW == "1234")
    {
        alert('아이디가 틀렸습니다');
    }
    else
    {
        alert('아이디와 비밀번호 둘 다 틀렸습니다')
    }
}

/* 예제 5. */
function Direction()
{
    var Dir = prompt('왼쪽, 가운데, 오른쪽 중 하나를 입력하세요','');
    if(Dir == "왼쪽" || Dir == "가운데" || Dir == "오른쪽")
    {
        alert(Dir + '!');
    }
    else
    {
        alert('잘못된 입력입니다');
    }
}

