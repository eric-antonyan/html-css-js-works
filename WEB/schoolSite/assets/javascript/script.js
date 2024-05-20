const showNavbar = document.querySelector(".navbar");

setTimeout(() => {
    showNavbar.classList.add("show");
}, 500)

document.documentElement.style
    .setProperty('--max-height', (window.innerHeight - 60) + 'px');

const navbarHamburger = document.querySelector(".hamburger");
const hamburgerBars = document.querySelectorAll(".bar");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

navbarHamburger.addEventListener('click', function () {
    hamburgerBars.forEach((bar) => {
        bar.classList.toggle("active");
    })
    navbar.classList.toggle("active");
    navLinks.classList.toggle("active");
})

const showContent = document.querySelector(".content");

setTimeout(() => {
    showContent.classList.add("show");
}, 1000)

const generalContent = document.querySelector(".general");
const aboutUsContent = document.querySelector(".about-us");
const ourAchievementsContent = document.querySelector(".our-achievements");
const eventsContent = document.querySelector(".events");
const internalAssessmentContent = document.querySelector(".internal-assessment");
const budgetContent = document.querySelector(".budget");

const navLinksClose = document.querySelector(".nav-links")

function generalbtn() {
    aboutUsContent.classList.add("hide");
    ourAchievementsContent.classList.add("hide");
    eventsContent.classList.add("hide");
    internalAssessmentContent.classList.add("hide");
    budgetContent.classList.add("hide");

    generalContent.classList.remove("hide");

    navLinksClose.classList.remove("active");
    hamburgerBars.forEach((bar) => {
        bar.classList.remove("active");
    })
}

function aboutusbtn() {
    generalContent.classList.add("hide");
    ourAchievementsContent.classList.add("hide");
    eventsContent.classList.add("hide");
    internalAssessmentContent.classList.add("hide");
    budgetContent.classList.add("hide");

    aboutUsContent.classList.remove("hide");

    navLinksClose.classList.remove("active");
    navLinks.classList.remove("active");
    hamburgerBars.forEach((bar) => {
        bar.classList.remove("active");
    })
}

function ourachievementsbtn() {
    generalContent.classList.add("hide");
    aboutUsContent.classList.add("hide");
    eventsContent.classList.add("hide");
    internalAssessmentContent.classList.add("hide");
    budgetContent.classList.add("hide");

    ourAchievementsContent.classList.remove("hide");

    navLinksClose.classList.remove("active");
    hamburgerBars.forEach((bar) => {
        bar.classList.remove("active");
    })
}

function eventsbtn() {
    generalContent.classList.add("hide");
    aboutUsContent.classList.add("hide");
    ourAchievementsContent.classList.add("hide");
    internalAssessmentContent.classList.add("hide");
    budgetContent.classList.add("hide");

    eventsContent.classList.remove("hide");

    navLinksClose.classList.remove("active");
    navbar.classList.remove("active");
    hamburgerBars.forEach((bar) => {
        bar.classList.remove("active");
    })
}

function internalassessmentbtn() {
    generalContent.classList.add("hide");
    aboutUsContent.classList.add("hide");
    ourAchievementsContent.classList.add("hide");
    eventsContent.classList.add("hide");
    budgetContent.classList.add("hide");

    internalAssessmentContent.classList.remove("hide");

    navLinksClose.classList.remove("active");
    hamburgerBars.forEach((bar) => {
        bar.classList.remove("active");
    })
}

function budgetbtn() {
    generalContent.classList.add("hide");
    aboutUsContent.classList.add("hide");
    ourAchievementsContent.classList.add("hide");
    eventsContent.classList.add("hide");
    internalAssessmentContent.classList.add("hide");

    budgetContent.classList.remove("hide");

    navLinksClose.classList.remove("active");
    hamburgerBars.forEach((bar) => {
        bar.classList.remove("active");
    })
}

function budgetbtn() {
    generalContent.classList.add("hide");
    aboutUsContent.classList.add("hide");
    ourAchievementsContent.classList.add("hide");
    eventsContent.classList.add("hide");
    internalAssessmentContent.classList.add("hide");

    budgetContent.classList.remove("hide");

    navLinksClose.classList.remove("active");
    hamburgerBars.forEach((bar) => {
        bar.classList.remove("active");
    })
}

const images = document.querySelectorAll(".image");
const popup = document.querySelector(".popup-image");
const popupImg = document.querySelector(".popup-image img");
const popupText = document.querySelector(".popup-image h3");
const popupCloseBtn = document.querySelector(".popup-image button");

images.forEach((image) => {
    image.onclick = () => {
        popup.classList.add("active");
        popupImg.src = image.src;
        if (image.clientWidth < 400) {
            popupImg.style.width = "100%";
            popupText.innerHTML = image.alt;
            popupImg.style.height = "auto";
        }
    }
})

popupCloseBtn.onclick = () => {
    popup.classList.remove("active");
}

