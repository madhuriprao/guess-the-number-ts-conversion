import React, { useState } from 'react';
import GuessInput from './components/GuessInput'
import Feedback from './components/Feedback'
import "./App.css";

const App = () => {
  // State variables
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);

  // Function to generate a random number between 1 and 100
  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  // Function to handle guess submission
  const handleGuess = () => {
    const numGuess = parseInt(guess, 10);

    if (isNaN(numGuess)) {
      setFeedback('Please enter a valid number.');
      return;
    }

    setAttempts(attempts + 1);

    if (numGuess < targetNumber) {
      setFeedback('Too low! Try again.');
    } else if (numGuess > targetNumber) {
      setFeedback('Too high! Try again.');
    } else {
      setFeedback(`Congratulations! You guessed the number in ${attempts + 1} attempts.`);
      // Optionally reset the game
      setTargetNumber(generateRandomNumber());
      setAttempts(0);
    }

    // Clear the guess input
    setGuess('');
  };

  return (
    <div className="App">
      <h1>Guess the Number Game</h1>
      <GuessInput guess={guess} setGuess={setGuess} handleGuess={handleGuess} />
      <Feedback feedback={feedback} attempts={attempts} />
    </div>
  );
};

export default App;