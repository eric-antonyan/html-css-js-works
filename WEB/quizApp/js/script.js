const app = document.querySelector("#root");
const popup = document.querySelector(".popup__backdrop");
const tasksList = document.createElement("ul");

const search = new URLSearchParams(window.location.search);

const maxSeconds = 60;

const questionId = search.get("question");

if (!questionId) {
  window.location.href = "?question=start";
}


const shuffleObjectKeys = (obj) => {
  const keys = Object.keys(obj);
  const shuffledKeys = keys.sort(() => Math.random() - 0.5);
  const shuffledObj = {};
  shuffledKeys.forEach((key, index) => {
    shuffledObj[key] = obj[keys[index]];
  });
  return shuffledObj;
}

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const tasks = [
  {
    task: "Ե՞րբ է Հայաստանը դարձել ՄԱԿ անդամ",
    answers: shuffleObjectKeys({
      matched: "1992թ․ մարտի 2",
      not_matched_1: "1991թ․ սեպտեմբերի 21",
      not_matched_2: "1995թ․ հուլիսի 5",
    }),
  },
  {
    task: "Ո՞րն է Հայաստանի ամենաբարձր կետը",
    answers: shuffleObjectKeys({
      matched: "Արագած լեռան գագաթը",
      not_matched_1: "Աժդահակ լեռան գագաթը",
      not_matched_2: "Իշխանասարի գագաթը",
    }),
  },
  {
    task: "Ո՞րն է Հայաստանի մեծությամբ 2-րդ լիճը",
    answers: shuffleObjectKeys({
      matched: "Արփի",
      not_matched_1: "Սև",
      not_matched_2: "Ակնա",
    }),
  },
];

const arr = shuffleArray(
  ["matched", "not_matched_1", "not_matched_2"]
);

// console.log(shuffleObjectKeys(tasks[questionId].answers));

const questions = [];

if (questionId === "start") {
  const headerText = document.createElement("h2");
  headerText.classList.add("header__text-start");
  headerText.textContent = "Բարև ձեզ, պատրա՞ստ եք խաղին";
  app.append(headerText);
  const agreeBtn = document.createElement("button");
  agreeBtn.classList.add("submit__question-button");
  agreeBtn.textContent = "Խաղը սկսել";
  agreeBtn.onclick = () => {
    window.location.href = "?question=0";
    localStorage.setItem("data", "[]");
  };

  app.append(agreeBtn);
} else if (questionId === "finish") {
  const headerText = document.createElement("h2");
  headerText.classList.add("header__text-start");
  headerText.textContent = "Շնորհակալություն խաղին մասնակցելու համար";
  app.append(headerText);
  const trueQuestionsList = document.createElement('ul');
  trueQuestionsList.classList.add('true__questions-list');
  const questions = localStorage.getItem("data");
  const questsToArr = JSON.parse(questions);
  const finishDescr = document.createElement('p');
  finishDescr.classList.add('finish__descr');
  finishDescr.innerHTML = `Դուք պատասխանել եք հետևյալ հարցերին <span class="count__questions">("${questsToArr.length}")</span>`;
  app.append(finishDescr);
  for (let i = 0; i < questsToArr.length; i++) {
    const trueQuestionsItem = document.createElement('li');
    trueQuestionsItem.classList.add('reset-list', 'true__questions-item');
    trueQuestionsItem.textContent = tasks[questsToArr[i]].task;
    trueQuestionsList.append(trueQuestionsItem);
  }
  app.append(trueQuestionsList);
  const restartBtn = document.createElement("button");
  restartBtn.classList.add("submit__question-button");
  restartBtn.textContent = "Սկսել նորից";
  restartBtn.onclick = () => {
    window.location.href = "?question=0";
    localStorage.setItem("data", "[]");
  };
  app.append(restartBtn);
} else {
  const listItem = document.createElement("li");
  listItem.classList.add("reset-list");

  const listText = document.createElement("h3");

  listText.textContent = tasks[questionId].task;

  listItem.append(listText);

  const buttons = document.createElement("div");
  buttons.classList.add("answers__list");

  const secondsElement = document.createElement("h3");
  secondsElement.classList.add("loader__seconds");
  let seconds = 0;

  const loader = document.createElement("div");

  loader.classList.add("loader");

  secondsElement.textContent = seconds;

  let loaderWidthDefault = 100 / maxSeconds;
  let loaderWidth = 0;
  const intervalSeconds = setInterval(function () {
    seconds++;
    secondsElement.textContent = seconds;
    loaderWidth = loaderWidth += loaderWidthDefault;
    loader.style.width = loaderWidth + "%";
    if (seconds == maxSeconds) {
      clearInterval(intervalSeconds);
      popup.classList.add("show");
      popup.querySelector(".popup__header-text").textContent = "Դուք պարտվեցիք";
      popup.querySelector(".user__status-image").src = "img/sad.gif";
      popup.querySelector(".true__answer").textContent =
        tasks[questionId]["answers"]["matched"];
      popup.querySelector(".submit__question-button").onclick = () => {
        popup.classList.remove("show");
        setTimeout(function () {
          window.location.href = `?question=${
            questionId >= tasks.length - 1
              ? "?question=end"
              : parseInt(questionId) + 1
          }`;
        }, 500);
      };
    }
  }, 1000);

  setTimeout(function () {}, 5000);

  app.append(secondsElement);
  app.append(loader);

  for (let j = 0; j < arr.length; j++) {
    const button = document.createElement("button");
    button.classList.add("answer__item");
    button.textContent = shuffleObjectKeys(tasks[questionId].answers)[arr[j]];
    button.setAttribute("answer", tasks[questionId]["answers"][arr[j]]);
    let trueQuestions = JSON.parse(localStorage.getItem("data"));
    button.onclick = function () {
      if (button.textContent === tasks[questionId]["answers"]["matched"]) {
        clearInterval(intervalSeconds);
        popup.classList.add("show");
        popup.querySelector(".popup__header-text").textContent =
          "Դուք հաղթեցիք";
        popup.querySelector(".user__status-image").src = "img/happy.gif";
        popup.querySelector(".true__answer").textContent =
          tasks[questionId]["answers"]["matched"];
        trueQuestions.push(questionId);
        localStorage.setItem("data", JSON.stringify(trueQuestions));
        popup.querySelector(".submit__question-button").onclick = () => {
          popup.classList.remove("show");
          setTimeout(function () {
            window.location.href = `?question=${
              questionId >= tasks.length - 1
                ? "finish"
                : parseInt(questionId) + 1
            }`;
          }, 500);
        };
      } else {
        clearInterval(intervalSeconds);
        popup.classList.add("show");
        popup.querySelector(".popup__header-text").textContent =
          "Դուք պարտվեցիք";
        popup.querySelector(".user__status-image").src = "img/sad.gif";
        popup.querySelector(".true__answer").textContent =
          tasks[questionId]["answers"]["matched"];
        popup.querySelector(".submit__question-button").onclick = () => {
          popup.classList.remove("show");
          setTimeout(function () {
            window.location.href = `?question=${
              questionId >= tasks.length - 1
                ? "finish"
                : parseInt(questionId) + 1
            }`;
          }, 500);
        };
      }
    };
    buttons.append(button);
  }

  listItem.append(buttons);

  tasksList.append(listItem);

  setInterval(function () {
    let getVertical = window.innerHeight;

    document.documentElement.style.setProperty("--app-h", getVertical + "px");
  });

  app.append(tasksList);
}
