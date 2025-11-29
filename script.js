// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all university cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('[data-animate]');
    cards.forEach(card => observer.observe(card));
});

// Add subtle parallax effect to hero gradient
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroGradient = document.querySelector('.hero-gradient');
    if (heroGradient && scrolled < window.innerHeight) {
        heroGradient.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Update the tooltip creation to only show on hover
const deadlineDetails = document.createElement('div');
deadlineDetails.className = 'deadline-details';

// Only show tooltip when hovering over a date with deadlines
dateCell.addEventListener('mouseenter', () => {
    if (deadlinesByDate[day]) {
        deadlineDetails.style.display = 'block';
        setTimeout(() => {
            deadlineDetails.style.opacity = '1';
            deadlineDetails.style.pointerEvents = 'auto';
        }, 10);
    }
});

dateCell.addEventListener('mouseleave', () => {
    deadlineDetails.style.opacity = '0';
    deadlineDetails.style.pointerEvents = 'none';
    setTimeout(() => {
        deadlineDetails.style.display = 'none';
    }, 200);
});