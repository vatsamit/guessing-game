const emojiDetails = [
    { description: "Smiling face with sunglasses", emoji: "😎" },
    { description: "Thumbs up", emoji: "👍" },
    { description: "Heart eyes", emoji: "😍" },
    { description: "Crying face", emoji: "😢" },
    { description: "Party popper", emoji: "🎉" },
    // Add more emoji descriptions here
  ];
  
    let currentEmojiIndex = 0;
    let score = 0;
    let seconds = 30;
    let timer;

    const timerElement = document.getElementById('timer');

    //
  
  
    //
    const guessInput = document.getElementById("guess-input");
    const resultElement = document.getElementById("result");
    const scoreElement = document.getElementById("score");

  //for displaying Emoji on screen // 
    function displayEmoji() {
      const descriptionElement = document.getElementById("description");
      descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
      timerElement.textContent = `Timer : ${seconds}s`;
    }
  
    function checkGuess() {
      const guess = guessInput.value.trim().toLowerCase();//trim is used to eliminate white Spaces or line
      //& .toLowerCase is used to convert capital lketter to smaller
      const correctEmoji = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();//same as above//
  
      if (guess === correctEmoji) {
        resultElement.textContent = "Correct!";
        score++;
      } else {
        resultElement.textContent = "Wrong!";
      }
      console.log(score);
      scoreElement.textContent = `Score: ${score}`;
      guessInput.value = "";
      guessInput.focus();
      nextEmoji();
    }
  
    function nextEmoji() {
      currentEmojiIndex++;
      setTimeout(()=>{ resultElement.textContent = "";},2000)
  
      if (currentEmojiIndex === emojiDetails.length) {
        currentEmojiIndex = 0;
        score=0;
      }
  
      displayEmoji();
    }
  
    document
      .getElementById("guess-input")
      .addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          checkGuess();
        }
      });
  
    document.addEventListener("DOMContentLoaded", () => {
      displayEmoji();
      startTimer();
    });

    function startTimer(){
       timer = setInterval(()=>{
          seconds--;
          timerElement.textContent = `Timer : ${seconds}s`;

          if(seconds<= 0 ){
            endGame();
          }
        },1000);
    }

    function endGame(){
        clearInterval(timer);
        guessInput.disabled = true ;
        timerElement.textContent = '';
    }
  