// Mobile-First JavaScript for Touch Interactions

document.addEventListener('DOMContentLoaded', function () {

    // Bottom Navigation Active State
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.mobile-card');

    // Update active nav on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });

        // Sticky Header Show/Hide
        const stickyHeader = document.getElementById('sticky-header');
        if (stickyHeader) {
            if (window.pageYOffset > 300) {
                stickyHeader.classList.add('visible');
            } else {
                stickyHeader.classList.remove('visible');
            }
        }
    });

    // Smooth Scroll for Navigation
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Bike Carousel Swipe
    const carousel = document.querySelector('.bikes-carousel');
    const dots = document.querySelectorAll('.dot');

    if (carousel) {
        let currentSlide = 0;

        carousel.addEventListener('scroll', () => {
            const slideWidth = carousel.offsetWidth;
            currentSlide = Math.round(carousel.scrollLeft / slideWidth);

            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        });

        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                const slideWidth = carousel.offsetWidth;
                carousel.scrollTo({
                    left: slideWidth * index,
                    behavior: 'smooth'
                });
            });
        });
    }

    // Instagram Post Tap to View
    const instaPosts = document.querySelectorAll('.insta-post');
    instaPosts.forEach(post => {
        post.addEventListener('click', () => {
            // Open Instagram profile
            window.open('https://www.instagram.com/sameer_ahmed76/', '_blank');
        });
    });

    // Add touch feedback to buttons
    const touchElements = document.querySelectorAll('.mobile-cta-btn, .contact-btn, .follow-instagram-btn');
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function () {
            this.style.opacity = '0.8';
        });
        element.addEventListener('touchend', function () {
            this.style.opacity = '1';
        });
    });

    // Prevent horizontal scroll
    document.body.addEventListener('touchmove', function (e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: false });

    console.log('Mobile interactions loaded ✅');
});
