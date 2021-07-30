/* 
    *. 형변환
        JS - "10" + "10" = 1010 등의 문제를 해결하기 위함
        1. 암시적 형변환
            JS 엔진이 자동으로 변환
            *. 숫자형 + 문자형 = 문자형
            *. 불린형 + 숫자형 = 숫자형
            *. 문자형 + 불린형 = 문자형
        2. 명시적 형변환
            개발자가 직접 지정하여 변환
            *. Number(변수이름) = 변수안의 값을 숫자로 변환함 (정수, 실수 둘다 가능) 변수 안에 숫자와 문자가 섞여있을경우에는 작동하지 않음. 해당경우에는 아래 정수, 실수 변수를 사용.
            *. String(변수이름) = 변수안의 값을 문자로 변환함
            *. 변수이름.toString(); = 변수를 문자로 변환함
                위 두 string 함수는 하는일이 좀 다름.
                스트링은 읽어지는 숫자 그대로를 문자로
                투 스트링은 괄호안에 매개변수를 줘서 변환할 숫자의 기본 진수를 지정해줄 수 있음.
                ex > 0xf00 (16진수) 일 경우 string 함수를 쓰면 먼저 pc가 자동으로 이걸 2진수로 읽고, 이 2진수 값을 문자로 변환해서 보여줌.
                    반면 .tostring 의 경우 그냥 하면 위와 같지만 괄호안에 매개변수 16 (16진수니까) 를 넣어주면 읽어들인 2진수 숫자를 16진수로 바꾼 후 문자열로 변환.
            *. 변수이름.toFixed(); = 매개변수로 지정된 자릿수까지만 나오도록 소수점을 반올림 해서 표시함. 그냥 넣었을때는 소수점 버리고 정수만 나옴. 반올림이니 5 미만의 숫자는 버리고 5이상일경우 앞자리를 올리고 버리고 표시.
            *. parseInt(변수이름); = 문자열을 정수로 변환 (소수점 버림)
            *. parseFloat(변수이름); = 문자열을 실수로 변환 (소수점 유지)
*/

/* 예제 1. 자신의 나이를 입력받고 20을 더한 값 */
function AgePlus()
{
    var age = window.prompt('나이 입력 : ');
    console.log(Number(age)+20);
}

/* 예제 2. 강제 숫자 > 문자형 변환 */
function ForcedString()
{
    var a = '30', result = 1 + a + 10;
    console.log(result);
}

/* 3. 강제 불링 > 숫자형 변환 */
function ForcedNumber()
{
    var result = 2 + true;
    console.log(result);
}

/* 4. 강제 불린 > 문자형 변환 */
function ForcedString()
{
    var a = "2" + true;
    console.log(a);
}

/* 5. 숫자형 > 문자형 변환  */
function StringNumb()
{
    var test = 15;
    console.log(typeof(String(test)));
}
function StrinbtoNumver()
{
    var test = 15;
    var result = test.toString();
    console.log(typeof(result));
}
function StringtoFiced()
{
    var test = 3.1234567890;
    var result = test.toFixed(2);
    console.log(result);
    console.log(typeof(result));
}

/* 6. 문자형 > 숫자형 변환 */
function IntTest()
{
    var test = "100.4", INTresult = parseInt(test), Floatresult = parseFloat(test);
    console.log(INTresult);
    console.log(Floatresult);
}
function NumbString()
{
    var test = 300.5555555, result = Number(test);
    console.log(result);
}

/* 예제 1. 암시적 형변환 */
function Todo1()
{
    var test = 100;
    var result = test + "입니다";
    console.log(typeof(result) + " = " + result)
}

/* 예제 2. 스트링함수 이용 */
function Todo2()
{
    var test = 100;
    var result = String(test);
    console.log(typeof(result) + " = " + result)
}

/* 예제 3. toString 함수 사용 */
function Todo3()
{
    var test = 100;
    var result = test.toString;
    console.log(typeof(result) + " = " + result)
}

/* 예제 4. 문자형을 숫자형으로 변환하여 연산가능하게 */
function Todo4()
{
    var test = "100.50";
    var result = parseFloat(test) + 150 + parseInt("20");
    console.log("result = " + typeof(result) + result)
}

/* 예제 5. 넘버함수 사용 */
function Todo5()
{
    var test = "100.50";
    var result = Number(test) + 150 + Number("20");
    console.log("result = " + typeof(result) + result)
}