const input = document.getElementById("input");
const add = document.getElementById("add");
const container = document.getElementById("tasks");

add.onclick = function () {
  if (input.value != "") {
    const li = document.createElement("li");
    const delDiv = document.createElement("div");
    const i = document.createElement("i");
    delDiv.classList.add("del");
    i.classList.add("fa", "fa-trash");
    li.classList.add("list");
    li.innerText = input.value;
    li.appendChild(delDiv);
    delDiv.appendChild(i);
    container.appendChild(li);

    const delBtns = document.querySelectorAll(".del");
    const lists = document.querySelectorAll(".list");
    lists.forEach((list) => {
      delBtns.forEach((del) => {
        del.onclick = () => {
          del.parentElement.classList.add("remove");
          setTimeout(() => {
            del.parentElement.remove();
            setData();
            countTasks();
          }, 1000);
        };
      });
    });
    setData();
    input.value = "";
  } else {
    alert("If the field is empty, repeat again");
  }
};

function setData() {
  localStorage.setItem("data", container.innerHTML);
}

function getData() {
  container.innerHTML = localStorage.getItem("data");
}

getData();
