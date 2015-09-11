$(document).on("click", "#change-color", function(e){
    $(".wrapper").toggleClass("first");
    $(".wrapper").toggleClass("second");
});

$(document).keydown(function(e){
    if (e.keyCode == 37) {
        $('.slide').prev().ScrollTo({
            duration: 2000,
            easing: 'linear'
        });
    }
    if (e.keyCode == 39) {
        $('.slide').next().ScrollTo({
            duration: 2000,
            easing: 'linear'
        });
    }
});
