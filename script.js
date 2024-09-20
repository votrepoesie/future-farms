const svg = document.querySelector('.squiggle');
const path = svg.querySelector('path');

const scroll = () => {
    const distance = window.scrollY;
    const totalDistance = document.body.clientHeight - window.innerHeight;
    const percentage = distance / totalDistance;
    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength * (1 - percentage) + 600;
    // add 600 for slower start
}

scroll();
window.addEventListener('scroll', scroll);