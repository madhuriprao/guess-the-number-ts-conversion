import React from 'react';

// Define prop types for the GuessInput component
interface GuessInputProps {
  guess: string;
  setGuess: React.Dispatch<React.SetStateAction<string>>;
  handleGuess: () => void;
}

const GuessInput: React.FC<GuessInputProps> = ({ guess, setGuess, handleGuess }) => {
  return (
    <div className='text-center p-6 font-bold font-serif mt-8'>
      <p>Guess a number between 1 and 100:</p>
      <input className='border-solid border-2 border-teal-600 bg-teal-300 hover:bg-teal-100  rounded-lg mt-4  '
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        min="1"
        max="100"
      />
      <button className='p-3  text-base font-medium font-serif mt-4' onClick={handleGuess}>Submit Guess</button>
    </div>
  );
};

export default GuessInput;