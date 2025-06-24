$(function(){
    $('#burger').click(function(){
        $('#menu').toggleClass('open');
        $(this).toggleClass('active');
    });
    $('#menu a').click(function(){
        $('#menu').removeClass('open');
        $('#burger').removeClass('active');
    });

    $('.slide').on('inview',function(){
        $(this).addClass('inview');
    });
    $('.review-wrapper').on('inview',function(){
        $(this).addClass('zoomIn');
    });
});
