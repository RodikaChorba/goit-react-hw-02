const Feedback = ({ feedback, goodFeedBackPart, totalFeedBack }) => {
  return (
    <div>
      <p>Goog: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedBack}</p>
      <p>PositiveFeedback: {goodFeedBackPart}</p>
    </div>
  );
};

export default Feedback;
