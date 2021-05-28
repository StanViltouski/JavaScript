(function() {

    var timerId = countdown(date,
        function(ts) {
            $('.days').text(ts.days);
            $('.hours').text(ts.hours);
            $('.minutes').text(ts.minutes);
            $('.seconds').text(ts.seconds);
        },

        countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);

    // later on this timer may be stopped

    // window.clearInterval(timerId);
}());