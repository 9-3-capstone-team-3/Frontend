export default function QuizBox(
    {
      currentQuestion,
        isAnswered,
        selectedAnswer,
        answers,
        handleAnswerSubmission,
        feedback,
        handleNextQuestion,
        progressBarWidth,
        isQuizCompleted,
        correctAnswersCount,
        questions,
        startNextQuiz
      }
) {

    console.log("width:", progressBarWidth);
    return (
        <div className="quiz-container" >
          <h1>{currentQuestion?.prompt}</h1>
          
          {/* Render multiple choice questions */}
          <div className="quiz-container__answers">
            {answers.map((answer) => (
              <button
                key={answer.answer_id}
                className="quiz-button"
                disabled={isAnswered}
                onClick={() => handleAnswerSubmission(answer)}
              >
                {answer.answer_text}
              </button>
            ))}
          </div>
          {feedback && <div className="feedback">{feedback}</div>}
    
          {isAnswered && (
            <button className="quiz-button" onClick={handleNextQuestion}>
              Next Question
            </button>
          )}
    
          
    
          <div className="progress-bar">
            <div className="progress-bar__fill" style={{ width: progressBarWidth }}></div>
          </div>
    
          {isQuizCompleted && (
            <div className="result-box">
              <p>You answered {correctAnswersCount} out of {questions.length} questions correctly!</p>
              <button className="quiz-button" onClick={startNextQuiz}>
                Move to Next Quiz
              </button>
            </div>
          )}
        </div>
      );
    }
    
    
    
    
    
    

