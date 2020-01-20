// const progress = $('.progress-done');
const progress = document.querySelector('.progress-done');

setInterval(updateProgress, 500);

function updateProgress() {
    progress.style.width = progress.getAttribute('data-done') + '%';
    progress.style.opacity = 1;
}

