$(function () {

    /* aos */
    $(window).load(function () {
        AOS.init({
            duration: 1500
        });
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