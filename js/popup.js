
// 0.5초 간격으로 왼쪽상단 기준으로 커지면서 나타나고 작아지며 사라짐 //
// $(function(){
//     $('#open-btn').on('click', function(){
//         $('#popup-box').show();
//     });
//     $('#popup-box > span').on('click', function(){
//         $('#popup-box').hide(500);
//     });
// });


// 1초 간격으로 나타나고 사라짐 //
// $(function(){
//     $('#open-btn').on('click', function(){
//         $('#popup-box').fadeIn(1000);
//     });
//     $('#popup-box > span').on('click', function(){
//         $('#popup-box').fadeOut(1000);
//     });
// });


// 1초 간격으로 아래로 슬라이드 내려오고 올라감 //
// $(function(){
//     $('#open-btn').on('click', function(){
//         $('#popup-box').slideDown(1000);
//     });
//     $('#popup-box > span').on('click', function(){
//         $('#popup-box').slideUp(1000);
//     });
// });

// 제이쿼리는 무겁기 때문에 할 수 있으면 css로 처리할 것
// height 값, transition으로 처리 가능


// ===================================================================================


// addClass/removeClass 로 처리-css에 클래스 추가하여 작업 //
$(function(){
    $('#open-btn').on('click', function(){
        $('#popup-box').addClass('show');
    });
    $('#popup-box > span').on('click', function(){
        $('#popup-box').removeClass('show')
    });
});

// 메서드에서 이미 클래스를 추가하겠다고 말했기 때문에 뒤에 Class가 붙은 메서드는 () 안에서 class부를 때 .을 안씀