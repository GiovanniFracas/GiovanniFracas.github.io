$(() => {
    $('.b1').parent().parent().children(".card-text").hide()
    $('.n1').hide();
    $('.b1').hide();
    $('.card').on('mouseenter', function () {
        $(this).children(".card-text").fadeIn()
        console.log($(this).children('.n1').fadeOut());
    })
    $('.card').on('mouseleave', function () {
        setTimeout(() => {
            console.log($(this).children(".card-text").fadeOut());
            console.log($(this).children('.n1').fadeIn());
        }, 1000);

    })

    /*    $('#chisono').show(()=>{
           $('#chisono').addClass('fadein')
       })
    */
    $(window).on("scroll", function () {
        if ($(window).scrollTop() + $(window).height() - 100 >= $("#team").offset().top) {
            $('#team').addClass('fadeinRight')
        }
    })
    $(window).on("scroll", function () {
        if ($(window).scrollTop() + $(window).height() - 100 >= $("#chisono").offset().top) {
            $('#chisono').addClass('fadeinLeft')
        }
    })
   
})