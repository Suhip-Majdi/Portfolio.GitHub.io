/* ============================================================
   SUHIP MAJDI — Portfolio JavaScript
   ============================================================ */

// ── MOBILE NAV ──────────────────────────────────────────────
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('active');
    navLinks?.classList.remove('open');
  });
});

// ── STICKY HEADER ───────────────────────────────────────────
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 80);
});

// ── ACTIVE NAV LINK ─────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

function setActiveNav() {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 140) {
      current = section.id;
    }
  });
  navItems.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}
window.addEventListener('scroll', setActiveNav, { passive: true });

// ── SCROLL ANIMATIONS ───────────────────────────────────────
const fadeEls = document.querySelectorAll('.timeline-card, .project-card, .education-card, .certification-card, .skill-category, .about-text p');
fadeEls.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── BACK TO TOP ─────────────────────────────────────────────
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop?.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── PROJECTS TOGGLE ─────────────────────────────────────────
const toggleProjects = document.getElementById('toggle-projects');
const projectCards = document.querySelectorAll('.project-card');
let showAllProjects = false;

// Show first 3 by default (featured), hide rest
projectCards.forEach((card, i) => {
  if (i >= 3) card.classList.add('hidden');
});

toggleProjects?.addEventListener('click', () => {
  showAllProjects = !showAllProjects;
  projectCards.forEach((card, i) => {
    if (i >= 3) card.classList.toggle('hidden', !showAllProjects);
  });
  toggleProjects.textContent = showAllProjects ? 'Show Less' : 'Show All Projects';
});

// ── CERTIFICATIONS TOGGLE ───────────────────────────────────
const toggleCerts = document.getElementById('toggle-certs');
const certCards = document.querySelectorAll('.certification-card');
let showAllCerts = false;

certCards.forEach((card, i) => {
  if (i >= 3) card.classList.add('hidden');
});

toggleCerts?.addEventListener('click', () => {
  showAllCerts = !showAllCerts;
  certCards.forEach((card, i) => {
    if (i >= 3) card.classList.toggle('hidden', !showAllCerts);
  });
  toggleCerts.textContent = showAllCerts ? 'Show Less' : 'Show All Certifications';
});

// ── CONTACT FORM ─────────────────────────────────────────────
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name')?.value;
  const btn = e.target.querySelector('button[type="submit"]');
  if (btn) {
    btn.textContent = '✓ Message Sent!';
    btn.style.background = 'var(--primary-d)';
    setTimeout(() => {
      btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
      btn.style.background = '';
      e.target.reset();
    }, 3000);
  }
  console.log('Form submitted by:', name);
});

// ── FOOTER YEAR ──────────────────────────────────────────────
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();