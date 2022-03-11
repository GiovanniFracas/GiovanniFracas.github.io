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
})