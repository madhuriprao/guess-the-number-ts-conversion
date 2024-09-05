import React from 'react';

const GuessInput = ({ guess, setGuess, handleGuess }) => {
  return (
    <div className='text-center'>
      <p className='p-5  text-cyan-900 font-medium font-serif text-lg '>Guess a number between 1 and 100:</p>
      <input className='border-solid border-2 border-teal-600 bg-teal-300 hover:bg-teal-100 rounded-lg '
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        min="1"
        max="100"
      />
      <button className='p-3 text-cyan-900 text-base font-medium font-serif' onClick={handleGuess}>Submit Guess</button>
    </div>
  );
};

export default GuessInput;