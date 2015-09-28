$(document).on("click", "#change-color", function(e){
    $(".wrapper").toggleClass("first");
    $(".wrapper").toggleClass("second");
});

$(document).keydown(function(e){
    if (e.keyCode >= 37 && e.keyCode <= 40){
        var active = $('.slide.active');
        console.log(active);
        var slides = $(".slide");
        var slide_index = slides.index(active);
        var next_slide;
        if (e.keyCode == 37 || e.keyCode == 38) next_slide = $(slides.get(slide_index - 1));
        if (e.keyCode == 39 || e.keyCode == 40) next_slide = $(slides.get(slide_index + 1));
        console.log(next_slide);
        if (next_slide){
            active.removeClass('active');
            next_slide.addClass('active');
            $("html, body").animate({scrollTop: next_slide.offset().top}, 500);
        }
    }
});
