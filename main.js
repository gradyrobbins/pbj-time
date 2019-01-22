console.log("hello world main.js");

let container = document.getElementById("buttongoeshere")
let display = document.getElementById("display")



let submitButton = document.createElement("button")
    submitButton.setAttribute("id", "saveInterestsButton")
    submitButton.textContent = "What time is it?"
    // 2. Attach event listener to button in form
    submitButton.addEventListener("click", () => {
        dateTimeBuilder()
    })


container.appendChild(submitButton);


const dateTimeBuilder = () => {
    const today = new Date();
  const day = today.getDay();
  const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log(`Today is : ${daylist[day]}.`);
  let hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  let prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ')
  {
  if (minute===0 && second===0)
  {
  hour=12;
  prepand=' Noon';
  }
  else
  {
  hour=12;
  prepand=' PM';
  }
  }
  if (hour===0 && prepand===' AM ')
  {
  if (minute===0 && second===0)
  {
  hour=12;
  prepand=' Midnight';
  }
  else
  {
  hour=12;
  prepand=' AM';
  }
  }

  
display.innerHTML = (`Today is : ${daylist[day]}. <br/> Current Time : ${hour}${prepand} : ${minute} : ${second}`);



}