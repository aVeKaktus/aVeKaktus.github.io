// JavaScript dla strony fanowskiej Nicol

document.addEventListener('DOMContentLoaded', function() {
    console.log('Strona załadowana!');

    // Lightbox dla zdjęć w galerii
    const galleryImages = document.querySelectorAll('.gallery-item img');

    if (galleryImages.length > 0) {
        // Tworzymy overlay tylko raz
        const overlay = document.createElement('div');
        overlay.className = 'lightbox-overlay';
        overlay.innerHTML = '<img class="lightbox-image" src="" alt="">';
        document.body.appendChild(overlay);

        const overlayImage = overlay.querySelector('.lightbox-image');

        function openLightbox(src, alt) {
            overlayImage.src = src;
            overlayImage.alt = alt || '';
            overlay.classList.add('visible');
        }

        function closeLightbox() {
            overlay.classList.remove('visible');
        }

        // Kliknięcie w obrazek z galerii otwiera go na pełnym ekranie
        galleryImages.forEach(img => {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', () => {
                openLightbox(img.src, img.alt);
            });
        });

        // Kliknięcie w tło (poza zdjęciem) zamyka podgląd
        overlay.addEventListener('click', (event) => {
            // Jeżeli kliknięto dokładnie w overlay (nie w obrazek), zamknij
            if (event.target === overlay) {
                closeLightbox();
            }
        });

        // ESC też zamyka podgląd
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeLightbox();
            }
        });
    }
});
