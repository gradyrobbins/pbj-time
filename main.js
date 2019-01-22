console.log("hello world main.js");

let container = document.getElementById("buttongoeshere")
// let pbjbutton = document.createElement("button");
// pbjbutton.textContent("button");
// pbjbutton.addEventListener("click", () => {console.log("Clicked pbj")});



let submitButton = document.createElement("button")
    submitButton.setAttribute("id", "saveInterestsButton")
    submitButton.textContent = "What time is it?"
    // 2. Attach event listener to button in form
    submitButton.addEventListener("click", () => {console.log("clicked")})


container.appendChild(submitButton);