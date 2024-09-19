$(function () {

    /* aos */
    $(window).load(function () {
        AOS.init({
            duration: 1500
        });
    });

    $('#section03 .technologySlideWrap .technologySlideBox').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('#section03 .technologySlideWrap .count').html('<em>' + i + '</em> ' + slick.slideCount);
    });

    /* section03 - slick */
    $('#section03 .technologySlideWrap .technologySlideBox').slick({
        infinite: true,
        variableWidth: true,
        slidesToShow: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1
                }
            },
        ]
    });

    /* section04 - slick */
    $('#section04 .tidingsSlideWrap .slick').slick({
        infinite: true,
        variableWidth: true,
        slidesToShow: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1
                }
            },
        ]
    });


});

$(window).scroll(function(){

    var scrollPosition = $(this).scrollTop() + $(this).height() / 2;

    $('#section05').each(function() {
        var sectionTop = $(this).offset().top;
        var sectionBottom = sectionTop + $(this).outerHeight();

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });

});

