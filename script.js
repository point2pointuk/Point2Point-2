// DOM Elements
const navbar = document.getElementById('navbar');

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Navigation removed - logo only

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add animation classes and observe elements
const animatedElements = document.querySelectorAll('.about-item, .app-tile, .store-btn, .footer-section');
animatedElements.forEach((el, index) => {
    // Add staggered animation delays
    el.style.transitionDelay = `${index * 0.1}s`;
    
    // Add appropriate animation class based on position
    if (index % 2 === 0) {
        el.classList.add('fade-in-left');
    } else {
        el.classList.add('fade-in-right');
    }
    
    observer.observe(el);
});

// Special observer for section titles
const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up', 'visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section-title, .section-subtitle').forEach(title => {
    title.classList.add('fade-in-up');
    titleObserver.observe(title);
});

// Explore Button Functionality
document.querySelectorAll('.explore-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const appName = btn.closest('.app-tile').querySelector('h3').textContent;
        console.log(`Explore button clicked: ${appName}`);
        
        // Add click animation
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 150);
        
        // Show alert with app name
        alert(`Exploring ${appName}...`);
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroElements = document.querySelectorAll('.floating-elements .element');
    
    heroElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Loading Animation
window.addEventListener('load', () => {
    // Add loaded class to body for any additional animations
    document.body.classList.add('loaded');
});

// Store Button Analytics (placeholder for future implementation)
document.querySelectorAll('.store-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const store = btn.querySelector('.store-name').textContent;
        console.log(`Store button clicked: ${store}`);
        
        // Add click animation
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 150);
        
        // Here you would typically track the click or redirect to the actual store
        // For now, we'll just show an alert
        alert(`Redirecting to ${store}...`);
    });
});

// Scroll to Top Functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button (optional)
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
// Use a blue gradient background similar to your site
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background: linear-gradient(135deg, #22d3ee 0%, #1e40af 100%);
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 1;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 24px 0 rgba(0,0,0,0.25);
    display: flex;
    align-items: center;
    justify-content: center;
`;

document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', scrollToTop);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events for better performance
const throttledScrollHandler = throttle(() => {
    // Navbar scroll effect
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Scroll to top button
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);

// Form validation and interaction (for future contact forms)
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add smooth hover effects for interactive elements
document.querySelectorAll('.btn, .store-btn, .nav-link').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Initialize everything when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Point2Point website loaded successfully!');
    
    // Add any additional initialization code here
});

// Error handling for images and external resources
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.warn('Image failed to load:', e.target.src);
        // Could add fallback image here
    }
});

// Preload critical resources
function preloadResources() {
    const criticalResources = [
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = resource;
        document.head.appendChild(link);
    });
}

// Call preload function
preloadResources();
