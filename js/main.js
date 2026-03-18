/* ============================================
   The Healing Miracles - Main JavaScript
   ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  initNavbar();
  initMobileMenu();
  initFAQ();
  initAffirmations();
  initScrollAnimations();
  initContactForm();
});

// Navbar Scroll Effect
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Mobile Menu Toggle
function initMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', function() {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
      toggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      toggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
}

// FAQ Accordion
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', function() {
      // Close other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current item
      item.classList.toggle('active');
    });
  });
}

// Daily Affirmations Rotation
function initAffirmations() {
  const affirmationText = document.getElementById('affirmation-text');
  if (!affirmationText) return;

  const affirmations = [
    "I am a channel for healing energy, and I radiate love and light.",
    "Every cell in my body vibrates with positive energy and wellness.",
    "I release all that no longer serves me and welcome healing transformation.",
    "I am connected to the infinite source of universal healing energy.",
    "My mind is calm, my body is relaxed, and my spirit is at peace.",
    "I trust in the natural healing wisdom of my body and soul.",
    "Love flows through me, healing every part of my being.",
    "I am worthy of complete physical, emotional, and spiritual healing.",
    "Each breath I take fills me with renewed energy and vitality.",
    "I embrace positive energy and release all negativity with gratitude."
  ];

  // Get today's affirmation based on date
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  const index = dayOfYear % affirmations.length;

  affirmationText.textContent = affirmations[index];
}

// Scroll Animations
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');

  if (fadeElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeElements.forEach(el => observer.observe(el));
}

// Contact Form (Basic validation - form submission would need backend)
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    // Basic validation
    if (!name || !email || !message) {
      showNotification('Please fill in all required fields.', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showNotification('Please enter a valid email address.', 'error');
      return;
    }

    // Since this is a static site, we'll redirect to WhatsApp with the message
    const whatsappMessage = `Hello! My name is ${name}. ${message}`;
    const whatsappUrl = `https://wa.me/918806912333?text=${encodeURIComponent(whatsappMessage)}`;

    showNotification('Redirecting to WhatsApp...', 'success');
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1000);

    form.reset();
  });
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();

  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <span>${message}</span>
    <button onclick="this.parentElement.remove()">&times;</button>
  `;

  // Add styles dynamically
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    padding: 1rem 2rem;
    border-radius: 10px;
    background: ${type === 'success' ? '#7C9A92' : type === 'error' ? '#e74c3c' : '#3498db'};
    color: white;
    display: flex;
    align-items: center;
    gap: 1rem;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    z-index: 9999;
    animation: slideIn 0.3s ease;
  `;

  // Add animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);

  document.body.appendChild(notification);

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.remove();
  }, 5000);
}

// Smooth scroll for anchor links
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

// WhatsApp chat message generator
function openWhatsApp(prefilledMessage = '') {
  const phone = '918806912333';
  const message = prefilledMessage || 'Hello! I am interested in learning more about your healing services.';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Chakra hover effect (for chakra display)
function initChakraDisplay() {
  const chakras = document.querySelectorAll('.chakra');

  const chakraInfo = {
    'root': 'Root Chakra - Grounding & Stability',
    'sacral': 'Sacral Chakra - Creativity & Emotions',
    'solar': 'Solar Plexus - Personal Power',
    'heart': 'Heart Chakra - Love & Compassion',
    'throat': 'Throat Chakra - Communication',
    'third-eye': 'Third Eye - Intuition & Wisdom',
    'crown': 'Crown Chakra - Spiritual Connection'
  };

  chakras.forEach(chakra => {
    chakra.addEventListener('mouseenter', function() {
      const type = this.dataset.chakra;
      if (chakraInfo[type]) {
        this.setAttribute('title', chakraInfo[type]);
      }
    });
  });
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initChakraDisplay);
} else {
  initChakraDisplay();
}
