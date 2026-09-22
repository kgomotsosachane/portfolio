document.querySelectorAll('[data-target]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        if (!targetSection) return;

        // remove the current content
        document.querySelectorAll('.resume-section.active').forEach(section => {
            section.classList.remove('active');
        });

        // show the section matching the clicked anchor
        targetSection.classList.add('active');

        // sync active styling on sidebar nav links
        document.querySelectorAll('.rusume-nav [data-target]').forEach(nav => {
            nav.classList.remove('active');
        });
        const sidebarLink = document.querySelector(`.rusume-nav [data-target="${targetId}"]`);
        if (sidebarLink) sidebarLink.classList.add('active');
    });
});