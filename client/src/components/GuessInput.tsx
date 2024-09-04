import React from 'react';

// Define prop types for the GuessInput component
interface GuessInputProps {
  guess: string;
  setGuess: React.Dispatch<React.SetStateAction<string>>;
  handleGuess: () => void;
}

const GuessInput: React.FC<GuessInputProps> = ({ guess, setGuess, handleGuess }) => {
  return (
    <div>
      <p>Guess a number between 1 and 100:</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        min="1"
        max="100"
      />
      <button onClick={handleGuess}>Submit Guess</button>
    </div>
  );
};

export default GuessInput;