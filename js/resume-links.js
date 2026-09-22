document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('a[data-target]');
    const sections = document.querySelectorAll('.resume-section');

    console.log('navLinks found:', navLinks.length);
    console.log('sections found:', sections.length, [...sections].map(s => s.id));

    if (!navLinks.length) {
        console.warn('resume nav: no links with data-target found.');
        return;
    }

    function activateSection(targetId) {
        navLinks.forEach(function (l) {
            l.classList.toggle('active', l.getAttribute('data-target') === targetId);
        });
        sections.forEach(function (section) {
            section.classList.toggle('active', section.id === targetId);
        });
    }

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            activateSection(link.getAttribute('data-target'));
        });
    });

    activateSection('overview');
});