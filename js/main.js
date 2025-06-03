const phrases = ["Java & Spring Boot Specialist", "Complex Problem Solver", "Future Systems Architect"];
let currentPhrase = 0;
let i = 0;
let typingSpeed = 150;

function type() {
  const textElement = document.querySelector('.typing-text');
  if (i < phrases[currentPhrase].length) {
    textElement.textContent += phrases[currentPhrase].charAt(i);
    i++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  const textElement = document.querySelector('.typing-text');
  if (i > 0) {
    textElement.textContent = phrases[currentPhrase].substring(0, i - 1);
    i--;
    setTimeout(erase, 50);
  } else {
    currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Optional: Close on outside click
window.addEventListener('click', function (event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});



