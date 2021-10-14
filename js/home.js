$(document).ready(function () {
    //nicescroll
    $("body").niceScroll({
        cursorcolor: "#6c757d",
        cursorwidth: "10px",
        mousescrollstep: "12",
        scrollspeed: "20"
    });

    $(".nicescroll-rails").css("z-index", "2000");

    //change bage color
    $(".custom-color i").click(function () {
        $(".custom-color .color").fadeToggle();
    });

    var colorLi = $(".custom-color .color ul li");
        
    colorLi //set li backgroundColor
        .eq(0).css("backgroundColor", "#4fa666").end()
        .eq(1).css("backgroundColor", "#937cf1").end()
        .eq(2).css("backgroundColor", "#fc6118").end()
        .eq(3).css("backgroundColor", "#ff12e2").end()
        .eq(4).css("backgroundColor", "#3807ff").end()
        .eq(5).css("backgroundColor", "#d70000").end()
        .eq(6).css("backgroundColor", "#d1df00").end()
        .eq(7).css("backgroundColor", "#00e7dc");


    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });

    //scroll to top
    var btn = $(".scroll-top"),
        i = $(".custom-color");//chang color icon

    $(window).scroll(function () {

        $(this).scrollTop() >= 700 ? btn.show() : btn.hide();
        $(this).scrollTop() >= 400 ? i.show() : i.hide();//show chang color icon
    });

    btn.click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });


});

//loding screen

$(window).on('load',function () {
    

    //loding
    $(".loding .spinner").fadeOut(2000, function () {

        $(this).parent().fadeOut(2000, function () {
            $(this).remove();  //remove code from DOM
        });
    });
   
});

