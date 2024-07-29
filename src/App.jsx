import { useEffect, useState } from "react";
import "./App.css";
import Description from "./components/Description";
import Options from "./components/Options";
import Feedback from "./components/Feedback";
import Notification from "./components/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedBack = feedback.good + feedback.neutral + feedback.bad;
  const goodFeedBackPart = Math.round((feedback.good / totalFeedBack) * 100);
  const updateFeedback = (type) => {
    if (type === "reset") setFeedback({ good: 0, neutral: 0, bad: 0 });
    else {
      setFeedback((prevFeedback) => ({
        ...prevFeedback,
        [type]: prevFeedback[type] + 1,
      }));
    }
  };
  useEffect(
    () => window.localStorage.setItem("feedback", JSON.stringify(feedback)),
    [feedback]
  );

  return (
    <>
      <Description />
      <Options onUpdate={updateFeedback} totalFeedBack={totalFeedBack} />
      {totalFeedBack ? (
        <Feedback
          feedback={feedback}
          goodFeedBackPart={goodFeedBackPart}
          totalFeedBack={totalFeedBack}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
