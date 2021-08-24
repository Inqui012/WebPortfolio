## global
- 마진패딩을 리셋Css 에 들어감. body 직접 수정은 추천하지 않음. height 사용 지양할것.  
- 컨텐츠 크기는 다양할수도 있으니까 크기에 맞는 클래스를 만들어서 지정해주는게 편할 것 같아
- 내가 속성을 줬는데 적용이 안된다 > display 의심해보기
- header div nav > ul > li > a
    ul li 안에 ul li 일때 상위 li만 선택할때. nav 직속 ul을 선택하고 거기서 직속 li 를 선택 
- line-height 는 font-size 의 배수개념. size 20px 의 line-height 1 은 20px, 2 는 40px  
- 드롭다운 한꺼번에 나오게 하는건 클래스를 토글로 넣어주는 기능인것 같은데 배경색을 맞추는게 어렵다

## Main page

- 슬라이더 프로그레스바를 정밀하게 하려면 JS가 많이 들어가기도 하니까 나중에
- bx슬라이더는 공간 height를 지정해줘야 이미지가 보이네?
- 로고를 background 로 넣는건 접근성 회피용? 여기는 이미지태그
- 클릭하면 다른 페이지로 넘어가는 경우 A태그가 맞다
- 슬라이더는 Js로 루프 만들면 실시간으로 코드가 바뀌니까 이미지는 백그라운드. div 클래스로 조정하기
- 내용을 꾸미는 이미지일경우는 background로
- section 하고 h 는 보통 같이쓴다. 내용이 별거 없다면 섹션말고 div 써도 무방
- p 태그는 문단이라서 안에 다른 태그를 넣을 수 없음. 

## Trailer Page
        <div>
            <div class="flexBox01">
                <div class="flexInnerBox">
                    <img src="images/inGameSC01_01.png" alt="인게임스크린샷 림사로민사광장">
                    <img src="images/inGameSC01_02.png" alt="인게임스크린샷 어부">
                </div>
                <img src="images/inGameSC01_03.png" alt="인게임스크린샷 크리스탈타워">
            </div>
            <div><img src="images/inGameSC01_04.png" alt="인게임스크린샷 타이탄"></div>
            <div class="flexBox02">
                <img src="images/inGameSC01_05.png" alt="인게임스크린샷 힐디브랜드">
                <img src="images/inGameSC01_06.png" alt="인게임스크린샷 하우징">
            </div>
        </div> 

.ingamePhoto div {display: flex; flex-wrap: wrap; width: 100%; justify-content: space-between; overflow: hidden;}  
.ingamePhoto div div div.flexInnerBox {width: 60.75%; flex-direction: column;}  
.ingamePhoto div div div.flexInnerBox img:first-of-type {height: 455px;}  
.ingamePhoto div div div.flexInnerBox img:last-of-type {height: 280px;}  
.ingamePhoto div div.flexBox01 {margin-bottom: 20px;}  
.ingamePhoto div div.flexBox01 > img {width: 38%; height: 755px;}  
.ingamePhoto div div:nth-child(2) {width: 100%; height: 355px; margin-bottom: 20px;}  
.ingamePhoto div div.flexBox02 img {width: calc(98.75% / 2); height: 370px;}  

이미지 갤러리 이렇게해서 플렉스 썼었는데 이건 ul li에 플루트로 해결함.

## html
- 메뉴의 언더바 나오는것 같은 공통 기능들은 클래스로 잡아주는게 편하다. 다만 메인 메뉴에 클래스 다 주면 html 정신없어서 거기만 선택자로 잡음.

## Jqaury
            var urlAry = new Array();
            for (var i = 0; i < $(".tabContent li").length; i++){
                urlAry[i] = $(".tabContent li:eq(" + i + ") iframe").attr("src");
            };
            var videoUrl = $(".popup div iframe").attr("src");
            // li 안에 있는 동영상들의 주소를 순서대로 배열로 저장하고 팝업 공간의 주소도 저장
            $(".tabControl li").click(function (e) {
                e.preventDefault();
                // a 태그 리로드 막아주는 기능
                $(".tabControl li").not(':eq($(this).index())').removeClass("active");
                $(".tabControl li").eq($(this).index()).addClass("active");
                // 내가 누른 장소에 클래스 추가 + 누르지 않은 다른 항목들에서 클래스 빼기             
                $(".tabContent li").not(':eq($(this).index())').removeClass("active");
                $(".tabContent li").eq($(this).index()).addClass("active");
                var index = $(this).index();
                $(".tabContent li iframe").attr("src","");
                $(".tabContent li").eq($(this).index()).children("iframe").attr("src",urlAry[index]);
                // 이용자가 누른 메뉴버튼의 인덱스 번호를 불러오고 그 번호에 맞는 영상태그에 인덱스 번호에 맞는 영상주소 불러와서 넣어줌
            });
            $(".trailerVideo img").click(function(){
                $(".popup").css("visibility","visible");
                $(".popup div iframe").attr("src",videoUrl);
                // 로고 클릭했을때 팝엉 형태로 동영상 나오게 하고 지웠던 영상주소 불러와서 넣어주는 기능
            });
            $(".popup div span").click(function(){
                $(".popup").css("visibility","hidden");
                $(".popup div iframe").attr("src","");
                // 닫기 버튼 눌렀을때 팝업 없애면서 동영상 주소 지움

