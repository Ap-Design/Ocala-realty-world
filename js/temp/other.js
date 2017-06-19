// Show button "Top" at the scrolling of documents
var $win = $(window), topBox = $('<div id="go-top"></div>').css({
    position  : 'fixed',
    bottom    : '20px',
    right     : '20px',
    'z-index' : '555',
    'cursor'  : 'pointer',
    'display' : 'none'
}).addClass('btn icon icon-arrow-up7 t-hide m-hide');
$('body').append(topBox);
$win.scroll(function(e){
    $win.scrollTop()<=300 ? $('#go-top').hide('slow') : $('#go-top').show('slow');
});
$('#go-top').click(function(e){
    $("html, body").animate({ scrollTop : 0 }, 1000);
});