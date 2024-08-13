// $(function(){
//     $('stopBtn').on('click', function(){
//         $('.any-02').css('background-color','#fff')
//     });
//     $('#startBtn').on('click', function(){
//         $('.any-02').css({'backgroundColor' : '#333', 'border-radius' : '40px'});
//     });
// });
// 복수로 들어갈 때는 제이슨 형태로 들어간다.
// 제이슨 형태 = 하이픈 빠지고 카멜케이스
// 제이슨 형태는 무조건 {}중괄호 안에 들어감
// css 변경이 자유로움
// 돌다가 스탑 누르면 안이 하얀색이 되고 멈추고
// 스타트 누르면 333되고 다시 돌아야함


// 스탑하면 공 색 빠지고 멈춤, 스타트하면 공 색 다시 채우고 움직임
// $(function(){
//     $('.stopBtn').on('click', function(){
//         $('.ball').css({'backgroundColor' : '#fff', 'animationPlayState' : 'paused'});
//     });
//     $('.startBtn').on('click', function(){
//         $('.ball').css({'backgroundColor' : '#333', 'animationPlayState' : 'running'});
//     });
// });


$(function(){
    $('.stopBtn').on('click', function(){
        $('.ball').css({'backgroundImage' : 'url("../img/huski-01.jpg")', 'borderRadius' : '20%'})
    })
    $('.startBtn').on('click', function(){
        $('.ball').css({'backgroundImage' : 'url("../img/golden-01.jpg")', 'borderRadius' : '50%'})
    })
})
// url 사용시 주소는 "" 안에 써야함