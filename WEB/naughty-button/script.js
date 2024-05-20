const button = document.getElementById("button");
const wrapper = document.querySelector(".wrapper");

button.addEventListener("mousemove", function() {
  // Calculate new random position
  const maxWidth = 400 - button.offsetWidth;
  const maxHeight = 400 - button.offsetHeight;

  const newLeft = Math.floor(Math.random() * maxWidth);
  const newTop = Math.floor(Math.random() * maxHeight);

  // Update the button's position
  button.style.left = newLeft + "px";
  button.style.top = newTop + "px";
});

