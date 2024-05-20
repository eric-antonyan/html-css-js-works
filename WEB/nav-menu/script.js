const container = document.body;

let innerScreenHeight;
let innerScreenWidth;

setInterval(() => {
  innerScreenHeight = window.innerHeight + "px";
  innerScreenWidth = window.innerWidth + "px";
  container.style.setProperty("--screen-h", innerScreenHeight);
  container.style.setProperty("--screen-w", innerScreenWidth);
}, 1);
const pagesContainer = document.querySelector(".pages");
const page = document.querySelectorAll(".page");

const navItems = document.querySelectorAll(".nav-item");
const colorTheme = document.getElementById("color-theme");

const navigationBar = document.querySelector(".navigation-bar");
const titleBar = document.querySelectorAll(".title-bar");

function loading(type) {
  const loader = document.querySelector(".loading");

  if (type == "open") {
    return loader.classList.remove("closed");
  } else if (type == "close") {
    return loader.classList.add("closed");
  }
}

const msg = (text) => {
  const mtp = document.querySelector(".mini-time-popup");
  mtp.classList.add("show");
  mtp.innerHTML = text;

  setTimeout(() => {
    mtp.classList.remove("show");

    mtp.innerHTML = "";
  }, 3000);
};

const loadingCirclesCount = document.querySelector("#loadingCirclesCount");

setInterval(() => {
  loadingCirclesCount.innerHTML += ".";
  if (loadingCirclesCount.innerHTML === "....") {
    loadingCirclesCount.innerHTML = "";
  }
}, 1000 / 3);

setTimeout(() => {
  loading("close");
}, 3000);

setTimeout(() => {
  navigationBar.classList.add("run");
  for (let i = 0; i < titleBar.length; i++) {
    titleBar[i].classList.add("run");
  }
  pagesContainer.classList.add("run");
}, 3000);

for (let i = 0; i < navItems.length; i++) {
  let key = navItems[i].getAttribute("key");
  navItems[i].onclick = function (e) {
    if (key === "1") {
      page[0].style.width = "var(--screen-w)";

      page[1].style.width = "0%";

      page[2].style.width = "0%";

      page[3].style.width = "0%";

      pagesContainer.style.left = "0%";
      colorTheme.setAttribute("content", "#ff8800");
    } else if (key === "2") {
      page[0].style.width = "0%";

      page[1].style.width = "var(--screen-w)";

      page[2].style.width = "0%";

      page[3].style.width = "0%";

      pagesContainer.style.left = "0%";
      colorTheme.setAttribute("content", "#ff00ff");
    } else if (key === "3") {
      page[0].style.width = "0%";

      page[1].style.width = "0%";

      page[2].style.width = "var(--screen-w)";

      page[3].style.width = "0%";

      pagesContainer.style.left = "0%";
      colorTheme.setAttribute("content", "#ff4800");
    } else if (key === "4") {
      page[0].style.width = "0%";

      page[1].style.width = "0%";

      page[2].style.width = "0%";

      page[3].style.width = "var(--screen-w)";

      pagesContainer.style.left = "0%";
      colorTheme.setAttribute("content", "#0064ff");
    }
  };
}

if (window.location.href === "#home") {
  page[0].style.width = "var(--screen-w)";
  page[1].style.width = "0%";
  page[2].style.width = "0%";
  page[3].style.width = "0%";

  pagesContainer.style.right = "0%";
  colorTheme.setAttribute("content", "#0064ff");
} else if (window.location.href === "#profile") {
  page[0].style.width = "0%";
  page[1].style.width = "var(--screen-w)";
  page[2].style.width = "0%";
  page[3].style.width = "0%";

  pagesContainer.style.right = "0%";
  colorTheme.setAttribute("content", "#0064ff");
} else if (window.location.href === "#messages") {
  page[0].style.width = "0%";
  page[1].style.width = "0%";
  page[2].style.width = "var(--screen-w)";
  page[3].style.width = "0%";

  pagesContainer.style.right = "0%";
  colorTheme.setAttribute("content", "#0064ff");
} else if (window.location.href === "#settings") {
  page[0].style.width = "0%";
  page[1].style.width = "0%";
  page[2].style.width = "0%";
  page[3].style.width = "var(--screen-w)";

  pagesContainer.style.right = "0%";
  colorTheme.setAttribute("content", "#0064ff");
}

const like = document.querySelector(".like");

like.onclick = function () {
  this.style.scale = "1.25";
  this.classList.remove("far");
  this.classList.add("fas");
  setTimeout(() => {
    this.style.scale = "1";
  }, 100);
  like.classList.add("unlike");
};

const unlike = document.querySelector(".unlike");

const addpostBtn = document.querySelector(".add-post");
const addPostPopup = document.querySelector(".add-post-popup");

addpostBtn.onclick = function () {
  addPostPopup.classList.add("active");
  setTimeout(() => {
    addPostPopup.querySelector(".content").classList.add("active");
  }, 500);
};

const closeAddPostPopup = document.querySelector(".close-add-post-popup");

closeAddPostPopup.onclick = function () {
  addPostPopup.querySelector(".content").classList.remove("active");
  setTimeout(() => {
    addPostPopup.classList.remove("active");
  }, 500);
};

function chooseFileAndGet() {
  const file = document.querySelector(".get-file");
  const previewImage = document.querySelector('.cover-add-photo-image');
  file.click();
  file.onchange = function () {
    const tFile = file.files[0];

    if (tFile) {
      const reader = new FileReader();

      reader.addEventListener("load", function () {
        previewImage.src = reader.result;
      });

      reader.readAsDataURL(tFile);
    }
  };
}
