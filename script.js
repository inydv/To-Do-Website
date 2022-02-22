const body = document.body;
const hiddenIcon = document.querySelectorAll(".icons");

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const listContainer = document.getElementById("list-container");

// DARK MODE & Light Mode

let darkMode = true;

hiddenIcon.forEach((icons) => {
  icons.addEventListener("click", () => {
    removeHiddenIcon();
    icons.classList.add("hidden-icon");
  });
});

function removeHiddenIcon() {
  hiddenIcon.forEach((icons) => {
    icons.classList.remove("hidden-icon");
  });

  if (darkMode === true) {
    changeModeToLight();
    darkMode = false;
  } else if (darkMode === false) {
    changeModeToDark();
    darkMode = true;
  }
}

function changeModeToLight() {
  body.style.backgroundColor = "White";
}

function changeModeToDark() {
  body.style.backgroundColor = "#1f1d1c";
}

// ADDING LIST

showTask();

btn.addEventListener("click", () => {
  let text = input.value;

  if (text.trim() != 0) {
    let LocalStorage = localStorage.getItem("arr");
    if (LocalStorage == null) {
      obj = [];
    } else {
      obj = JSON.parse(LocalStorage);
    }

    let send = {
      line: false,
      mytext: text,
    };

    obj.push(send);
    localStorage.setItem("arr", JSON.stringify(obj));

    input.value = "";
    showTask();
  } else {
    alert("Enter Text");
  }
});

function showTask() {
  let LocalStorage = localStorage.getItem("arr");
  if (LocalStorage == null) {
    obj = [];
  } else {
    obj = JSON.parse(LocalStorage);
  }

  listContainer.innerHTML = "";

  obj.forEach((item, index) => {
    let list = document.createElement("li");
    list.classList.add("content");
    if (item.line == true) {
      list.innerHTML = `<p class="context unactive">${item.mytext}</p>
        <i class="fa-regular fa-trash-can bin" onclick="deleteItem(${index})"></i>
        <i class="fa-solid fa-strikethrough striking" onclick="strikeItem(${index})"></i>`;
    } else {
      list.innerHTML = `<p class="context">${item.mytext}</p>
        <i class="fa-regular fa-trash-can bin" onclick="deleteItem(${index})"></i>
        <i class="fa-solid fa-strikethrough striking" onclick="strikeItem(${index})"></i>`;
    }
    listContainer.insertBefore(list, listContainer.childNodes[0]);
  });
}

// ADDING STRIKE

function strikeItem(index) {
  let LocalStorage = localStorage.getItem("arr");
  obj = JSON.parse(LocalStorage);

  const context = document.querySelectorAll(".context");
  let idx = context.length - (index + 1);

  if (obj[idx].line == false) {
    context[idx].classList.add("unactive");
    obj[idx].line = true;
    localStorage.setItem("arr", JSON.stringify(obj));
  } else {
    context[idx].classList.remove("unactive");
    obj[idx].line = false;
    localStorage.setItem("arr", JSON.stringify(obj));
  }
}

// Adding bin

function deleteItem(index) {
  let LocalStorage = localStorage.getItem("arr");
  obj = JSON.parse(LocalStorage);

  obj.splice(index, 1);
  localStorage.setItem("arr", JSON.stringify(obj));
  showTask();
}
