const container = document.getElementById('container');

let count = window.innerWidth / 10;

for (let i = 0; i < count; i++) {
    let leftSnow = Math.random() * 5000;
    let topSnow = Math.random() * container.clientHeight;
    let timeSnow = Math.random() * 100;
    let widthHeightSnow = Math.random() * 50;
    let blur = Math.random() * 5;
    let div = document.createElement('div');
    div.style.left = leftSnow + "px";
    div.style.top = topSnow + "px";
    div.style.width = widthHeightSnow + 'px';
    div.style.height = widthHeightSnow + 'px';
    div.style.filter = `blur(${blur})`;
    div.classList.add('snow');
    div.style.animationDuration = timeSnow + 's';
    container.appendChild(div);
}

document.body.style.setProperty('--win-w', window.innerWidth + 'px');
document.body.style.setProperty('--win-h', window.innerHeight + 'px');