
      let randomNumber = Math.floor(Math.random() * 50); // 25
      let gameOn = true;
      let message = "Pick a number between 0 and 50 ya manyak!";
      while (gameOn) {
        let userGuess = prompt(message); // 12  //46 //25
        if (userGuess == randomNumber) {
          gameOn = false;
          message = `You got it! the number was ${userGuess}`;
        } else if (userGuess < randomNumber) {
          message = "Too low. Try again";
        } else {
          message = "Too high. Try again";
        }
      }
      alert(message);
    