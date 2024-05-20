function calculateDate() {
  getUserData();
}

function date() {
    getUserData();
}

function getUserData() {
  const r = document.getElementById("res");
  const dob = new Date(document.getElementById("date").value);
  const againMs = new Date() - dob;
  const ageDate = new Date(againMs);
  const age = ageDate.getUTCFullYear() - 1970;
  const month = ageDate.getUTCMonth();
  const day = ageDate.getDate() - 1;
  r.innerHTML = `<span class="arrow">You're</span> year <span class="arrow">=></span> ${age} <br> Month <span class="arrow">=></span> ${month} <br> Day <span class="arrow">=></span> ${day} <span class="arrow">old.</span>`;
}
