let squareBlock = document.getElementById("square");

// створення 5 рядків де розміщено 5 блоків з присвоєнням id="squareMiniColor", базові стилі розміщені в HTML.
function generateBlocks() {
  for (i = 0; i < 5; i++) {
    let div = document.createElement("div");
    div.setAttribute("id", "rowSquares");
    squareBlock.append(div);
    for (k = 0; k < 5; k++) {
      let divSmall = document.createElement("div");
      divSmall.setAttribute("id", "squareMiniColor");
      div.append(divSmall);
    }
  }
}

//функція яка повертає значеня кольору в HEX форматі.
function randomColor() {
    let hexValue = Math.floor(Math.random()*16777215).toString(16);
    return `#${hexValue}`
}

//функція знаходе всі 25 блоків і присвоює кожному рандомний колір
function generateBlocksInterval () {
    let allElemens = document.querySelectorAll("#squareMiniColor");
    for (i = 0; i < allElemens.length; i++) {
        allElemens[i].style.backgroundColor = randomColor();
    }
}

generateBlocks();
setInterval(generateBlocksInterval, 1000);

