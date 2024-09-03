import React from 'react';

const Feedback = ({ feedback, attempts }) => {
  return (
    <div>
      <p>{feedback}</p>
      <p>Attempts: {attempts}</p>
    </div>
  );
};

export default Feedback;