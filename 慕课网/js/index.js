$(function(){
    //输入框隐藏
    $('.searcn').click(function(){
        $('.input').toggle(100);
    })
    //收藏提示
    $('.header_favorites').hover(function(){
        $('#new').toggle();
    })
    //侧边点击变色
    $('.direction>ul>li').click(function(){
        let number=$(this).index();
        console.log(number);
        $(this).css("color","blue");
        $(this).siblings().css("color","black");
        $(this).addClass("circle");
        $(this).siblings().removeClass("circle");
        
        $('.content_one').eq(number-1).show();
        $('.content_one').eq(number-1).siblings().hide();
       
    })
    $('.circle').click(function(){
        $('.content_one').show();
    })
    $('.collect').hover(function(){
        $('#neo').toggle();
    })
    $('.collect_one').hover(function(){
        $('.ico').toggle();
    })
    /////////
    $(".g2").mouseover(function(){
        $(".g2 span").show();
        $(".g2 .zjj").hide();
    })
    $(".g2").mouseout(function(){
        $(".g2 span").hide();
        $(".g2 .zjj").show();
    })
    
    
    $(".g33").mouseover(function(){
        $(".g33 span").show();
        $(".g33>.zjj").hide();
    })
    $(".g3").mouseout(function(){
        $(".g33 span").hide();
        $(".g33 .zjj").show();
    })
    
    
    
    $(".g44").mouseover(function(){
        $(".g44 span").show();
         $(".g44 img").show();
        $(".g44>.zjj").hide();
    })
    $(".g44").mouseout(function(){
        $(".g44 span").hide();
        $(".g44 img").hide();
        $(".g44 .zjj").show();
    })
    
    
    
    $(".g55").mouseover(function(){
        $(".g55 span").show();
       $(".g55 img").show();
        $(".g55>.zjj").hide();
    })
    $(".g55").mouseout(function(){
        $(".g55 span").hide();
        $(".g55 img").hide();
        $(".g55 .zjj").show();
    })
    
    
    
    
    $(".g66").mouseover(function(){
        $(".g66 span").show();
        $(".g66>.zjj").hide();
    })
    $(".g66").mouseout(function(){
        $(".g66 span").hide();
        $(".g66 .zjj").show();
    })
    
    
    
    $(document).scrollTop(200);
    let con_top=$("#g").offset().top;
    
    
    $(window).scroll(function(){
        let doc_top=$(document).scrollTop();
        if(con_top<=doc_top){
            $(".g6").show();
        }else{
            $(".g6").hide();
        }
    })
    $(".g66 span").click(function(){
        $("body,html").stop().animate({
            scrollTop:0
        })
    })
    
 
 
 




























})