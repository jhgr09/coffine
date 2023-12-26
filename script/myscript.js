$(function(){
    
    //팝업
    $(".pop").slideDown("fast");
    $(".pop_inner").click(function(){
        $(".pop").slideUp();
    })

    // 메뉴 영역
    $(".sub").hide();
    
    $(".gnb").mouseenter(function(){
        $(".sub").stop().slideDown();
        $(".header_b").stop().animate({height:"400px"}, 500);
    })//mouseenter

    $(".gnb").mouseleave(function(){
        $(".sub").stop().slideUp();
        $(".header_b").stop().animate({height:"103px"}, 500);
    })//mouseleave

    $(".move").slick({

        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        arrows:true
        
    })


})