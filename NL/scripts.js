// JavaScript dla strony fanowskiej Nicol
// Lightbox zdjęć działa w CSS przez :target (#photo1, #photo2, ...)
// Tutaj tylko obsługujemy klawisz ESC, żeby „cofał” z powrotem do galerii.

(function () {
    function handleEscClose(event) {
        event = event || window.event;
        var key = event.key || event.keyCode;

        if (key === 'Escape' || key === 'Esc' || key === 27) {
            // Jeśli aktualny hash to np. #photo1, #photo2, #photo3, #photo4
            if (window.location && window.location.hash && /^#photo\d+$/.test(window.location.hash)) {
                // Nie cofamy całej historii, tylko zmieniamy hash na #gallery
                event.preventDefault();
                window.location.hash = '#gallery';
            }
        }
    }

    if (document.addEventListener) {
        document.addEventListener('keydown', handleEscClose);
    } else if (document.attachEvent) {
        document.attachEvent('onkeydown', handleEscClose);
    }
})();
