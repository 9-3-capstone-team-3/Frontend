import React from "react";

const QUIZ_SUMMARY = {
    "1": {
      title: "Git Basics",
      description: "Git, used by over 90% of developers, enables precise code tracking and collaboration, while GitHub remotely stores code; mastering Git is essential for software engineers, offering a safety net and insights into code versions.",
    },
    "2": {
      title: "Setting up Git",
      description: "Learn how to set up your computer's terminal with git.",
    },
    "3": {
        title: "Innitialize Git",
        description: "Learn how to start using git in your projects and with open Source",
      },
    "4": {
    title: "Git commands,branches and merges",
    description: "Learn how to utilize git commands to create branches and merges",
    },
    // ... add more quizzes as needed
  };

  const QuizSummary = ({ quizId }) => {
    const quizSummary = QUIZ_SUMMARY[quizId] || {};
  
    return (
      <div className="box medium">
        <h1>{quizSummary.title || 'Default Title'}</h1>
        <p className='paragraph-wrapper'>
          {quizSummary.description || 'Default Description'}
        </p>
      </div>
    );
  }
  
  export default QuizSummary;