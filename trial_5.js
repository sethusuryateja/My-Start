$(document).ready(function(){
    $(".button[type=submit]").on("click",function(event){
        event.preventDefault();
        var listIteam = $(".objective").val();
        console.log(listIteam);
        $("ul").append("<li>"+listIteam +"</li>");
        });
    $(document).on("dblclick","li",function(event){
        $(this).toggleClass("strike-off").fadeout("slow");
    })
});