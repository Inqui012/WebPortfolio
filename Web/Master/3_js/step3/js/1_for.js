/* 
    
    ?for
    *특정구문을 정해진 횟수 만큼 반복해야 할 경우 사용하는 반복문.
    실무사용의 예
    1. 게시판의 게시글 목록 불러올 때
    2. 구글 맵, 네이버 맵 등의 정보를 출력 할 때
    3. 메뉴의 항목(관리자제어가능한) 출력 할 때
    4. 갤러리의 이미지 목록을 출력 할 때
    5. os 등의 파일 탐색기의 파일 목록 출력 할 때...

*/

// *exp.1 이름 10번 출력해보자
function namePrint10(){
    var userName = "김성은";
    for(var i = 1; i < 10; i++){
        document.write(i + '.' + userName + '<br/>');
    }
}

// todo.1 이름을 1000번 출력해주세요
function namePrint1000(){
    var userName = "김성은";
    for(var i = 1; i <= 1000; i++){
        document.write(i + '.' + userName + '<br/>');
    }
}

// todo.2 이름을 500번만 찍되 홀수만 나오게 해주세요
function namePrint500(){
    var userName = "김성은";
    for(var i = 1; i <= 1000; i += 2){
        document.write(i + '.' + userName + '<br/>');
    }
}

// todo.3 100 ~ 110까지 출력 해주세요
function answer01(){
    for(var i = 100; i <= 110; i++){
        document.write(i + '<br/>');
    }
}

// todo.4 1 ~ 10까지 출력 해주세요 (조건문 작성)
function answer02(){
    for(var i = 1; i < 10; i += 2){
        document.write(i + '<br/>');
        document.write((i + 1) + '<br/>');
    }
}

// todo.5 10 ~ 1 출력 해주세요
function answer03(){
    for(var i = 10; i>=1;i--){
        document.write(i + '<br/>');
    }
}

// todo.6 구구단 숫자를 입력 받아 출력하는 for문
function gugudan(){
    var guguNumb = prompt('구구단숫자를 입력(1~9)');
    for(var i = 1; i <= 9; i++){
        document.write(guguNumb + "x" + i +" = " + guguNumb*i + "<br/>")
    }
}

// exp.2 지금까지 배웠던 JS를 배열로 배치하고, alert 으로 출력하기
function arrayFor(){
    var data = ["변수","연산자","형변환","조건문 if","조건문 switch", "반복문 for"];
    console.log(data.length);
    console.log(data[0]);
    console.log(data[1]);
    console.log(data[2]);
    console.log(data[3]);
    console.log(data[4]);
    console.log(data[5]);
    for(var i = 0; i < data.length;i++){
        alert(data[i]);
    }
}


// todo.1 과일 4개를 순서대로 출력해주세요
function favorfluit(){
    var array = ['포도','사과','바나나','망고'];
    for(var i = 0; i < array.length; i++){
        document.write((i+1) + '번째 과일 = ' + array[i] + '<br/>');
    }
}

// todo.2 과일 4개를 반대로 출력해주세요
function reverseFavorfluit(){
    var array = ['포도','사과','바나나','망고'];
    for(var i = array.length - 1; i >=0; i--){
        document.write((i+1) + '번째 과일 = ' + array[i] + '<br/>');
    }
}

// todo.3 배열의 총 합을 구해주세요
function arraySum(){
    var data = [10,20,30,40,50];
    var result = 0;

    for(var i = 0; i < data.length; i++){
        console.log(data[i]);
        result = result + data[i];
    }

    document.write('해당 배열의 총합은 = ' + result);
}


// exp.3 continue 문
function test(){
    for(var i = 0; i <= 10; i++){
        continue;
        document.write(i + '<br/>')
    }
    document.write('최종 i = ' + i );
}

// todo.1 continue Ex
function runContinue(){
    var output = 0;
    for(var i = 1; i <= 10; i++){
        if(i % 2 == 1){
            continue;
        }
        output = output + i;
        alert(output);
    }
}

// exp.4 break문 
function forBreak(){
    for(var i = 0; i <= 10; i++){
        break;
        document.write(i + '<br/>')
    }
    document.write('최종 i = ' + i );
}

// todo.1 break Ex
function runBreak(){
    for(var  i = 0; true ; i++){
        alert(i + "번째 반복문");
        if(!confirm('계속 할래?')){
            break;
        }
    }
}


// for ex.1 반쪽 피라미드
function halfPyramid(){
    var star ='';
    for(var i = 1; i <= 10;i++){
        for(var j = 0; j < i ;j++){
            star = star + '*';
        }
        star = star + '<br>';
    }
    document.write(star);
}

// for ex.2 역반쪽 피라미드
function reverseHalfPyramid(){
    var star ='';
    for(var i = 10; i >= 0;i--){
        for(var j = 0; j < i ;j++){
            star = star + '*';
        }
        star = star + '<br>';
    }
    document.write(star);
};

// for ex.3 피라미드 &nbsp;
function pyramid(){
    var star ='';
    for(var i = 10; i >= 0;i--){
        for(var j = 0; j < i ;j++){
            star = star + '&nbsp;';
        }
        for(var z = 20; z > 2*i - 1; z--){
            star = star + '*';
        }
        star = star + '<br>';
    }
    document.write(star);
}
