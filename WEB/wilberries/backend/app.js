const siteBody = document.body;
const siteHeight = window.innerHeight;

siteBody.style.setProperty("--screen-height", siteHeight + "px");

const phone = document.querySelector(".phone");
setInterval(() => {
  const phoneHeight = phone.offsetHeight;
  siteBody.style.setProperty('--phone-height', phoneHeight + 'px');
  const phoneWidth = phone.offsetWidth;
  siteBody.style.setProperty('--phone-width', phoneWidth + 'px');
}, 1000);