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
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(btn => btn.setAttribute('disabled', true));
  
  if (selectedAnswer === correctAnswer) {
      button.classList.add('correct');
      score += 5;
      setTimeout(() => {
          currentQuestionIndex++;
          if (currentQuestionIndex < questions.length) {
              loadQuestion();
          } else {
              restart();
          }
      }, 1000);
  } else {
      button.classList.add('incorrect');
  }
  
  document.getElementById('score').innerText = `Score: ${score}`;
}

function restart() {
  currentQuestionIndex = 0;
  score = 0;
  loadQuestion();
}

window.onload = loadQuestion;

  
  