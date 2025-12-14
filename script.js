document.addEventListener('DOMContentLoaded', () => {

    // --- Portal & Daily Quote Logic ---
    // --- Portal & Daily Quote Logic ---
    const quotes = [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Customer service is not a department, it's an attitude.", author: "Unknown" },
        { text: "Quality means doing it right when no one is looking.", author: "Henry Ford" },
        { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
        { text: "Your most unhappy customers are your greatest source of learning.", author: "Bill Gates" },
        { text: "Excellence is not a skill, it’s an attitude.", author: "Ralph Marston" },
        { text: "To give real service you must add something which cannot be bought or measured with money, and that is sincerity and integrity.", author: "Douglas Adams" },
        { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
        { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
        { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
        { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
        { text: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen Covey" },
        { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
        { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
        { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
        { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
        { text: "Act as if what you do makes a difference. It does.", author: "William James" },
        { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
        { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
        { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
        { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
        { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
        { text: "If you really look closely, most overnight successes took a long time.", author: "Steve Jobs" },
        { text: "The secret of success is to do the common thing uncommonly well.", author: "John D. Rockefeller Jr." },
        { text: "I never dreamed about success, I worked for it.", author: "Estée Lauder" },
        { text: "It is better to fail in originality than to succeed in imitation.", author: "Herman Melville" },
        { text: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
        { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
        { text: "Success seems to be connected with action. Successful people keep moving.", author: "Conrad Hilton" },
        { text: "In order to succeed, we must first believe that we can.", author: "Nikos Kazantzakis" },
        { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
        { text: "If you can dream it, you can do it.", author: "Walt Disney" },
        { text: "A courteous treatment will make a customer a walking advertisement.", author: "James Cash Penney" },
        { text: "Ideally, I want a customer to buy from me because I’ve made it so easy.", author: "Unknown" },
        { text: "Good customer service costs less than bad customer service.", author: "Sally Gronow" },
        { text: "The customer’s perception is your reality.", author: "Kate Zabriskie" },
        { text: "Make a customer, not a sale.", author: "Katherine Barchetti" },
        { text: "The more you engage with customers the clearer things become and the easier it is to determine what you should be doing.", author: "John Russell" },
        { text: "Kind words can be short and easy to speak, but their echoes are truly endless.", author: "Mother Teresa" },
        { text: "Communication is the solvent of all problems and is the foundation for personal development.", author: "Peter Shepherd" },
        { text: "The single biggest problem in communication is the illusion that it has taken place.", author: "George Bernard Shaw" },
        { text: "Good communication is the bridge between confusion and clarity.", author: "Nat Turner" },
        { text: "Listening is an art that requires attention over talent, spirit over ego, others over self.", author: "Dean Jackson" },
        { text: "Empathy is simply listening, holding space, withholding judgment, chemically connecting.", author: "Brene Brown" },
        { text: "Leadership is not about being in charge. It is about taking care of those in your charge.", author: "Simon Sinek" },
        { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
        { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
        { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" }
    ];

    const quoteEl = document.getElementById('daily-quote');
    const authorEl = document.getElementById('quote-author');
    const overlay = document.getElementById('portal-overlay');
    const enterBtn = document.getElementById('enter-btn');
    const themeAudio = document.getElementById('theme-audio');

    // --- Daily Anime Theme Song Logic ---
    // List of popular Anime Themes (Placeholders - Replace 'url' with actual MP3 links if you have them)
    // Currently using high-quality piano covers/proxies to ensure they play.
    const animeSongs = [
        { title: "Gurenge (Demon Slayer)", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" }, // High energy
        { title: "Unravel (Tokyo Ghoul)", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" }, // Emotional
        { title: "Blue Bird (Naruto)", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },    // Upbeat
        { title: "You Say Run (MHA)", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },   // Epic
        { title: "Suzume (Title Track)", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }    // Calm
    ];

    // Select Song based on Day of Year (Rotates Daily)
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const songIndex = dayOfYear % animeSongs.length;
    const todaysSong = animeSongs[songIndex];

    console.log(`Playing Daily Anime Theme: ${todaysSong.title}`);
    if (themeAudio) {
        themeAudio.src = todaysSong.url;
    }

    // Random Shuffle Logic for Quotes
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const todayQuote = quotes[quoteIndex];

    if (quoteEl) {
        quoteEl.textContent = `"${todayQuote.text}"`;
        authorEl.textContent = `- ${todayQuote.author}`;
    }

    // Handle Enter Click
    if (enterBtn) {
        enterBtn.addEventListener('click', () => {
            // Play Theme Music
            if (themeAudio) {
                themeAudio.volume = 0.4; // Slightly lower volume for background
                themeAudio.play().catch(error => {
                    console.log("Audio play failed (browser policy):", error);
                });
            }

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
