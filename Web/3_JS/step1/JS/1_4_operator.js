/* 
    *. 기본사칙 (숫자) 연산자
        + , _ , * , / , %(나머지) , 괄호우선연산, 문자열도 가능
    *. 복합대입 연산자
        += , -= , *= , /= , %= 
    *. 증감 연산자
        ++, -- 1씩 증감한다는 표시
        변수 뒤에오면 변수먼저 읽은다음에 더하는것. 다음번 출력에서 확인할 수 있음.
        변수 앞으로 오면 먼저 더한 다음에 읽게됨. 실행하면 바로 더한 숫자를 확인.
    *. 조건비교 연산자
        == , > , < , <= , >= , !=
    *. 논리 연산자
        ||  or 조건문. 둘중 하나만 참. 합
        &&  and 조건문. 둘 모두 참. 곱
        !   either 조건문. 둘다 거짓. 
    *. 논리부정 연산자
        !(조건문);  조건문이 참이면 false, 거짓이면 true.

    기본적인것들은 C랑 거의 똑같네.
*/

function NumbOp1()
{
    var a = 10;
    var result = a + 20 + 30;
    console.log(result);
}
function NumbOp2()
{
    var a = 50;
    var b = 20;
    var result = a*b/10;
    console.log(result);
}
NumbOp1();
NumbOp2();

/* 
    예제 1. 숫자 5 / 2 나머지 값
    result 에 저장 후 출력
    함수명 NumbOp3
*/

function NumbOp3()
{
    var result = 5%2;
    console.log(result);
}
NumbOp3();

/* 
    예제 2. 문자열 연산
    hi 가 담긴 변수 a, web 이 담긴 변수 b 을 합쳐서 출력
*/

function StringOp1()
{
    var a = "hi", b = "WEB";
    console.log(a + b);
}
StringOp1();

/* 
    예제 3. ul li 구조의 태그를 html 페이지에 삽입 후 출력
    document.body.innerHTML > document 는 HTML 을 의미함.
    document(HTML)의 body 에 innerHTML > HTML 안에 삽입한다는 의미인듯.
    js 안에서 함수를 실행시키면 표시되지 않고 브라우저의 콘솔로 실행해야 실행됨.
    이유는 HTML 에서 JS 를 읽는 단계에선 Body 가 아직 생성되지 않은 상태여서.

    document.write 명령문을 쓰면 에러 없이 잘 실행된다.
*/

function OperatorEX()
{
    var list = "";
    list += '<ul>';
    list += '<li>Hello</li>';
    list += '<li>JS...</li>';
    list += '</ul>';
    
    document.body.innerHTML = list;
}
OperatorEX();
document.addEventListener('DOMContentloaded', function(){OperatorEX();})
/* 이벤트 등록하는 함수. 얘는 Dom 콘텐츠를 먼저 읽은다음에 함수를 실행시키라는 명령인듯? */

/* 예제 4. 복합연산자 사용하기 */

function CompareOperator()
{
    var a = 10;
    a += 20;
    console.log('a = ' + a);
}
CompareOperator();

/* 증감연산자 */

function NumbPlusAfer()
{
    var a = 10;
    alert(a++);
    alert(a++);
    alert(a++);
}

function NumbPlusBefore()
{
    var a = 10;
    alert(++a);
}

/* 예제 5. 조건비교 연산자  a = 10 과 b = 20 비교하기*/

function CompareOperator1()
{
    var a = 10, b = 20;
    var result = a > b;
    /* 
    if(a==b)
    {
        console.log("같다");
    }
    else
    {
        console.log("다르다")
    }
    */ 
    console.log("10 > 20 = " + result);
}
function CompareOperator2()
{
    var a = 10, b = 20;
    var result = a == b;
    console.log("10 = 20 = " + result);
}
function CompareOperator3()
{
    var a = 10, b = 20;
    var result = a != b;
    console.log("10 != 20 = " + result);
}

/* 논리연산자 */

function LogicOperator1()
{
    var a = "여자";
    var b = "웹 퍼블리셔";
    var result = (a=="여자")&&(b=="웹 퍼블리셔");
    console.log(result);
}
function LogicOperator2()
{
    var a = "남자";
    var b = "웹 퍼블리셔";
    var result = (a=="남자")||(b=="웹 퍼블리셔");
    console.log(result);
}

/* 
    예제 6. 결과예측.
    true가 나올것 같으네 false 가 나온다. 둘씩 묶으면 되는데 셋은 안되네
    둘씩 묶어서 판단한다음 true > 10 같은 부등호가 됨. true = 1 이기 떄문에
    1 > 10 이기 떄문에 결과 false 가 된다.
    부등호를 반대로 하면 true 가 나옴.
*/
function CompareOperator4()
{
    console.log(30 > 20 > 10);
}
function CompareOperator4R()
{
    console.log(30 > 20 && 20 > 10);
}