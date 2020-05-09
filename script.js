//containery
const noteList = document.querySelector(".note-list");
const inputPlace = document.querySelector("#todo-input");
//
inputPlace.focus();
//przyciski
const addButton = document.querySelector("#add");
const undoButton = document.querySelector("#undo");
const doneFilterButton = document.querySelector("#done-filter");
const undoneFilterButton = document.querySelector("#undone-filter");
const allFilterButton = document.querySelector("#all-filter");
const todoFiltr = document.querySelector(".todo-filter");
//listenery
addButton.addEventListener("click", addTodo);
undoButton.addEventListener("click", undoTodo);
noteList.addEventListener("click", checkFunction);
todoFiltr.addEventListener("click", todoFiltrFunc);

//dodwanie wpisu
function addTodo(e) {
  e.preventDefault();
  if (inputPlace.value === "") {
    alert("Dodaj pozycje!");
  } else {
    const addDiv = document.createElement("div");
    addDiv.setAttribute("class", "listel-cont");
    addDiv.classList.add("active");
    console.log(addDiv);
    //
    const addText = document.createElement("li");
    addText.setAttribute("class", "todolist");
    addText.innerHTML = `<span>${inputPlace.value}</span>`;
    //
    const addDoneButton = document.createElement("button");
    addDoneButton.setAttribute("id", "list-done");
    addDoneButton.setAttribute("class", "listButton");
    addDoneButton.setAttribute("type", "submit");
    addDoneButton.innerHTML = '<i class="fas fa-check-square"></i>';
    //
    const addDeleteButton = document.createElement("button");
    addDeleteButton.setAttribute("id", "list-delete");
    addDeleteButton.setAttribute("type", "submit");
    addDeleteButton.innerHTML = '<i class="far fa-trash-alt"></i>';
    //
    addDiv.appendChild(addText);
    addDiv.appendChild(addDoneButton);
    addDiv.appendChild(addDeleteButton);
    noteList.appendChild(addDiv);
    //

    inputPlace.value = "";
    inputPlace.focus();
  }
}
//cofanie wpisu
function undoTodo(e) {
  e.preventDefault();
  noteList.removeChild(noteList.lastChild);
}
//usuwanie i dodawanie pozycji z gotowej listy
function checkFunction(e) {
  const target = e.target;
  const targetParent = target.parentElement;
  if (target.matches("#list-delete")) {
    targetParent.classList.add("fall");
    targetParent.addEventListener("transitionend", function () {
      targetParent.remove();
    });
  }
  if (target.matches("#list-done")) {
    targetParent.classList.add("list-grey");
    targetParent.classList.remove("active");
    targetParent.removeChild(targetParent.childNodes[1]); //usuwanie przycisku done
  }
}
//filtracja
function todoFiltrFunc(e) {
  const target = e.target;
  const divElContainer = document.querySelectorAll(".listel-cont");
  if (target.matches("#done-filter")) {
    divElContainer.forEach((c) => {
      c.classList.add("no-active");
      if (c.matches(".list-grey")) {
        c.classList.remove("no-active");
      }
    });
  }
  if (target.matches("#undone-filter")) {
    divElContainer.forEach((c) => {
      c.classList.add("no-active");
      if (c.matches(".active")) {
        c.classList.remove("no-active");
      }
    });
  }
  if (target.matches("#all-filter")) {
    divElContainer.forEach((c) => {
      c.classList.remove("no-active");
    });
  }
}
