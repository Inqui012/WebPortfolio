/* 예제 1. 자신의 이름을 한글자씩 나누어 변수에 담은 후, 다시 하나의 변수에 담아 출력*/
function EX1()
{
    var a = "정", b = "은", c = "아";
    var name = a + b + c
    console.log(name);
}

/* 예제 2. 다음 숫자가 출력되도록 연산자 이용. */
function NumberOperator1()
{
    var number = 10;
    alert(number++);
    alert(++number);
    alert(number--);
    alert(--number);
}