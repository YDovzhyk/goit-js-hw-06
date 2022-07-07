function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const userInputNumber = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const newBoxes = document.querySelector("#boxes");

newBoxes.style.display = "flex";
newBoxes.style.flexWrap = "wrap";
newBoxes.style.padding = "30px";
newBoxes.style.alignItems = "top";

function createBoxes(amount) {
  amount = Number(userInputNumber.value);
  let boxSize = 30;

  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    
    boxSize += 10;
    newBox.style.width = boxSize + "px";
    newBox.style.height = boxSize + "px";
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.marginRight = "10px";

    newBoxes.append(newBox);
  }
}

function destroyBoxes() {
  newBoxes.innerHTML = "";
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);