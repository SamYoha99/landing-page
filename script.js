

$(document).ready(function(){
    //navigation bar toggle
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(400);
    });

    //navbar bg change on scroll
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos >= 100){
            $('navbar').addClass('cng-navbar');
        }else{
            $('navbar').removeClass('cng-navbar')
        }
    })
    
    //team carousel
    $('.team .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    });

    //faq accordination
    $('.faq-head').each(function(){
        $(this).click(function(){
            $(this).next().toggleClass('show-faq-content');
            let icon = $(this).children('span').children("i").
            attr('class');

            if(icon == "fas fa-plus"){
                $(this).children('span').html('<i classs = "fas fa-plus"></i>');
            }
        });
    });
});