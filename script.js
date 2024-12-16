document.querySelectorAll('.quiz-card button').forEach(button => {
    button.addEventListener('click', () => {
        const title = button.parentElement.querySelector('h2').textContent;
        alert(`${title}를 시작합니다!`);
    });
});
