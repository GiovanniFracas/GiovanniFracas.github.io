$(() => {
    $('.b1').parent().parent().children(".card-text").hide()
    $('.n1').hide();
    $('.b1').hide();
    $('.card').on('mouseenter', function () {
        console.log($(this).children(".card-text").show());
        console.log($(this).children('.n1').hide());
    })
    $('.card').on('mouseleave', function () {
        console.log($(this).children(".card-text").hide());
        console.log($(this).children('.n1').show());

    })
})