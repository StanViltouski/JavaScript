(function () {

    const list = document.querySelectorAll('.paragraph'),
        size = 20,
        endCharacter = '...';

    list.forEach(el => {
        let text = el.innerHTML;

        if (el.innerHTML.length > size) {
            text = text.substr(0, size);
            el.innerHTML = text + endCharacter;
        }
    });
}());
