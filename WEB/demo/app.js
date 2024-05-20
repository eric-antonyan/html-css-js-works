const buttons = document.querySelectorAll("button");
const data = document.getElementById("data");
const a = document.querySelector("a");

const image = document.querySelector("img");

const images = [
    [
        "wallpaper-1.avif",
        "wallpaper-2.jpg",
        "wallpaper-3.avif",
        "https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-thumb.jpg"
    ],

    [
        "Image I",
        "Image II",
        "Image III",
        "Image IV",
    ]
];

let index = 0;

let intervalId;

function startStop() {
    if (buttons[0].innerText === "Start") {
        buttons[0].innerText = "Stop"
        intervalId = setInterval(function () {
            image.classList.remove("hide");
            image.src = images[0][index];
            data.innerText = images[1][index];
            if (index === images[1].length - 1) {
                index = -1;
            }
            index++
        }, 1000)
    } else {
        buttons[0].innerText = "Start";
        clearInterval(intervalId)
    }
}

function left() {
    clearInterval(intervalId);
    image.src = images[0][index];
    data.innerHTML = images[1][index];
    if (index === images.length + 1) {
        index = 0;
    } else {
        index++;
    }
    console.log(index)
}

function right() {
    clearInterval(intervalId);
    image.src = images[0][index];
    data.innerHTML = images[1][index];
    if (index === 0) {
        index = images.length + 2;
    }
    index--;
    console.log(index);
}

a.onclick = function () {
    a.setAttribute("download", "")
    a.href = image.src;
}

buttons[0].onmouseover = () => {
    buttons[1].classList.add("effect");
    buttons[2].classList.add("effect");
}

buttons[0].onmouseout = () => {
    buttons[1].classList.remove("effect");
    buttons[2].classList.remove("effect");
}

buttons[1].onmouseover = () => {
    buttons[0].classList.add("effect");
    buttons[2].classList.add("effect");
}

buttons[1].onmouseout = () => {
    buttons[0].classList.remove("effect");
    buttons[2].classList.remove("effect");
}

buttons[2].onmouseover = () => {
    buttons[0].classList.add("effect");
    buttons[1].classList.add("effect");
}

buttons[2].onmouseout = () => {
    buttons[0].classList.remove("effect");
    buttons[1].classList.remove("effect");
}