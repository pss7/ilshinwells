$(function () {


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

    /* section03 - slick */
    /*
    $('#section03 .imgSlickWrap .imgSlick').slick({
        infinite: true,
        slidesToShow: 1,
        arrows : false, 
    });
*/

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