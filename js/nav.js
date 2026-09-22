const navLinks = document.querySelectorAll('.nav-list a');
const pages = document.querySelectorAll('.page');
const underline = document.querySelector('.nav-underline');

function moveUnderline(link) {
  underline.style.width = `${link.offsetWidth}px`;
  underline.style.left = `${link.offsetLeft}px`;
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.dataset.target;

    pages.forEach(page => {
      page.classList.toggle('active', page.id === targetId);
    });

    navLinks.forEach(nav => nav.classList.remove('active'));
    link.classList.add('active');

    moveUnderline(link);
  });
});

// Set initial underline position under the default active link (About)
window.addEventListener('DOMContentLoaded', () => {
  const activeLink = document.querySelector('.nav-list a.active');
  if (activeLink) moveUnderline(activeLink);
});