



let button = document.getElementById("change-color-button");
let text = document.getElementById("change-color-text");
let colors = ['blue', 'yellow', 'black', 'red', 'brown', 'orange'];

button.addEventListener("click", changeBackground);



function changeBackground() {
   var randomColor = colors[Math.floor(Math.random() * colors.length)]
    let container = document.getElementById('container');
    container.style.background = randomColor;
}
