// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

// Close the menu after tapping a link
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  });
});

// Booking form: check required fields, then show a confirmation.
// (No server yet, so nothing is actually sent.)
const form = document.getElementById('booking-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', event => {
  event.preventDefault();

  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    const ok = field.value.trim() !== '' && field.checkValidity();
    field.classList.toggle('invalid', !ok);
    if (!ok) valid = false;
  });

  if (!valid) {
    status.textContent = 'Please fill in your name, phone and a valid email.';
    status.className = 'form-status error';
    return;
  }

  const name = form.name.value.trim().split(' ')[0];
  status.textContent = `Thanks ${name}! Your request has been received. I'll be in touch within 24 hours.`;
  status.className = 'form-status success';
  form.reset();
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
