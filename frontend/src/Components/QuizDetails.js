import React from "react";

const QUIZ_DETAILS = {
    "1": {
      title: "Reading Resource",
      description: "Git is a Version Control System. Git allows you to track changes you make in your code. You can swap back and forth between different versions of your code. You can UNDO changes you made to your code. Git is great for teams because it allows team members to work on the same project or even the same file. Git versus GitHub. Git is a version control system that you download to your local computer and allow it to track every version of your code that you want saved..WHILE... GitHub is just a website that allows developers to store their projects also known as “Repositories”, remotely, to share with other developers. Allowing other developers to have access to their code/project/repository. GitHub ONLY STORES CODE. Why should we learn how to use Git?Since Git tracks all the changes/versions you make in your coding project, it is a lifesaving tool to use in case you break your code and need to get back to a version of your code that was working and not broke.Git will show you all the changes you have made.Git will show you exactly what you changed in each version of your code. Git also allows you to change back to previous version of your code with the use of one single command.Git is used by over 90% of developers today. Git is the dominant choice for version control for developers today. What this means for future developers...You should know git if you want to get a job as a software engineer!!!!",
    },
    "2": {
      title: "Reading Resource",
      description: "Setting up git reading material goes here!",
    },
    "3": {
        title: "Reading Resource",
        description: "Initializing git reading material goes here!",
      },
    "4": {
    title: "Reading Resource",
    description: "Git Commands Branches and Merges reading material goes here!",
    },
    // ... add more quizzes as needed
  };

  const QuizDetails = ({ quizId }) => {
    const quizDetail = QUIZ_DETAILS[quizId] || {};
  
    return (
      <div className="box medium">
        <h1>{quizDetail.title || 'Default Title'}</h1>
        <p className='paragraph-wrapper'>
          {quizDetail.description || 'Default Description'}
        </p>
      </div>
    );
  }
  
  export default QuizDetails;