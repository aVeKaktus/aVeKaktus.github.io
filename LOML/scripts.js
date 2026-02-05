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

    const startDate = new Date('2025-12-06T17:43:00+01:00'); // Change this to your actual start date (UTC+1)
        
        function updateCounter() {
            const now = new Date();
            const diff = now - startDate;
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            document.getElementById('counter').textContent = 
                `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`; 
        }
        
        // Update counter every second
        updateCounter();
        setInterval(updateCounter, 1000);

})();
