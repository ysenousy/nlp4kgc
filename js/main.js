// NLP4KGC Website - Main JavaScript
// Minimal vanilla JS for enhanced interactivity

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeSmoothScroll();
    initializeAnimations();
    initializeMobileMenu();
});

// Navigation active state
function initializeNavigation() {
    const currentLocation = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href').split('/').pop() || 'index.html';
        if (href === currentLocation || (currentLocation === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Smooth scroll for anchor links
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Intersection Observer for fade-in animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe cards and sections
    document.querySelectorAll('.card, section').forEach(element => {
        observer.observe(element);
    });
}

// Mobile menu collapse on link click
function initializeMobileMenu() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
                bsCollapse.hide();
            }
        });
    });
}

// Utility: Add active class to current page
window.addEventListener('load', () => {
    const activeNav = document.querySelector('.nav-link.active');
    if (activeNav) {
        activeNav.style.color = '#0d6efd';
    }
});

// Log that the site has loaded (for debugging)
console.log('NLP4KGC Workshop website loaded successfully!');
