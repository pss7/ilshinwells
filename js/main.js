$(function () {

    /* section04 - slick */
    $('#section04 .tidingsSlideWrap .slick').slick({
        infinite: true,
        variableWidth: true,
        slidesToShow: 3,
        arrows : false, 
        responsive: [ 
            {  
                breakpoint: 481, 
                settings: {
                    variableWidth: false,
                    slidesToShow:1
                } 
            },
        ]
    });


    

});