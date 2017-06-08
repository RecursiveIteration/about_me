'use strict';

var i; //my index for for loops
var questionsAsked = 0; // keep track of how many questions I've asked the user.
var userScore = 0; // variable for keeping track of the users points
var user;

while (!user) {
  user = prompt('Hello, and welcome to my web page!  What is your name?');
  console.log('user: ' + user);
}

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

var guesses = []; // list of users answers to the questions
var currentGuess; // temp variable for storing users guesses while checking their validity
var isCorrect; // used to index 2D array <responses>
var confirmationMsg; // temporarily stores messages for alerts about right/wrong answers

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
    questionsAsked++;
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

alert('Here\'s a bonus question. I\'m thinking of a number between 1 and 20. See if you can guess what it is!');
questionsAsked++;

var myNumber = Math.floor(Math.random() * 20) + 1; // rand number between 1 and 20
var attemptsRemaining = 4;
var badAnswer = true; // cycles while loop until a valid answer switches it to <false>
var usersGuess; // stores users answer

console.log('My secret number is: ' + myNumber);

while(attemptsRemaining > 0) {
  while (badAnswer) {
    usersGuess = parseInt(prompt('Pick a number between 1 and 20.  You have ' + attemptsRemaining + ' attempt' + ((attemptsRemaining === 1) ? '' : 's') + ' remaining.'));
    if (usersGuess >= 1 && usersGuess <= 20) badAnswer = false;
  }
  console.log(usersGuess);
  // reset badAnswer in case we re-enter the nested while loop.
  badAnswer = true;
  attemptsRemaining--;
  if (usersGuess === myNumber) {
    alert('Congratulations!!! You guessed my number!');
    userScore++;
    break;
  } else if (usersGuess < myNumber) {
    alert('Sorry, your number was too low.');
  } else {
    alert('Sorry, your number was too high.');
  }
}

var cities = ['seattle', 'burien', 'lynnwood'];
usersGuess = null;
attemptsRemaining = 6;

alert('We\'re having so much fun!  Let\'s do one more.  I\'ve lived in a few cities in Washington state.  Let\'s see if you can guess one of them.');
questionsAsked++;

while(attemptsRemaining > 0) {
  while(!usersGuess) {
    usersGuess = prompt('Where in Washington do you think I have lived? You have ' + attemptsRemaining + ' guesses remaining.');
  }
  if (cities.includes(usersGuess.toLowerCase())) {
    alert('That\'s right! I have lived in ' + usersGuess + '. Great job!');
    userScore++;
    break;
  } else {
    alert('Sorry, ' + usersGuess + ' isn\'t a Washington state city that I\'ve lived in.');
    usersGuess = null;
  }
  attemptsRemaining--;
}

alert('Well ' + user + ', this has been a lot of fun.  You were able to get ' + userScore + ' out of ' + questionsAsked + ' answers correct. Thanks for playing along!');
