var animateSubmit = {

    _setTimeoutName : '',

    //Add animation class to toggleClass
    _toggleAnimation : function(selector) { $(selector + ':not(.pause)').toggleClass('animation'); },

    _animateBtn : function(selector) {
        setTimeout(this._toggleAnimation.bind(animateSubmit, selector), 2000); // Class disabled after 2 sec
        this._toggleAnimation(selector);                                       // Class enabled
    },

    setInt : function(selector) { this._setTimeoutName = setInterval(this._animateBtn.bind(animateSubmit, selector), 4000); },

    clearInt : function() { clearInterval(this._setTimeoutName); },

    pauseInt : function(selector) { $(selector).addClass('pause'); },           // Class pause from CSS

    resumeInt : function(selector) { $(selector).removeClass('pause'); },
};



/*=== Control animation ===*/


// Start and Stop animation

$('.btn-control.start').on('click', function() { animateSubmit.setInt('.btn-target'); });

$('.btn-control.stop').on('click', function() { animateSubmit.clearInt(); });


// Pause and Resume Animation

$('.btn-target').on({
    'mouseenter' : function(){  animateSubmit.pauseInt(this);  },
    'mouseleave' : function(){  animateSubmit.resumeInt(this);  },
});