// var timeEl = document.querySelector(".time");
// var mainEl = document.getElementById("main");

// var secondsLeft = 10;

// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }

//   }, 1000);
// }

// function sendMessage() {
//   timeEl.textContent = " ";

//   var imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }

// setTime();

var time = document.querySelector(".time");
var main = document.querySelector("#main");

var secondsLeft = 10;

function setTime()
{
  var timerInterval = setInterval(function()
  {
    secondsLeft--;
    time.textContent = secondsLeft + " seconds left till color explosion.";
    
    if(secondsLeft===0)
    {
      clearInterval(timerInterval);
      sendMessage();
    }
    //1000 is milliseconds
  }, 300);
}

function sendMessage()
{
    //we are setting the string above to empty so that we can have only the image 
    //creating img variable so we can create a image
    time.textContent = "";
    var img = document.createElement("img");
    img.setAttribute("src","./images/image_1.jpg");
    //we are setting the location of where the image will be
    //we are adding a child to the main class of the document.
    main.appendChild(img);
}
setTime();