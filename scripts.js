<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>God's Mushroom - Divine Fungal Mystery Box</title>
    <style>
        :root {
            --primary-color: #2c1810;
            --secondary-color: #8b4513;
            --accent-color: #d2691e;
            --text-color: #382218;
            --light-bg: #fff8f0;
            --mushroom-brown: #966F33;
            --spore-purple: #800080;
            --earth-tone: #5C4033;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Crimson Text', Georgia, serif;
            line-height: 1.6;
            color: var(--text-color);
            overflow-x: hidden;
            background: url('mushroom-pattern.png') repeat;
        }

        /* Header & Navigation */
        .header {
            background: var(--primary-color);
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 20px rgba(0,0,0,0.3);
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
            font-size: 28px;
            font-weight: 700;
            color: #f8e3c4;
            text-decoration: none;
            display: flex;
            align-items: center;
            font-family: 'Cinzel Decorative', cursive;
        }

        .logo i {
            margin-right: 10px;
            color: var(--accent-color);
        }

        .nav-menu {
            display: flex;
            gap: 30px;
        }

        .nav-item {
            list-style: none;
        }

        .nav-link {
            color: #f8e3c4;
            text-decoration: none;
            font-weight: 500;
            padding: 8px 15px;
            border-radius: 4px;
            transition: all 0.3s ease;
            font-family: 'Philosopher', sans-serif;
        }

        .nav-link:hover {
            background: var(--accent-color);
            text-shadow: 0 0 5px rgba(255,255,255,0.3);
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('mystical-mushrooms.jpg');
            background-size: cover;
            background-position: center;
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
            color: #f8e3c4;
        }

        .hero h1 {
            font-size: 4.5rem;
            margin-bottom: 20px;
            animation: glowPulse 3s infinite;
            font-family: 'Cinzel Decorative', cursive;
        }

        .hero p {
            font-size: 1.4rem;
            margin-bottom: 30px;
            animation: fadeInUp 1s ease 0.2s;
            opacity: 0;
            animation-fill-mode: forwards;
            font-family: 'Philosopher', sans-serif;
        }

        .cta-button {
            display: inline-block;
            padding: 18px 35px;
            background: var(--accent-color);
            color: #f8e3c4;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            transition: all 0.4s ease;
            animation: fadeInUp 1s ease 0.4s;
            opacity: 0;
            animation-fill-mode: forwards;
            font-family: 'Philosopher', sans-serif;
            text-transform: uppercase;
            letter-spacing: 2px;
            border: 2px solid #f8e3c4;
        }

        .cta-button:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 10px 25px rgba(210,105,30,0.4);
            background: var(--spore-purple);
        }

        /* Mystery Box Section */
        .mystery-boxes {
            padding: 100px 0;
            background: var(--light-bg);
        }

        .mystery-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .subscription-tiers {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            margin-top: 50px;
        }

        .tier-card {
            background: white;
            border-radius: 15px;
            padding: 40px;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
        }

        .tier-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: var(--accent-color);
        }

        .tier-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .tier-name {
            font-size: 2rem;
            color: var(--primary-color);
            margin-bottom: 20px;
            font-family: 'Cinzel Decorative', cursive;
        }

        .tier-price {
            font-size: 3rem;
            color: var(--accent-color);
            margin-bottom: 30px;
            font-weight: bold;
        }

        .tier-features {
            list-style: none;
            margin-bottom: 30px;
        }

        .tier-features li {
            margin-bottom: 15px;
            color: var(--text-color);
            font-size: 1.1rem;
        }

        /* Featured Mushrooms */
        .featured-mushrooms {
            padding: 100px 0;
            background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('mushroom-bg.jpg');
            background-attachment: fixed;
            color: #f8e3c4;
        }

        .mushroom-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 50px;
        }

        .mushroom-card {
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 30px;
            text-align: center;
            transition: all 0.4s ease;
        }

        .mushroom-card:hover {
            transform: translateY(-5px);
            background: rgba(255,255,255,0.2);
        }

        .mushroom-image {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            margin-bottom: 20px;
            object-fit: cover;
            border: 3px solid var(--accent-color);
        }

        /* Reviews Section */
        .reviews {
            padding: 100px 0;
            background: var(--light-bg);
        }

        .review-slider {
            max-width: 1000px;
            margin: 50px auto 0;
            position: relative;
        }

        .review-card {
            background: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            text-align: center;
            margin: 20px;
        }

        .reviewer-image {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin: 0 auto 20px;
            border: 3px solid var(--accent-color);
        }

        /* Contact Form */
        .contact {
            padding: 100px 0;
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--earth-tone) 100%);
            color: #f8e3c4;
        }

        .contact-form {
            max-width: 800px;
            margin: 0 auto;
            padding: 40px;
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
        }

        .form-group {
            margin-bottom: 25px;
        }

        .form-label {
            display: block;
            margin-bottom: 10px;
            font-size: 1.1rem;
            color: #f8e3c4;
        }

        .form-input {
            width: 100%;
            padding: 15px;
            border: 2px solid rgba(255,255,255,0.2);
            background: rgba(255,255,255,0.1);
            border-radius: 8px;
            color: #f8e3c4;
            font-size: 1.1rem;
        }

        .form-input:focus {
            outline: none;
            border-color: var(--accent-color);
            background: rgba(255,255,255,0.2);
        }

        .submit-button {
            width: 100%;
            padding: 18px;
            background: var(--accent-color);
            color: #f8e3c4;
            border: none;
            border-radius: 8px;
            font-size: 1.2rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .submit-button:hover {
            background: var(--spore-purple);
            transform: translateY(-3px);
        }

        /* Footer */
        .footer {
            background: var(--primary-color);
            color: #f8e3c4;
            padding: 80px 0 30px;
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
            margin-bottom: 25px;
            font-size: 1.4rem;
            color: var(--accent-color);
        }

        .footer-links {
            list-style: none;
        }

        .footer-links li {
            margin-bottom: 15px;
        }

        .footer-links a {
            color: #f8e3c4;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .footer-links a:hover {
            color: var(--accent-color);
            padding-left: 5px;
        }

        .social-links {
            display: flex;
            gap: 20px;
            margin-top: 25px;
        }

        .social-link {
            width: 45px;
            height: 45px;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            color: #f8e3c4;
            text-decoration: none;
        }

        .social-link:hover {
            background: var(--accent-color);
            transform: translateY(-3px) rotate(10deg);
        }

        .copyright {
            text-align: center;
            padding-top: 30px;
            margin-top: 30px;
            border-top: 1px solid rgba(255,255,255,0.1);
            color: #f8e3c4;
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes glowPulse {
            0% { text-shadow: 0 0 10px rgba(210,105,30,0.5); }
            50% { text-shadow: 0 0 20px rgba(210,105,30,0.8); }
            100% { text-shadow: 0 0 10px rgba(210,105,30,0.5); }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .nav-menu {
                display: none;
            }

            .hero h1 {
                font-size: 2.8rem;
            }

            .subscription-tiers {
                grid-template-columns: 1fr;
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
                <i class="fas fa-mushroom"></i>
                God's Mushroom
            </a>
            <ul class="nav-menu">
                <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="#mystery-boxes" class="nav-link">Mystery Boxes</a></li>
                <li class="nav-item"><a href="#featured" class="nav-link">Featured</a></li>
                <li class="nav-item"><a href="#reviews" class="nav-link">Reviews</a></li>
                <li class="nav-item"><a href="#subscribe" class="nav-link">Subscribe</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-content">
            <h1>Divine Fungal Mysteries Await</h1>
            <p>Embark on a monthly journey of mycological discovery with our curated mystery boxes</p>
            <a href="#subscribe" class="cta-button">Begin Your Journey</a>
        </div>
    </section>

    <section id="mystery-boxes" class="mystery-boxes">
        <div class="mystery-container">
            <div class="section-header">
                <h2>Choose Your Path</h2>
                <p>Select your monthly mushroom mystery experience</p>
            </div>
            <div class="subscription-tiers">
                <div class="tier-card">
                    <h3 class="tier-name">Novice Explorer</h3>
                    <p class="tier-price">$49.99/month</p>
                    <ul class="tier-features">
                        <li>3-4 Unique Mushroom Varieties</li>
                        <li>Monthly Newsletter</li>
                        <li>Basic Recipe Guide</li>
                        <li>Community Forum Access</li>
                    </ul>
                    <a href="#subscribe" class="cta-button">Choose Plan</a>
                </div>
                <div class="tier-card">
                    <h3 class="tier-name">Mystic Seeker</h3>
                    <p class="tier-price">$89.99/month</p>
                    <ul class="tier-features">
                        <li>6-7 Premium Mushroom Varieties</li>
                        <li>Exclusive Recipe Collection</li>
                        <li>Monthly Mycology Guide</li>
                        <li>Virtual Mushroom Workshop</li>
                        <li>Priority Support</li>
                    </ul>
                    <a href="#subscribe" class="cta-button">Choose Plan</a>
                </div>
                <div class="tier-card">
                    <h3 class="tier-name">Divine Cultivator</h3>
                    <p class="tier-price">$149.99/month</p>
                    <ul class="tier-features">
                        <li>10+ Rare Mushroom Varieties</li>
                        <li>Cultivation Kit Included</li>
                        <li>Expert Consultation</li>
                        <li>Private Tasting Events</li>
                        <li>Exclusive Seasonal Varieties</li>
                        <li>Personalized Experience</li>
                    </ul>
                    <a href="#subscribe" class="cta-button">Choose Plan</a>
                </div>
            </div>
        </div>
    </section>

    <section id="featured" class="featured-mushrooms">
        <div class="mystery-container">
            <div class="section-header">
                <h2>Past Featured Treasures</h2>
                <p>A glimpse into our previous mystery selections</p>
            </div>
            <div class="mushroom-grid">
                <div class="mushroom-card">
                    <img src="lion-mane.jpg" alt="Lion's Mane" class="mushroom-image">
                    <h3>Lion's Mane</h3>
                    <p>Known for its cognitive-enhancing properties</p>
                </div>
                <div class="mushroom-card">
                    <img src="reishi.jpg" alt="Reishi" class="mushroom-image">
                    <h3>Reishi</h3>
                    <p>The mushroom of immortality</p>
                </div>
                <div class="mushroom-card">
                    <img src="chaga.jpg" alt="Chaga" class="mushroom-image">
                    <h3>Chaga</h3>
                    <p>The king of medicinal mushrooms</p>
                </div>
            </div>
        </div>
    </section>

    <section id="reviews" class="reviews">
        <div class="mystery-container">
            <div class="section-header">
                <h2>Testimonials from Our Community</h2>
                <p>Hear from fellow mushroom enthusiasts</p>
            </div>
            <div class="review-slider">
                <div class="review-card">
                    <img src="reviewer1.jpg" alt="Sarah M." class="reviewer-image">
                    <p class="review-text">"Each month brings new discoveries and learning opportunities. The Divine Cultivator subscription has transformed my understanding of mushrooms."</p>
                    <h4>Sarah M.</h4>
                    <p>Divine Cultivator Member</p>
                </div>
            </div>
        </div>
    </section>

    <section id="subscribe" class="contact">
        <div class="contact-container">
            <div class="section-header">
                <h2>Begin Your Mycological Journey</h2>
                <p>Subscribe to receive your monthly mystery box</p>
            </div>
            <form class="contact-form">
                <div class="form-group">
                    <label for="name" class="form-label">Full Name</label>
                    <input type="text" id="name" class="form-input" required>
                </div>
                <div class="form-group">
                    <label for="email" class="form-label">Email Address</label>
                    <input type="email" id="email" class="form-input" required>
                </div>
                <div class="form-group">
                    <label for="subscription" class="form-label">Choose Your Path</label>
                    <select id="subscription" class="form-input" required>
                        <option value="">Select a subscription tier</option>
                        <option value="novice">Novice Explorer ($49.99/month)</option>
                        <option value="mystic">Mystic Seeker ($89.99/month)</option>
                        <option value="divine">Divine Cultivator ($149.99/month)</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="message" class="form-label">Special Requests or Questions</label>
                    <textarea id="message" class="form-input" rows="5"></textarea>
                </div>
                <button type="submit" class="submit-button">Begin Your Journey</button>
            </form>
        </div>
    </section>

    <footer class="footer">
        <div class="footer-container">
            <div class="footer-section">
                <h3>About God's Mushroom</h3>
                <p>We curate divine mycological experiences through carefully selected mystery boxes, bringing the wonder and wisdom of mushrooms to your doorstep.</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul class="footer-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#mystery-boxes">Mystery Boxes</a></li>
                    <li><a href="#featured">Featured</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                    <li><a href="#subscribe">Subscribe</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Connect With Us</h3>
                <div class="social-links">
                    <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>&copy; 2024 God's Mushroom. All rights reserved.</p>
        </div>
    </footer>

    <script src="https://kit.fontawesome.com/your-kit-code.js" crossorigin="anonymous"></script>
</body>
</html>