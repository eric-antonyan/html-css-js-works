const popup = document.querySelector(".popup_screen")

function say() {
    popup.classList.add("show")

    
}

setTimeout(func => {
    if (popup.classList.remove("show")) {
        popup.classList.add("show");
    }
}, 10000)

function closePopup() {
    popup.classList.remove("show");
}