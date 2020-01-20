//const progress = $('.progress-done');
const progress = document.querySelector('.progress-done');
let progressPercentage = 0;

var timer = setInterval(updateProgress, 500);

function updateProgress() {
    progressPercentage += 10;

    if (progressPercentage > 100) {
        progress.style.opacity = 0;
        progressPercentage = 0;
    }

    progress.style.width = (300 * progressPercentage)/100 + 'px';
    progress.style.opacity = 1;
    progress.innerHTML = progressPercentage + '%';
}

