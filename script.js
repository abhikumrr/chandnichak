// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Navbar Scroll Effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Hero Section Animations
const tl = gsap.timeline();

tl.from('.hero-bg img', {
    scale: 1.2,
    duration: 2,
    ease: "power2.out"
})
.from('.reveal-text', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
}, "-=1");

// Section Reveal Animations
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    const heading = section.querySelector('h2');
    const subHeading = section.querySelector('.sub-heading');
    const content = section.querySelectorAll('p, .signature-card, .menu-item, .contact-info, .booking-form');

    if (heading) {
        gsap.from(heading, {
            scrollTrigger: {
                trigger: heading,
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    }

    if (subHeading) {
        gsap.from(subHeading, {
            scrollTrigger: {
                trigger: subHeading,
                start: "top 80%",
            },
            x: -20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    }

    if (content.length > 0) {
        gsap.from(content, {
            scrollTrigger: {
                trigger: content[0],
                start: "top 85%",
            },
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out"
        });
    }
});

// Parallax Effect for Images
gsap.to('.about-image img', {
    scrollTrigger: {
        trigger: '.about',
        start: "top bottom",
        end: "bottom top",
        scrub: true
    },
    y: -50,
    ease: "none"
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile Menu Toggle (Simplified)
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('open');
    });
}
