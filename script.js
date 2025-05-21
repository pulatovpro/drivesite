document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('active');
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const coverHeight = document.querySelector('.cover').offsetHeight;
    
    if (window.scrollY > coverHeight / 2) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});