/*
    ? 형변환
    * JS - "10" + "10" = 1010. 사람 - "10" + "10" = 20. 이러한 문제를 해결하기 위함.
    ! 암시적 형변환 - js 엔진이 자동으로 변환. 명시적 형변환 - 개발자가 직접 지정 변환.

    ? 암시적 형변환 CASE
    * 1. 숫자 형 + 문자 형 = 문자형. case.2
    * 2. 불린 형 + 문자 형 = 문자형. case.3
    * 3. 불린 형 + 숫자 형 = 숫자형. case.4
*/
// *case.1 자신의 나이를 입력받고 20을 더한 값 출력.
// console.log(window);
function agePlus(){
    var age = window.prompt('나이입력.');
    var result = Number(age) + 20;
    // var result = age + 20;
    // or parseInt(age). 실수변환 필요시 Number, 정수변환 필요시 parseInt
    console.log(result);
}
// *case.2 강제 숫자 - 문자형 변환

function forcedString(){
    var a = '30';
    var result = 1 + a + 10;
    console.log(result);
}

// *case.3 강제 불린 - 숫자형 변환

function forcedNumber(){
    var result = 2 + true; // true = 1, false = 0
    console.log(result);
}

// *case.4 강제 불린 - 문자형 변환

function forcedString2(){
    var a = '2' + true;
    console.log(a);
}

// *case.5 test1에 들어있는 숫자를 문자로 형변환.
/*
    ? String
    * String(value); - 문자형으로 변환.
    
    ? .toString()
    * Number.toString(16); - (16진수) 문자형으로 변환.

    ? .toFixed()
    * Number.toFixed(); - (소수점자리수(반올림발생))실수문자형
*/

function stringNumb(){
    var test1 = 15;
    // var result = String(test1); // ? 전역함수 string
    // var result = test1.toString(16);
    var result = test1.toFixed();
    console.log(typeof(result) + '=' + result);
}
function stringtoNumb(){
    var test1 = 15;
    var result = test1.toString();
    //? Number 객체에서 제공하는 toString. 8,16진수 변형기능 제공(ex5-1 ~ 2)
    console.log(typeof(result) + '=' + result);
}

// ?ex background-color Red
function bgColorRed(){
    var bgColor = 0xF00;
    $('body').css({
        "background-color" : "#" + bgColor.toString(16)
    })
    console.log(bgColor.toString(16));
}

// *case.6 test에 들어있는 문자를 숫자로 형변환.
/*
    ? parse
    * 1. parseInt(value); - 정수 형
    * 2. parseFloat(value); - 실수 형
    
    ? Number
    * Number(value); - 정수 형,실수 형
*/

function intTest(){
    var test = '100.4년';
    var result = parseFloat(test);
    console.log(result);
}

function numbString(){
    var test = '300.3';
    var result = parseInt(test) + 10;
    console.log('result =' + result);
}
/*
todo.1 변수 test 에 들어있는 숫자 100을 문자 형으로 변형.
todo.1 result에 대입하라.
*/
