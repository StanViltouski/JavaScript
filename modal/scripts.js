(function(){

    // Modal enabled

    var modalEnabled = function () {
        var modalName = $(this).attr('data-modal');

        $('#' + modalName + ', #overlay').addClass('active');
        $('body, html').addClass('no-scroll');
    }

    // Modal disabled

    var modalDisabled = function() {
        $('.modal, #overlay').removeClass('active');
        $('body, html').removeClass('no-scroll');
    }


    // Actions

    $('.btn-modal').on('click', function () { modalEnabled.call(this); });

    $('.modal .modal-close').on('click', modalDisabled);

    $('.modal').on('click', function(e) {
        e.target === this ? modalDisabled() : false;
    });
})();