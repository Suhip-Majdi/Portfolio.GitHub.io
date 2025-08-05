// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// Sticky Header
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Active Navigation Link
const sections = document.querySelectorAll('section');
const navLinksAll = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= (sectionTop - 300)) {
      current = section.getAttribute('id');
    }
  });

  navLinksAll.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Back to Top Button
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('active');
  } else {
    backToTopBtn.classList.remove('active');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Here you would typically send the form data to a server
  // For demonstration, we'll just show an alert
  alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);

  // Reset the form
  contactForm.reset();
});

// Animation on Scroll
const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
  fadeElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Initialize elements as invisible
fadeElements.forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Toggle Projects Visibility
const toggleProjectsBtn = document.getElementById('toggle-projects');
const projectCards = document.querySelectorAll('.project-card');
let showAllProjects = false;

// Initially show only first 2 projects
projectCards.forEach((card, index) => {
  if (index >= 3) {
    card.classList.add('hidden');
  }
});

toggleProjectsBtn.addEventListener('click', () => {
  showAllProjects = !showAllProjects;

  projectCards.forEach((card, index) => {
    if (index >= 2) {
      if (showAllProjects) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    }
  });

  toggleProjectsBtn.textContent = showAllProjects ? 'Show Less Projects' : 'Show All Projects';

  // Smooth scroll to projects section when showing all
  if (showAllProjects) {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  }
});

// Toggle Certifications Visibility
const toggleCertsBtn = document.getElementById('toggle-certs');
const certCards = document.querySelectorAll('.certification-card');
let showAllCerts = false;

// Initially show only first 2 certifications
certCards.forEach((card, index) => {
  if (index >= 3) {
    card.classList.add('hidden');
  }
});

toggleCertsBtn.addEventListener('click', () => {
  showAllCerts = !showAllCerts;

  certCards.forEach((card, index) => {
    if (index >= 2) {
      if (showAllCerts) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    }
  });

  toggleCertsBtn.textContent = showAllCerts ? 'Show Less Certifications' : 'Show All Certifications';

  // Smooth scroll to certifications section when showing all
  if (showAllCerts) {
    document.getElementById('certifications').scrollIntoView({ behavior: 'smooth' });
  }
});

document.querySelector('.copyright').innerHTML = `© ${new Date().getFullYear()} Suhip Majdi. All rights reserved.`;