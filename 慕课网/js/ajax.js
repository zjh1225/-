$(function(){
    let obj;
    $.ajax({
        url:"../json/index.json",
        type:"GET",
        async:false,
        dataType:'json',
        success:function(data){
            obj=data;
            let num=0;
        for(let i=0;i<obj.length;i++){   
            num+=1;
        $('.icon').eq(num).css("background-image",`url(${obj[i].src})`);
        $(".font").eq(i).text(obj[i].text);   
        $(".minutia").eq(i).text(obj[i].span);
        $('.num').eq(i).text(obj[i].span_1);
        $('.num_one').eq(i).text(obj[i].span_2);
        $(".text_one").eq(num).text(obj[i].span_3);
    };













        }

    })
   
})