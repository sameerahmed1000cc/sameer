document.addEventListener('DOMContentLoaded', () => {

    // --- Portal & Daily Quote Logic ---
    const quotes = [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Customer service is not a department, it's an attitude.", author: "Unknown" },
        { text: "Quality means doing it right when no one is looking.", author: "Henry Ford" },
        { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
        { text: "Your most unhappy customers are your greatest source of learning.", author: "Bill Gates" },
        { text: "Excellence is not a skill, it’s an attitude.", author: "Ralph Marston" },
        { text: "To give real service you must add something which cannot be bought or measured with money, and that is sincerity and integrity.", author: "Douglas Adams" }
    ];

    const quoteEl = document.getElementById('daily-quote');
    const authorEl = document.getElementById('quote-author');
    const overlay = document.getElementById('portal-overlay');
    const enterBtn = document.getElementById('enter-btn');

    // Select Quote based on Day of Year to ensure it changes daily automatically
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const quoteIndex = dayOfYear % quotes.length;
    const todayQuote = quotes[quoteIndex];

    if (quoteEl) {
        quoteEl.textContent = `"${todayQuote.text}"`;
        authorEl.textContent = `- ${todayQuote.author}`;
    }

    // Handle Enter Click
    if (enterBtn) {
        enterBtn.addEventListener('click', () => {
            overlay.classList.add('open');
            // Remove from DOM after animation to improve performance
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 1500);
        });
    }
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.skill-card, .service-item, .about-text, .highlight-box').forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});
