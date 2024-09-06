

// Define prop types for the Feedback component
interface FeedbackProps {
  feedback: string;
  attempts: number;
}

const Feedback: React.FC<FeedbackProps> = ({ feedback, attempts }) => {
  return (
    <div>
      <p>{feedback}</p>
      <p className="'text-center  text-cyan-900 text-base font-medium font-serif'">Attempts: {attempts}</p>
    </div>
  );
};

export default Feedback;