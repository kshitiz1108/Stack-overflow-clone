import React from "react";
import Questions from "./Questions";
const QuestionList = ({ questions }) => {
  return (
    <>
      {questions.map((question) => (
        <Questions question={question} key={question._id} />
      ))}
    </>
  );
};

export default QuestionList;
