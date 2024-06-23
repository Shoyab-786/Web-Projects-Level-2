let questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    question.addEventListener('click', () => {
        let answer = question.nextElementSibling;
        answer.classList.toggle('active');
    });
});
