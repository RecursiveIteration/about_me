'use strict';

var i; //my index for for loops

var user = prompt('Hello, and welcome to my web page!  What is your name?');
console.log('user: ' + user);

// variable to store users score
var userScore = 0;
console.log('userScore initialized to: ' + userScore);

alert('Welcome ' + user + '! Let\'s play a quick game. I\'m going to ask you a few questions about myself, and you\'ll score a point for each answer you get correct! Please answer each question with a simple yes/no or y/n.');

// List containing all the questions to be asked to the user.
var questions = [
  'Was I born in Hawaii?',
  'Was my first pet a dog?',
  'Do I prefer pie over cake?',
  'Is running my prefered type of excercise?',
  'Is Memento one of my favorite movies?'
];

console.log('Current questions:');
for (i = 0; i < questions.length; i++) {
  console.log('  ' + questions[i]);
}

// List containing the correct answers 'yes' = true and 'no' = false.
var answers = ['yes', 'no', 'no', 'yes', 'yes'];

console.log('Answers:\n  ' + answers);

// List containing the users responses to the questions.
var responses = [
  [ 'That\'s incorrect. I was born in Honolulu.',
    'Not so! My first pet was a cat.',
    'Pie is great and all, but I actually prefer cake.',
    'Sorry, that\'s not correct. I definitely prefer a nice run when I\'m looking for a workout.',
    'Nope! Mememto is an incredible movie and definitely towards the top of my list!' ],
  [ 'That\'s right! I was born on Oahu.',
    'You are correct! My first pet was a siamese cat.',
    'Most definitely not! My favorite type of cake is rum cake!',
    'That\'s right! There\'s nothing like a nice long run on a clear day!',
    'Yep! Memento is up near the top of my list.' ]
];

console.log('Responses to wrong answers:');
for (i = 0; i < responses[0].length; i++) {
  console.log('  ' + responses[0][i]);
}

console.log('Respones to right answers:');
for (i = 0; i < responses[1].length; i++) {
  console.log('  ' + responses[1][i]);
}

var guesses = [];
var currentGuess;
var isCorrect;
var confirmationMsg;

for (i = 0; i < questions.length; i++) {
  while(!guesses[i]) {
    currentGuess = null;
    currentGuess = prompt(questions[i]);
    if (!currentGuess) {
      alert('I really need you to answer these questions!');
    } else {
      currentGuess = currentGuess.toLowerCase();
    }
    if (currentGuess === 'yes' || currentGuess === 'y') {
      guesses.push('yes');
    } else if (currentGuess === 'no' || currentGuess === 'n') {
      guesses.push('no');
    } else {
      alert('Please respond with a \'yes\' or a \'no\'.');
    }
  }

  if (guesses[i] === answers[i]) {
    userScore++;
    isCorrect = 1;
  } else isCorrect = 0;

  confirmationMsg = responses[isCorrect][i] + '\n\nYour current score is: ' + userScore + '.';
  alert(confirmationMsg);
}

if (userScore === questions.length) {
  alert('Great job! You got all he questions right. You must know me pretty well.');
} else if ((userScore / questions.length) > 0.5) {
  alert('Not bad, you got ' + userScore + ' out of ' + questions.length + ' answers correct. You know me pretty well!');
} else if (userScore > 0) {
  alert('You only got ' + userScore + 'answers right. Take some time to surf my web page and you\'ll discover more about me!');
} else {
  alert('You didn\'t get any answers correct. No worries, we\'ll have time to get to know each other!');
}

alert('Here\'s a bonus question. I\'m thinking of a number between 1 and 100. See if you can guess what it is!');

var bonusQuestionIndex = questions.length;
var myNumber = Math.floor(Math.random() * 100) + 1;
var attemptsRemaining = 4;

console.log('My secret number is: ' + myNumber);

while(attemptsRemaining > 0) {
  guesses[bonusQuestionIndex] = prompt('Try to guess my number, you have ');
  attemptsRemaining++;
}

// // question 1, correct answer: yes
// var answer1 = prompt('Was I born in Hawaii?').toLowerCase();
// console.log('Response to question 1: ' + answer1);
// if(answer1 === 'yes' || answer1 === 'y') {
//   userScore++;
//   alert('You answered yes, which is correct!  That\'s one point for you. Your current score is ' + userScore + '.');
// } else {
//   alert('Sorry, the correct answer was \'yes\', I was born in Honolulu. Your current score is ' + userScore + '.');
// }
//
// // question 2, correct answer: no
// var answer2 = prompt('Was my first pet a dog?').toLowerCase();
// console.log('Response to question 2: ' + answer2);
// if(answer2 === 'no' || answer2 === 'n') {
//   userScore++;
//   alert('Correct!  My first pet was a siamese cat. Your current score is ' + userScore + '.');
// } else {
//   alert('Sorry, that is incorrect.  My first pet was a cat. Your current score is ' + userScore + '.');
// }
//
// // question 3, correct answer: no
// var answer3 = prompt('Do I prefer pie over cake?').toLowerCase();
// console.log('Response to question 3: ' + answer3);
// if(answer3 === 'no' || answer3 === 'n') {
//   userScore++;
//   alert('Correct, I usually prefer cake to pie.  My favorite type is rum cake! Your current score is ' + userScore + '.');
// } else {
//   alert('I\'m sorry, that is incorrect.  I generally prefer to eat cake.  Your current score is ' + userScore + '.');
// }
//
// // question 4, correct answer = yes
// var answer4 = prompt('Is running my prefered type of excercise?').toLowerCase();
// console.log('Response to question 4: ' + answer4);
// if(answer4 === 'yes' || answer4 === 'y') {
//   userScore++;
//   alert('Correct! I also enjoy hiking and occassionally swimming, but I usually prefer to go for a nice run outdoors.');
// } else {
//   alert('Sorry, that is not correct. I like to go for a run when I feel I need some excercise. Your current score is ' + userScore + '.');
// }
//
// // question 5, correct answer = yes
// var answer5 = prompt('Is "Momento" one of my favorite movies?').toLowerCase();
// console.log('Response to question 5: ' + answer5);
// if(answer5 === 'yes' || answer5 === 'y') {
//   userScore++;
//   alert('That\'s right! A few of my other favorites are "The Princess Bride", "The Matrix", and "Star Trek IV, the Voyage Home." Your current score is ' + userScore + '.');
// } else {
//   alert('I\'m sorry, that is incorrect. I think Momemento was an amazing movie! Your current score is ' + userScore + '.');
// }
//
// console.log('Final score: ' + userScore);
// alert('Thanks for taking my quiz!  You achieved a total score of ' + userScore + '.');
