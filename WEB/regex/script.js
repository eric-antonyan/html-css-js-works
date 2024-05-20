let regex = /^[\+]?374\d{8}$/;
const input = document.querySelector("input");

input.oninput = function() {
    if (regex.test(input.value)) {
        alert(input.value);
    } else {
        console.log("err");
    }
}