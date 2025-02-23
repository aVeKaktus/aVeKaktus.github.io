<script>
// Form submission handling for God's Mushroom subscription
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic form validation
        if (!name || !email || !message) {
            alert('Please fill in all fields to join our mushroom mystery community!');
            return;
        }

        // Here you would typically send subscription inquiry to server
        console.log('Subscription inquiry received:', { name, email, message });
        
        // Reset form after submission
        contactForm.reset();
        alert('Thank you for your interest in God\'s Mushroom Mystery Box! We\'ll send subscription details to your email soon.');
    });
});

// Subscription box animation
const mysteryBoxes = document.querySelectorAll('.product-box');
if (mysteryBoxes) {
    mysteryBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'rotate(5deg) scale(1.05)';
            box.style.transition = 'all 0.3s ease';
        });
        
        box.addEventListener('mouseleave', () => {
            box.style.transform = 'rotate(0) scale(1)';
        });
    });
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu functionality
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
}

// Subscription tier hover effects
document.querySelectorAll('.subscription-tier').forEach(tier => {
    tier.addEventListener('mouseenter', function() {
        this.classList.add('tier-highlight');
    });
    
    tier.addEventListener('mouseleave', function() {
        this.classList.remove('tier-highlight');
    });
});

// Monthly mystery reveal countdown
function updateCountdown() {
    const now = new Date();
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const timeLeft = nextMonth - now;
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    const countdownElement = document.querySelector('.next-box-countdown');
    if (countdownElement) {
        countdownElement.textContent = `Next Mystery Box: ${days} days, ${hours} hours`;
    }
}

// Update countdown every hour
setInterval(updateCountdown, 3600000);
updateCountdown();

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('mushroom-animate');
        }
    });
}, observerOptions);

// Add animation to sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
</script>

