$(function(){
    //获取定位元素距离浏览器顶部的距离
    let na=$('.moder').offset().top;
    //滚动条事件
    $(window).scroll(function(){
        //获取滚动条的滑动距离
        let scroH=$(this).scrollTop();
       if(scroH>na){
           $('.moder').css({"position":"fixed","top":0});
       }else if(scroH<na){
        $(".moder").css({"position":"static","top":na});
       }
    })
    $(".g>i").click(function(){
       $('.index').toggle(1000);
    })
})