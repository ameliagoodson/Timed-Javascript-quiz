# homework4

This application is a short, timed quiz. It was coded by manipulating the DOM to produce dynamic content, such as the content of the questions.

When the user clicks the start button, a new screen appears with the first question and a timer appears. Upon clicking on the answer to the question via the dynamic buttons, the user will be presented with the second question, and so on, until the third and final question is answered.

When the user clicks on the third answer, the will be presented with a new screen advising them to enter their initials, into the input field and submit. If the user finishes before the timer expires, the timer will be paused. If the user does not finish before the timer expires, they will be presented with a message saying 'time's up!'

Two things I was not able to code correctly are:
1. set the timer to subtract when the wrong answer is clicked. I could not figure out how to connect the two things. I thought I could access the incorrect or correct answers by typing questions.question.answers.correct = true, for example, but either that's wrong or something else is the code is wrong.
2. Add a message to display whether the answer was correct or not. I experienced the same problems as above.

