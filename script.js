function startGame() {
    window.location.href = "category2.html";
  }
  
  function goToHighScores() {
    window.location.href = "highscores.html";
  }
  
  function showAbout() {
    alert("Trivia That'll Trip Ya is a fun, fast-paced trivia game to test your smarts. Choose categories, pick a timer, and beat your own high score!");
  }

  function handleAnswerSelection(button, isCorrect) {   //takes in button user clicked on + if button is correct
    const allButtons = document.querySelectorAll(".option"); //stores all the buttons on the page in the NodeList allButtons
    allButtons.forEach(btn => btn.disabled = true); //disables all buttons right after one's clicked so can’t click multiple buttons
  
    if (isCorrect) {
      button.classList.add("correct");  //adds the class correct to style the button green (defined in styles.css)
    } else {
      button.classList.add("incorrect");  //adds the class incorrect to style the button red (defined in styles.css)
    }
  
    //setting next question after 1 second
    setTimeout(() => {      //by default waits for a second timeout before moving on to the next quesiton, showing button animation
      allButtons.forEach(btn => {
        btn.classList.remove("correct", "incorrect");   //removes any green or red button styling to move on
        btn.disabled = false;   //enables buttons to be used again
      });
  
      loadNextQuestion(); //LOADS NEXT Q!!
    }, 1000);  //this is in milliseconds!! so its ending the timeout after one second. (1 sec = 1000 ms)
  }
  
