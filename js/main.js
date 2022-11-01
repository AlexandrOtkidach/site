var header = $(".header");
let scrollTop = $('.scroll-top');
var scrollChange = 1;
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
        header.addClass('scroll');
        scrollTop.addClass('scroll');
    } else {
        header.removeClass("scroll");
        scrollTop.removeClass('scroll');
    }
});

$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
});

function myAnimate (el, animation){
    $(`${el}`).mouseover(function(){
        return $(this).addClass(`${animation}`);
    })
    $(`${el}`).mouseout(function(){
        return $(this).removeClass(`${animation}`);
    });

}
// animate('.btn','animated heartBeat infinite');
myAnimate('.footer-logo','animated shake infinite slow');
myAnimate('.contact-us,.basket','animated pulse infinite');

document.querySelector('.scroll-top').onclick = () => {
    window.scrollTo(pageYOffset, 0);
}

$(document).ready(function() {
    new WOW().init();
});

$('.scroll-top').click()