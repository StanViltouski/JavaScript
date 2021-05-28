function checkInput() {

    var responce = grecaptcha.getResponse();

    if($('#checkbox-1').is(':checked') && $('#checkbox-2').is(':checked') && responce.length) {
        $('.btn-submit').attr('disabled', false);

    } else { $('.btn-submit').attr('disabled', true); }
}

$("#checkbox-1, #checkbox-2").on('change', checkInput);