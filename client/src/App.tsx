<<<<<<< HEAD
import React, { useState } from 'react';
import GuessInput from './components/GuessInput';
import Feedback from './components/Feedback';
import './App.css'
=======
import  { useState } from 'react';
import GuessInput from './components/GuessInput'
import Feedback from './components/Feedback'
import Header from './components/Header';
import "./App.css";
import "./components/header.css"


>>>>>>> master

const App: React.FC = () => {
  // State variables with their types
  const [targetNumber, setTargetNumber] = useState<number>(generateRandomNumber());
  const [guess, setGuess] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [attempts, setAttempts] = useState<number>(0);

  // Function to generate a random number between 1 and 100
  function generateRandomNumber(): number {
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
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
     
    <>
    <div className='app'>
    <Header/>
    <div className={darkMode ? "dark-mode" : "light-mode"}>
   
      <GuessInput guess={guess} setGuess={setGuess} handleGuess={handleGuess} />
      <Feedback feedback={feedback} attempts={attempts} />
      <div className="switch-checkbox">
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider round"> </span>
        </label>
      </div>
    </div>
    </div>
  </>
    
  );
};

export default App;