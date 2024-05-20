const targetDiv1 = document.getElementById("targ1");
const targetDiv2 = document.getElementById("targ2");

function myFunctionTheOne() {
    targetDiv1.scrollIntoView({
        block: "start",
        behavior: "smooth",
        inline: "start",
    })
}

function myFunctionTheTwo() {
    targetDiv2.scrollIntoView({
        block: "start",
        behavior: "smooth",
        inline: "start",
    })
}

function myFunction500px() {
    scrollTo({
        top: 500,
        behavior: "smooth",
    })
}