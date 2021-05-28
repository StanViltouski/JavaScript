(function(){

    var headerHeight = parseInt($('header').css('height'));

    $(window).on('scroll', function() {
        var scrollValue = $(window).scrollTop();

        scrollValue > headerHeight
            ? $('header').addClass('scroll')
            : $('header').removeClass('scroll');
    });
})();