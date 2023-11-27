//메인메뉴의 움직이는 바
$('.gnb li a').mouseenter(function () {
    let bar = $(this).position().left;
    //.position():jquery메서드 중 하나로, 요소의 위치정보(top, left)를 반환한다.
    console.log(bar)
    let widnum = $(this).width();
    //$('.bar').animate({실행문},시간)
    $('.bar').animate({
        'left': bar + "px",
        'width': widnum + "px",
        'opacity': 1,
    }, 300)

})

//this=> a태그를 의미(어떤 a인지까지 짚어줌)
/*왜 widnum 적고나서 innerheader .mainmenu .bar에 넓이 40px 없애주지? => 
//JavaScript에서 동적으로 메뉴 아이템의 너비를 가져와서 .bar에 적용하고,
//CSS에서는 불필요한 너비를 없애주어 동적으로 변하는 디자인에 더 적응적으로 대응할 수 있도록 조정해줌*/

//전체 애니메이션
//jQuery Scrolla--Custom settings 부분 긁어오기
$('.animate').scrolla({
    // default
    mobile: false, // 모바일 버전에서(도 돌아가게 할건지) 활성화
    once: false, // 스크롤시 한번만 실행할때는 true
    animateCssVersion: 4 //몇버전인지 (3 or 4)
});