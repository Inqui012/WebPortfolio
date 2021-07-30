var i = "전역변수"
/* var 변수지정선언 i 변수이름 = "" 변수에 들어가는 테이터 */

window.onload = function()
{
    var j = "지역변수";
    // alert(i);
}

/* 함수 안에서 지정된 변수는 동일 함수 내에서만 사용가능하다. 이를 지역변수라고 한다. 
    전역변수는 js 내에서 어디서든 사용할 수 있다.*/

/* 1. 세미콜론으로 구분 */
var name = "Euna";
var age = "27";
/* 변수지정의 var 은 이제 전세대인듯. 현재는 데이터를 바꿀 수 있는 변수인 let 과 바꿀 수 없는 값인 const 로 구분한다. */

/* 2. 콤마로 구분 */
var name = "Euna", age = "27";

/* 3. 동시선언 */
var radius, pi;
radius = 10, pi = 3.14;

/* 4. 특성 */
var cup = "Coffe";
cup = "water";
cup = "Green tea";

/* 5. 연산자 사용가능 */
var value = 10;
value = value + 50;

var mug ="Chocolate";
mug = mug + " Milk";
mug += " Latte"

alert(value);
alert(mug);
