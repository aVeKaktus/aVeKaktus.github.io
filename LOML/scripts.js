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

    const startDate = new Date('2025-12-06T18:43:00'); // Change this to your actual start date (local time)
        
        function updateCounter() {
            const now = new Date();
            const diff = now - startDate;
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            document.getElementById('counter').textContent = 
                `${days} dni, ${hours} godzin, ${minutes} minut, ${seconds} sekund`; 
        }
        
        // Update counter every second
        updateCounter();
        setInterval(updateCounter, 1000);
        
        // Gallery tabs functionality
        function showGalleryTab(tabName, buttonElement) {
            // Prevent flashing by checking if tab is already active
            const selectedTab = document.getElementById(tabName + '-tab');
            if (selectedTab.classList.contains('active')) {
                return;
            }
            
            // Hide all tabs immediately
            const allTabs = document.querySelectorAll('.gallery-tab-content');
            allTabs.forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Remove active class from all buttons
            const allButtons = document.querySelectorAll('.tab-btn');
            allButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button and selected tab
            buttonElement.classList.add('active');
            selectedTab.classList.add('active');
        }
        
        // Make sure event is available globally
        document.addEventListener('DOMContentLoaded', function() {
            const tabButtons = document.querySelectorAll('.tab-btn');
            tabButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const tabName = this.getAttribute('data-tab');
                    showGalleryTab(tabName, this);
                });
            });
        });

        // Fun Facts Timeline animations
        const factItems = document.querySelectorAll('.fact-item');
        
        // Stagger animation for timeline items
        factItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.2}s`;
        });
        
        // Click animation for fact items
        factItems.forEach(item => {
            item.addEventListener('click', function() {
                const content = this.querySelector('.fact-content');
                const icon = this.querySelector('.fact-icon');
                
                // Bounce effect on click
                content.style.transform = 'scale(0.95)';
                icon.style.transform = 'scale(0.9)';
                
                setTimeout(() => {
                    content.style.transform = '';
                    icon.style.transform = '';
                }, 150);
                
                // Reset to hover state after bounce
                setTimeout(() => {
                    content.style.transform = 'scale(1.02)';
                    icon.style.transform = 'scale(1.15) rotate(5deg)';
                }, 300);
            });
        });

})();
