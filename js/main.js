// Animate On Scroll
AOS.init({
  duration: 900,
  easing: 'ease-in-out',
  once: true
});

// Typing effect in hero
const typingElement = document.querySelector('.typing');
const phrases = [
  "Backend Developer",
  "Problem Solver",
  "System Designer",
  "Java Enthusiast",
  "Creator of Real-World Solutions"
];

let phraseIndex = 0;
let charIndex = 0;
let currentPhrase = "";
let isDeleting = false;

function typeEffect() {
  const phrase = phrases[phraseIndex];
  if (isDeleting) {
    currentPhrase = phrase.substring(0, charIndex--);
  } else {
    currentPhrase = phrase.substring(0, charIndex++);
  }

  typingElement.textContent = currentPhrase;

  // Typing speed
  let speed = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === phrase.length) {
    speed = 1400; // pause before deleting
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 600;
  }

  setTimeout(typeEffect, speed);
}

if (typingElement) typeEffect();


// Shrink navbar on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});


// Contact form live feedback
const form = document.querySelector('.form');
const statusEl = document.getElementById('formStatus');
if (form && statusEl) {
  form.addEventListener('submit', () => {
    statusEl.textContent = "Sending...";
    setTimeout(() => {
      statusEl.textContent = "Sent ✓ Thanks for reaching out!";
    }, 1000);
  });
}


// Ensure all project cards are same height
function equalizeCards() {
  const cards = document.querySelectorAll('.card');
  let maxHeight = 0;
  cards.forEach(card => {
    card.style.height = "auto"; // reset first
    maxHeight = Math.max(maxHeight, card.offsetHeight);
  });
  cards.forEach(card => {
    card.style.height = maxHeight + "px";
  });
}

window.addEventListener('load', equalizeCards);
window.addEventListener('resize', equalizeCards);


// Modal system (reuse-ready)
const openButtons = document.querySelectorAll('[data-modal]');
const closeButtons = document.querySelectorAll('[data-close]');

openButtons.forEach(button => {
  const key = button.getAttribute('data-modal');
  button.addEventListener('click', () => {
    const modal = document.getElementById('modal-' + key);
    if (modal) modal.classList.add('show');
  });
});

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.closest('.modal').classList.remove('show');
  });
});

document.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    e.target.classList.remove('show');
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.show').forEach(m => m.classList.remove('show'));
  }
});


// Fade transitions for hover links
document.querySelectorAll('a, .btn').forEach(el => {
  el.addEventListener('mouseover', () => {
    el.style.transition = 'all 0.3s ease';
  });
});

// Simple Lightbox for project images
document.querySelectorAll('.image-gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.classList.add('lightbox');
    overlay.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', () => overlay.remove());
  });
});
