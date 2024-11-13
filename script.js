const questions = [
  { question: "What color is the sky?", answers: ["Blue", "Green", "Red", "Yellow"], correct: 0 },
  { question: "How many legs does a dog have?", answers: ["2", "3", "4", "5"], correct: 2 },
  { question: "Which animal says 'Moo'?", answers: ["Dog", "Cat", "Cow", "Sheep"], correct: 2 },
  { question: "What comes after 3?", answers: ["5", "4", "6", "2"], correct: 1 },
  { question: "What shape is a soccer ball?", answers: ["Square", "Circle", "Triangle", "Rectangle"], correct: 1 },
  { question: "What is 2 + 2?", answers: ["3", "4", "5", "6"], correct: 1 },
  { question: "Which animal can fly?", answers: ["Cat", "Dog", "Bird", "Elephant"], correct: 2 },
  { question: "How many wheels does a car have?", answers: ["2", "4", "6", "8"], correct: 1 },
  { question: "What color are bananas?", answers: ["Red", "Yellow", "Green", "Blue"], correct: 1 },
  { question: "Which animal says 'Woof'?", answers: ["Bird", "Fish", "Dog", "Horse"], correct: 2 },
  { question: "What is the opposite of up?", answers: ["Down", "Left", "Right", "Under"], correct: 0 },
  { question: "Which fruit is red?", answers: ["Apple", "Banana", "Lemon", "Orange"], correct: 0 },
  { question: "What shape has three sides?", answers: ["Square", "Circle", "Triangle", "Rectangle"], correct: 2 },
  { question: "What is 5 - 2?", answers: ["3", "2", "1", "4"], correct: 0 },
  { question: "Which animal lives in the ocean?", answers: ["Dog", "Cat", "Dolphin", "Cow"], correct: 2 },
  { question: "How many days are in a week?", answers: ["5", "6", "7", "8"], correct: 2 },
  { question: "Which fruit is orange?", answers: ["Apple", "Grape", "Lemon", "Orange"], correct: 3 },
  { question: "How many letters are in the word 'cat'?", answers: ["2", "3", "4", "5"], correct: 1 },
  { question: "What is 1 + 1?", answers: ["1", "2", "3", "4"], correct: 1 },
  { question: "Which animal is big and gray?", answers: ["Cat", "Dog", "Elephant", "Fish"], correct: 2 }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const questionContainer = document.getElementById('question-container');
  const restartBtn = document.getElementById('restart-btn');
  restartBtn.style.visibility = 'hidden'; // Hide the restart button initially
  const question = questions[currentQuestionIndex];
  questionContainer.innerHTML = `<p>${question.question}</p>`;
  
  let buttonsHTML = '<div class="button-container">';
  question.answers.forEach((answer, index) => {
      buttonsHTML += `<button class="btn" onclick="checkAnswer(this, ${index})">${answer}</button>`;
  });
  buttonsHTML += '</div>';
  questionContainer.innerHTML += buttonsHTML;
}

function checkAnswer(button, selectedAnswer) {
  const correctAnswer = questions[currentQuestionIndex].correct;

  // Highlight the selected answer
  if (selectedAnswer === correctAnswer) {
    button.classList.add('correct'); // Correct answer green
    score += 5;
    document.getElementById('score').innerText = `Score: ${score}`;
  } else {
    button.classList.add('incorrect'); // Incorrect answer red
  }

  // Highlight the correct answer
  const buttons = document.querySelectorAll('.btn');
  buttons[correctAnswer].classList.add('correct');

  // Disable all buttons
  disableButtons();

  // Move to the next question after a delay
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showReward();
    }
  }, 1000);
}

function disableButtons() {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => btn.setAttribute('disabled', true));
}

function showReward() {
  const rewardContainer = document.getElementById('question-container');
  const restartBtn = document.getElementById('restart-btn');

  if (score >= 90) {
      rewardContainer.innerHTML = "🎉 Congratulations! You earned the 1st place! 🎉";
  } else if (score >= 70) {
      rewardContainer.innerHTML = "🎉 Great job! You earned the 2nd place! 🎉";
  } else if (score >= 50) {
      rewardContainer.innerHTML = "🎉 Good effort! You earned the 3rd place! 🎉";
  } else {
      rewardContainer.innerHTML = "Keep trying! You can do it!";
  }

  rewardContainer.innerHTML += `<div id="score-display">Final Score: ${score}</div>`;
  restartBtn.style.visibility = 'visible'; // Show the restart button
}

function restart() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById('score').innerText = `Score: ${score}`;
  loadQuestion();
}

window.onload = loadQuestion;







  
  