// Document ready
var clock;

$(function(){
    $(window).scroll(function (e) {
        $(window).scrollTop() >= 111 ? $('.wrap-header').addClass('fixed') : $('.wrap-header').removeClass('fixed')
    });

    // Timer
    clock = new FlipClock($('.clock'), 200, {
        clockFace: 'Counter',
        autoStart: true
    });
});
// Scrollmenu
$(window).load(function(){
    $('.main_menu a').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 71
                }, 1000);
                return false;
            }
        }
    });
});
