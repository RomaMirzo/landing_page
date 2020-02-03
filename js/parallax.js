$(window).scroll(function () {

    let scrollTop = $(this).scrollTop();

    $(".section-header-wrapper").css({
        "transform" : "translate(0%, " + scrollTop / 6 + "%)"
    });
});