'use strict';

// Refactoring = drying out the code by minimizing repeat code. Could create functions for all document.querySelectors('.---') for example see below. Also allows for quicker understanding for someone accessing code for first time ever or in awhile!!

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.number').textContent = '?';

let score = 20;
let highscore = 0;

// checking player input
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No player input
  if (!guess) {
    // this the condition for no input
    // 0 is falsy so no input is technically false - need to make true!
    displayMessage('No guess!');

    // When player guess is outside number range
  } else if (guess > 20 || guess <= 0) {
    displayMessage('Only guess between 1 and 20!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      // sets highscore value
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost:(');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// resetting game using Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20; // must add this or it doesnt -- from 20
  // resetting score and message and guess
  displayMessage('Start guessing!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  // resetting secretNumber
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';

  // resetting background color and box width
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
