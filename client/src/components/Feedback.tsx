import React from 'react';

// Define prop types for the Feedback component
interface FeedbackProps {
  feedback: string;
  attempts: number;
}

const Feedback: React.FC<FeedbackProps> = ({ feedback, attempts }) => {
  return (
    <div>
      <p>{feedback}</p>
      <p>Attempts: {attempts}</p>
    </div>
  );
};

export default Feedback;