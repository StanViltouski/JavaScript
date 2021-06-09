
(function(){
    "use strict"

    let btnCallback = $("#logo"),
        btnCallbackPos = parseInt($(btnCallback).css('top')),
        btnCallbackNewPos = 0,
        topValueStatic = window.pageYOffset,
        topValueScroll;


    let calcMove = () => {
        topValueScroll = $(window).scrollTop();
        return btnCallbackNewPos = btnCallbackPos + (topValueStatic - topValueScroll);
    }


    let animateBtn = () => {

        TweenLite.to(btnCallback, 0.5, {
            css : {
                top : btnCallbackNewPos + "px"
            },
            ease : Power1.easeIn,
            onComplete : () => {
                TweenLite.to(btnCallback, 1, {
                    css : { top : btnCallbackPos + "px" },
                });

                topValueStatic = topValueScroll;
            }
        });
    }


    $(window).on('scroll', function() {
        let btnCallbackNewPos = calcMove();
        animateBtn(btnCallbackNewPos);
    });
})();