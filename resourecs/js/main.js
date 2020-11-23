$(function(){
    //$(".chevron-down").
    $("a[data-toggle=collapse]").click(function(){
        $(this).children('span').toggleClass("fa-chevron-down fa-chevron-up");
    });
})