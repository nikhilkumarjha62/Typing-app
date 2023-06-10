
//   const alphabet1 = "asdfjkl; "
//   let sent = "";
//   for(var j = 0; j<=55;j++){
//     const i = Math.floor(Math.random() * 8)
//     sent += alphabet1[i];
// }function checkInput() {
    
//     var userInput = document.getElementById("input1").value;

//     // Compare the user input with the expected text
//     for(var j = 0; j<=55;j++){
//     if (userInput === sent) {
//       alert("Text matched!");
//     } else {
//       alert("Text does not match.");
//     }
// }
//   }
  
// document.getElementById("input1").innerHTML = sent;

// checkInput()

document.addEventListener("DOMContentLoaded", () => {
    const userInput = document.getElementById("userInput");
    const nextKeys = document.getElementById("nextKeys");
    const timer = document.getElementById("timer");
    const keyCount = document.getElementById("keyCount");
    const accuracy = document.getElementById("accuracy");
  
    let keysPressed = 0;
    let correctKeys = 0;
    let remainingTime = 300;
  
    userInput.addEventListener("input", handleInputChange);
  
    function handleInputChange() {
      const input = userInput.value;
      const currentKey = nextKeys.innerText.charAt(11);
      const isCorrect = input === currentKey;
  
      if (isCorrect) {
        keysPressed++;
        correctKeys++;
        nextKeys.innerText = "Next Keys: " + generateNextKeys();
      } else {
        keysPressed++;
      }
  
      const accuracyPercentage = ((correctKeys / keysPressed) * 100).toFixed(2);
      timer.innerText = "Remaining Time: " + remainingTime + " seconds";
      keyCount.innerText = "Keys Pressed: " + keysPressed;
      accuracy.innerText = "Accuracy: " + accuracyPercentage + "%";
  
      userInput.value = "";
    }
  
    function generateNextKeys() {
      const keys = "asdfjkl;";
      let nextKeys = "";
      for (let i = 0; i < 1; i++) {
        const randomIndex = Math.floor(Math.random() * keys.length);
        nextKeys += keys[randomIndex];
      }
      return nextKeys;
    }
  
    function countdownTimer() {
      if (remainingTime > 0) {
        setTimeout(() => {
          remainingTime--;
          timer.innerText = "Remaining Time: " + remainingTime + " seconds";
          countdownTimer();
        }, 1000);
      }
    }
  
    countdownTimer();
  });
  