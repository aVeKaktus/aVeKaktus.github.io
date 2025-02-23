<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechVerse - Advanced Technology Solutions</title>
    <style>
        :root {
            --primary-color: #2a3f54;
            --secondary-color: #1abc9c;
            --accent-color: #e74c3c;
            --text-color: #333;
            --light-bg: #f8f9fa;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            overflow-x: hidden;
        }

        /* Header & Navigation */
        .header {
            background: var(--primary-color);
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .nav-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 80px;
        }

        .logo {
            font-size: 24px;
            font-weight: 700;
            color: white;
            text-decoration: none;
            display: flex;
            align-items: center;
        }

        .logo i {
            margin-right: 10px;
            color: var(--secondary-color);
        }

        .nav-menu {
            display: flex;
            gap: 30px;
        }

        .nav-item {
            list-style: none;
        }

        .nav-link {
            color: white;
            text-decoration: none;
            font-weight: 500;
            padding: 8px 15px;
            border-radius: 4px;
            transition: all 0.3s ease;
        }

        .nav-link:hover {
            background: var(--secondary-color);
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            background: linear-gradient(135deg, var(--primary-color) 0%, #1a2634 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 80px;
        }

        .hero-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            text-align: center;
            color: white;
        }

        .hero h1 {
            font-size: 4rem;
            margin-bottom: 20px;
            animation: fadeInUp 1s ease;
        }

        .hero p {
            font-size: 1.2rem;
            margin-bottom: 30px;
            animation: fadeInUp 1s ease 0.2s;
            opacity: 0;
            animation-fill-mode: forwards;
        }

        .cta-button {
            display: inline-block;
            padding: 15px 30px;
            background: var(--secondary-color);
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-weight: 600;
            transition: all 0.3s ease;
            animation: fadeInUp 1s ease 0.4s;
            opacity: 0;
            animation-fill-mode: forwards;
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        /* Features Section */
        .features {
            padding: 100px 0;
            background: var(--light-bg);
        }

        .features-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .feature-card {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            transition: all 0.3s ease;
        }

        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .feature-icon {
            font-size: 2.5rem;
            color: var(--secondary-color);
            margin-bottom: 20px;
        }

        .feature-card h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
        }

        /* Products Section */
        .products {
            padding: 100px 0;
        }

        .products-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .section-header {
            text-align: center;
            margin-bottom: 50px;
        }

        .section-header h2 {
            font-size: 2.5rem;
            color: var(--primary-color);
            margin-bottom: 15px;
        }

        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
        }

        .product-card {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            transition: all 0.3s ease;
        }

        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .product-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .product-info {
            padding: 20px;
        }

        .product-title {
            font-size: 1.2rem;
            margin-bottom: 10px;
        }

        .product-price {
            font-size: 1.5rem;
            color: var(--secondary-color);
            font-weight: 600;
            margin-bottom: 15px;
        }

        .product-button {
            display: block;
            width: 100%;
            padding: 12px;
            background: var(--primary-color);
            color: white;
            text-align: center;
            text-decoration: none;
            border-radius: 5px;
            transition: all 0.3s ease;
        }

        .product-button:hover {
            background: var(--secondary-color);
        }

        /* Testimonials Section */
        .testimonials {
            padding: 100px 0;
            background: var(--light-bg);
        }

        .testimonials-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .testimonial-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .testimonial-card {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .testimonial-text {
            font-style: italic;
            margin-bottom: 20px;
        }

        .testimonial-author {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .author-image {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
        }

        .author-info h4 {
            margin-bottom: 5px;
        }

        .author-info p {
            color: #666;
            font-size: 0.9rem;
        }

        /* Contact Section */
        .contact {
            padding: 100px 0;
        }

        .contact-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .contact-form {
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
        }

        .form-input {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 5px;
            transition: all 0.3s ease;
        }

        .form-input:focus {
            border-color: var(--secondary-color);
            outline: none;
        }

        .submit-button {
            width: 100%;
            padding: 15px;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 5px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .submit-button:hover {
            background: var(--secondary-color);
        }

        /* Footer */
        .footer {
            background: var(--primary-color);
            color: white;
            padding: 60px 0 30px;
        }

        .footer-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
        }

        .footer-section h3 {
            margin-bottom: 20px;
            font-size: 1.2rem;
        }

        .footer-links {
            list-style: none;
        }

        .footer-links li {
            margin-bottom: 10px;
        }

        .footer-links a {
            color: #fff;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .footer-links a:hover {
            color: var(--secondary-color);
        }

        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }

        .social-link {
            width: 40px;
            height: 40px;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }

        .social-link:hover {
            background: var(--secondary-color);
            transform: translateY(-3px);
        }

        .copyright {
            text-align: center;
            padding-top: 30px;
            margin-top: 30px;
            border-top: 1px solid rgba(255,255,255,0.1);
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .nav-menu {
                display: none;
            }

            .hero h1 {
                font-size: 2.5rem;
            }

            .feature-card {
                text-align: center;
            }

            .contact-form {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <nav class="nav-container">
            <a href="#" class="logo">
                <i class="fas fa-microchip"></i>
                TechVerse
            </a>
            <ul class="nav-menu">
                <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="#features" class="nav-link">Features</a></li>
                <li class="nav-item"><a href="#products" class="nav-link">Products</a></li>
                <li class="nav-item"><a href="#testimonials" class="nav-link">Testimonials</a></li>
                <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h1>Welcome to the Future of Technology</h1>
            <p>Discover innovative solutions that transform the way you live and work</p>
            <a href="#contact" class="cta-button">Get Started</a>
        </div>
    </section>

    <section id="features" class="features">
        <div class="features-container">
            <div class="feature-card">
                <i class="fas fa-rocket feature-icon"></i>
                <h3>Lightning Fast</h3>
                <p>Experience unprecedented speed and performance with our cutting-edge technology.</p>
            </div>
            <div class="feature-card">
                <i class="fas fa-shield-alt feature-icon"></i>
                <h3>Secure & Reliable</h3>
                <p>Your data is protected with military-grade encryption and security measures.</p>
            </div>
            <div class="feature-card">
                <i class="fas fa-magic feature-icon"></i>
                <h3>Smart Solutions</h3>
                <p>Intelligent features that adapt to your needs and streamline your workflow.</p>
            </div>
        </div>
    </section>

    <section id="products" class="products">
        <div class="products-container">
            <div class="section-header">
                <h2>Our Products</h2>
                <p>Explore our range of innovative solutions</p>
            </div>
            <div class="product-grid">
                <div class="product-card">
                    <img src="product1.jpg" alt="Product 1" class="product-image">
                    <div class="product-info">
                        <h3 class="product-title">Smart Hub Pro</h3>
                        <p class="product-price">$299.99</p>
                        <a href="#" class="product-button">Learn More</a>
                    </div>
                </div>
                <div class="product-card">
                    <img src="product2.jpg" alt="Product 2" class="product-image">
                    <div class="product-info">
                        <h3 class="product-title">AI Assistant</h3>
                        <p class="product-price">$199.99</p>
                        <a href="#" class="product-button">Learn More</a>
                    </div>
                </div>
                <div class="product-card">
                    <img src="product3.jpg" alt="Product 3" class="product-image">
                    <div class="product-info">
                        <h3 class="product-title">Security Suite</h3>
                        <p class="product-price">$399.99</p>
                        <a href="#" class="product-button">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="testimonials" class="testimonials">
        <div class="testimonials-container">
            <div class="section-header">
                <h2>What Our Clients Say</h2>
                <p>Real feedback from satisfied customers</p>
            </div>
            <div class="testimonial-grid">
                <div class="testimonial-card">
                    <p class="testimonial-text">"TechVerse has revolutionized our business operations. Their solutions are innovative and reliable."</p>
                    <div class="testimonial-author">
                        <img src="author1.jpg" alt="John Doe" class="author-image">
                        <div class="author-info">
                            <h4>John Doe</h4>
                            <p>CEO, Tech Solutions</p>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <p class="testimonial-text">"Outstanding service and cutting-edge technology. Highly recommended!"</p>
                    <div class="testimonial-author">
                        <img src="author2.jpg" alt="Jane Smith" class="author-image">
                        <div class="author-info">
                            <h4>Jane Smith</h4>
                            <p>CTO, Innovation Corp</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="contact-container">
            <div class="section-header">
                <h2>Get in Touch</h2>
                <p>We'd love to hear from you</p>
            </div>
            <form class="contact-form">
                <div class="form-group">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" id="name" class="form-input" required>
                </div>
                <div class="form-group">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" id="email" class="form-input" required>
                </div>
                <div class="form-group">
                    <label for="message" class="form-label">Message</label>
                    <textarea id="message" class="form-input" rows="5" required></textarea>
                </div>
                <button type="submit" class="submit-button">Send Message</button>
            </form>
        </div>
    </section>

    <footer class="footer">
        <div class="footer-container">
            <div class="footer-section">
                <h3>About Us</h3>
                <p>TechVerse is a leading provider of innovative technology solutions, dedicated to transforming businesses through cutting-edge technology.</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul class="footer-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Connect With Us</h3>
                <div class="social-links">
                    <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; 2024 TechVerse. All rights reserved.</p>
        </div>
    </footer>

    <script src="https://kit.fontawesome.com/your-kit-code.js" crossorigin="anonymous"></script>
</body>
</html>




<script>
// Form submission handling
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic form validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Here you would typically send the form data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Reset form after submission
        contactForm.reset();
        alert('Thank you for your message! We will get back to you soon.');
    });
});

// Smooth scrolling for navigation links
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

// Mobile menu toggle (assuming there's a mobile menu)
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
}

// Social media links hover effect
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Add animation to sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
</script>
