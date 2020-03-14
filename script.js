//Select elements from html
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var timer = document.getElementById('timer');

var secondsLeft = 20;

let shuffledQuestions, currentQuestionIndex

//Timer countdown
function startTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
    if(secondsLeft === 0) { //when the timer reaches 0
        clearInterval(timerInterval); //stop the timer...
        timer.textContent = ("Time's up!") //...and display this text
        }
    else if (finishQuiz) {
      clearInterval(timerInterval) //if the quiz is finished, stop the timer
    }
    }, 1000); //timer counts down by 1 second
      }


//Event listeners for the buttons
startButton.addEventListener('click', startGame);
startButton.addEventListener('click', startTimer);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

//When starting the game, hide the start button and show the next button
//Randomise the questions
function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  answerButtonsElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

//function to create buttons showing question and answer text
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {               
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

//Display whether answer was correct or not (not working)
// function displayAnswer() { 
//   if (questions.question.answers.correct = true) {
//     var right = document.createElement('p');
//     right.textContent = ('Correct!');
//     questionContainerElement.appendChild(right);
//   }
//   else if (questions.question.answers.correct = false) {
//     var wrong = document.createElement('p')
//     wrong.textContent = ('Incorrect!');
//     questionContainerElement.appendChild(wrong);
// }
// displayAnswer()

//
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    finishQuiz()
  }
}

// remove all text buttons
//create new elements including input and finishing page
//Submit quiz function
function finishQuiz() {
  answerButtonsElement.classList.add('hide');
  questionElement.classList.add('hide');

  var allDone = document.createElement ('h1');
  allDone.textContent = ('All done!');
  questionContainerElement.appendChild(allDone);

  var form = document.getElementById('form');
  form.classList.remove ('hide');
  
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
//Questions
const questions = [
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answers: [
        {text: "<script href = xxx.js>", correct: false}, 
        {text: "<script src = 'xxx.js'>", correct: true}, 
        {text: "<script name = 'xxx.js'>", correct: false}]
  },
  {
    question: "How do you call a function named myFunction?",
    answers: [
        {text: "call myFunction()", correct: false}, 
        {text: "myFunction(push)", correct: false}, 
        {text: "myFunction()", correct: true}]
    },
  {
    question: "How can you add a comment in a JavaScript?",
    answers: [
        {text: "//This is a comment", correct: true}, 
        {text: "<!--This is a comment", correct: false}, 
        {text: "'This is a comment''", correct: false}
    ]
  }
]
