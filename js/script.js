$(document).ready(function(){
    $(".gnbBtn").click(function(){
        $(".gnb_hidden").addClass("active")
    })
    $(".gnbBtn_close").click(function(){
        $(".gnb_hidden").removeClass("active")
    })


    let train = $(".banner_imgList")
    let trainLi = train.children()
    let trainLength = trainLi.length
    
    let des =  $(".banner_desList")
    let desLi = des.children()

    let count = 0


    
    let stopSlide = setInterval(function(){
        count++
        if(count>(trainLength - 1)){count=0}
        trainLi.removeClass("on")
        trainLi.eq(count).addClass("on")

        desLi.removeClass("on")
        desLi.eq(count).addClass("on")
    }, 4200)

    trainLi.click(function(){
        clearInterval(stopSlide)
        let idx = $(this)
        trainLi.removeClass("on")
        trainLi.eq(this).addClass("on")
        desLi.removeClass("on")
        desLi.eq(idx).addClass("on")
        // clearInterval(stopSlide)
    })
    $(".viewstyle>span").click(function(){
        $(".viewstyle>span").removeClass('on')
        $(this).addClass("on")
    })

    $(".category>span").click(function(){
        $(".category>span").removeClass('on')
        $(this).addClass("on")
    })
    
    $(".viewstyle>li").click(function() {
        let etc_li = $(this).index();

        $(".viewstyle>li").removeClass("on");
        $(this).addClass("on");

        $(".v_s_output>li").each(function(i) {
            if (i === etc_li) {
                $(this).addClass("on");
            } else {
                $(this).removeClass("on");
            }
        });
    });
    $(".to_top").click(function(){
        window.scrollTo({
            top:0, 
            left:0,
            behavior:"smooth"
        });
    })

})