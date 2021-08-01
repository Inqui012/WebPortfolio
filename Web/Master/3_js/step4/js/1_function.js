/* 
    ? function (함수)
    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.
*/

function starPrint(test){
    var star ='';
    for(var i = 1; i <= 10;i++){
        for(var j = 0; j < i ;j++){
            star = star + '*';
        }
        star = star + '<br>';
    }
    for(var a = 0; a < test; a++){
        document.write(a + "번째 피라미드 <br/>");
        document.write(star);
    }
}
starPrint(10);

// exp.1 매개변수(Parameter)가 있는 함수 만들기
var num1 = 20;
var num2 = 30;
function sumParam(num1, num2){
    var result = num1 + num2;
    alert("두 수의 합은 = " + result);
}


// todo.1 반쪽 피라미드 a 번 찍기

function starPrint2(numb){
    var star ='';
    for(var a = 0; a < numb; a++){
        for(var i = 1; i <= 10;i++){
            for(var j = 0; j < i ;j++){
                star = star + '*';
            }
            star = star + '<br>';
        }
    }
    document.write(star);
}

// exp.2 매개변수의 자리가 없어도 있는것처럼..
// arguments(가변인자함수 - 배열은 아니지만 배열처럼 사용하면 된다.)
function showInfo(){
    console.log(arguments.length)
}

// todo.1
var test = 0;
function sumAll(){
    var result = 0;
    for(var i = 0; i < arguments.length; i++){
        result = result + arguments[i];
    }
    console.log(result);
    return result;
}

/* 
    ? return (리턴)

    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 할 수 없다.
    * 이때 매개변수를 활용하면 함수 내부로 데이터를 전달 할 수 있는데, 리턴값은 이와 반대 되는 값.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 값이라면, 리턴값은 함수 내부에서 처리한 결과값을
    * 함수 외부로 전달하기 위해 사용 하는 출력값.
 
    function f(x){
        return x * x;
    }
    var test01 = f(3);
    alert(test01);
*/

// exp.3 중첩 함수
function innerFunctinTest(){
    var a = 10;
    var b = 20;
    var c = 30;

    function outerFunc(){
        b = 200;
        c = 300;

        function innerFunc(){
            c = 3000;

            console.log(' 1. = ' + a);
            console.log(' 2. = ' + b);
            console.log(' 3. = ' + c);

        }
        innerFunc()
    }
    outerFunc()
}


// exp.4 콜백 함수

function hi1(){
    console.log('hello.');
}

function hi2(){
    console.log('안녕');
}


function execute(func){
    func();
}

