const circles = $('.circle')
let activeLight = 0;

setInterval(changeLight, 600);

function changeLight() {
    circles[activeLight].className = 'circle';
    activeLight++;

    if(activeLight > 2) {
        activeLight = 0;
    }

    const currentLight = circles[activeLight];

    currentLight.classList.add(
        currentLight.getAttribute('color')
    );
}