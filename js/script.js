$(document).ready(function(){
    $(".gnbBtn").click(function(){
        $(".gnb_hidden").addClass("active")
    })
    $(".gnbBtn_close").click(function(){
        $(".gnb_hidden").removeClass("active")
    })
})