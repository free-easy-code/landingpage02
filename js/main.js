$(document).ready(function () {

    /*----- Navbar Shrink -----*/
    $(window).on("scroll",function(){
        if($(this).scrollTop() > 70){
            $(".navbar").addClass("navbar-shrink");
            $(".nav-link").addClass("navbar-shrink");
        }
        else{
            $(".navbar").removeClass("navbar-shrink");
            $(".nav-link").removeClass("navbar-shrink");
        }
    });

    $('.group-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })

    /*----- Page Scroll -----*/
    $.scrollIt({
        topOffset: -10
    });

    /*----- Navbar Collapse -----*/
    $(".nav-link").on("click", function(){
        $(".navbar-collapse").collapse("hide");
     });

});