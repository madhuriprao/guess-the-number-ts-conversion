import React from 'react';

const Feedback = ({ feedback, attempts }) => {
  return (
    <div>
      <p>{feedback}</p>
      <p className='text-center  text-cyan-900 text-base font-medium font-serif'>Attempts: {attempts}</p>
    </div>
  );
};

export default Feedback;