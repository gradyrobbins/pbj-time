console.log("hello world main.js");

let container = document.getElementById("display-container")
let pbjbutton = document.createElement("button");
// pbjbutton.textContent("pbj time");
pbjbutton.addEventListener("click", console.log("Clicked pbj"));

container.appendChild(pbjbutton);