const heading = document.querySelector(".heading");
heading.style.textAlign = "center";
const container = document.querySelector(".container");
container.style.display = "flex";
container.style.flexWrap = "wrap";

container.style.height = "90vh";
container.style.width = "100vw";
container.style.margin = "0";
container.style.padding = "0";
container.style.boxSizing = "border-box";

totalBoxes = 25;

const button = document.querySelector(".button");
let squareInput = "";
button.addEventListener("click", () => {
  do {
    squareInput = prompt("enter the number of squares less than 100");
  } while (isNaN(squareInput) || squareInput > 100);

  console.log(squareInput);
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  displayBoxes(squareInput);
});

function displayBoxes(givenBoxes) {
  const columns = Math.ceil(Math.sqrt(givenBoxes));
  const boxSize = 100 / columns;

  for (i = 0; i < givenBoxes; i++) {
    const div = document.createElement("div");
    div.classList.add("divs");
    div.style.border = "2px solid";
    div.style.display = "flex";
    div.style.boxSizing = "border-box";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.backgroundColor = "red";
    div.style.width = `${boxSize}vw`;
    div.style.height = `${boxSize}vh`;
    div.textContent = "Hello";
    div.addEventListener("mouseover", () => {
      let color = "#";
      const letters = "0123456789ABCDEF";
      for (i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      div.style.backgroundColor = color;
      let currentOpacity = parseFloat(div.style.opacity) || 0.2;
      if (currentOpacity < 1)
        div.style.opacity = (currentOpacity + 0.1).toFixed(2);
    });
    container.appendChild(div);
  }
}

displayBoxes(totalBoxes);
