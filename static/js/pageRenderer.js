document.addEventListener('DOMContentLoaded', () => {

    const projectsButtons = document.querySelectorAll('.toprojects');
    const generalButtons = document.querySelectorAll('.togeneral');
    const generalPage = document.querySelector('.card');
    const projectsPage = document.querySelector('.projects-card');

    projectsPage.classList.add('hidden');

    projectsButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            generalPage.classList.add('hidden');
            projectsPage.classList.remove('hidden');
        });
    });

    generalButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            projectsPage.classList.add('hidden');
            generalPage.classList.remove('hidden');
        });
    });

});