setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let ms = date.getMilliseconds();
    const dp = document.getElementById("dp");
    const hbText = document.querySelector(".hbText");


    if (hour < 10) {
        hour = "0" + hour;
    }

    if (minute < 10) {
        minute = "0" + minute;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    dp.innerHTML = hour + ':' + minute + ':' + seconds;

    if (minute == 5 && seconds == 0) {
        hbText.classList.add("showHbText")
    }
})