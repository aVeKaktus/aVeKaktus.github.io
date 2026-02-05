
        // Set your relationship start date here (YYYY-MM-DD format)
        const startDate = new Date('2025-12-06'); // Change this to your actual start date
        
        function updateCounter() {
            const now = new Date();
            const diff = now - startDate;
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            
            const weeks = Math.floor(days / 7);
            const months = Math.floor(days / 30.44); // Average month length
            const years = Math.floor(days / 365.25); // Account for leap years
            
            document.getElementById('counter').textContent = 
                `${days} days, ${hours} hours`;
            
            document.getElementById('days').textContent = days;
            document.getElementById('weeks').textContent = weeks;
            document.getElementById('months').textContent = months;
            document.getElementById('years').textContent = years;
        }
        
        // Update counter every second
        updateCounter();
        setInterval(updateCounter, 1000);
        
                
        // Add some interactive animations
        document.addEventListener('DOMContentLoaded', function() {
            const factCards = document.querySelectorAll('.fact-card');
            factCards.forEach(card => {
                card.addEventListener('click', function() {
                    this.style.transform = 'scale(1.05)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 200);
                });
            });
        });