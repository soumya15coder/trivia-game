function startGame() {
    window.location.href = "category2.html";
  }
  
  function goToHighScores() {
    window.location.href = "highscores.html";
  }
  
  function showAbout() {
    alert("Trivia That'll Trip Ya is a fun, fast-paced trivia game to test your smarts. Choose categories, pick a timer, and beat your own high score!");
  }

  function handleAnswerSelection(button, isCorrect) {
    const allButtons = document.querySelectorAll(".option");
    allButtons.forEach(btn => btn.disabled = true);
  
    if (isCorrect) {
      button.classList.add("correct");
    } else {
      button.classList.add("incorrect");
    }
  
    setTimeout(() => {
      allButtons.forEach(btn => {
        btn.classList.remove("correct", "incorrect");
        btn.disabled = false;
      });
  
      loadNextQuestion(); 
    }, 1000);
  }
  
