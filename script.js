// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) { // prevent error if section doesn't exist
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Progress bar animation
window.addEventListener('load', function() {
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    
    skillProgressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Add active class to current section in navigation
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (current && link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');
if (projectCards.length > 0) {
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Animate elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.timeline-item, .project-card, .skill-category');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animated');
        }
    });
};

// Initialize animation on scroll
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Add typing effect to hero title
const heroTitle = document.querySelector('.hero-text h1');
if (heroTitle) {
    const titleText = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < titleText.length) {
            heroTitle.textContent += titleText.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, 50);
}
