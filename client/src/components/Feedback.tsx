

// Define prop types for the Feedback component
interface FeedbackProps {
  feedback: string;
  attempts: number;
}

const Feedback: React.FC<FeedbackProps> = ({ feedback, attempts }) => {
  return (
    <div className="text-center mt-4">
      <p>{feedback}</p>
      <p className="'text-center p-8 text-cyan-900 text-base font-medium font-serif'">Attempts: {attempts}</p>
    </div>
  );
};

export default Feedback;