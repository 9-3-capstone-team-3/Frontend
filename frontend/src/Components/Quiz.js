import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "./Youtube";
import "./Quiz.css"


const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3003";

async function getQuizDetails(quiz_id, setQuestions) {
  try {
    const response = await axios.get(`${apiUrl}/quiz/2/questions`, {
      withCredentials: true,
    });
    console.log(response);

    if (response.status === 200) {
      setQuestions(response.data);
    } else {
      console.error("Failed to fetch quiz details.");
    }
  } catch (err) {
    console.error("Error:", err);
  }
}



// const baseURL = "https://www.youtube.com/watch?v=";

async function getQuizVideoUrl(quiz_id, setVideoId) {
    try {
        const response = await axios.get(`${apiUrl}/quiz/2`, {
            withCredentials: true,
        });
        
        if (quiz_id) {
            getQuizVideoUrl(quiz_id, setVideoId);
        } else {
            console.error("Quiz ID is undefined!");
        }
      if (response.status === 200 && response.data.video_id) {
        setVideoId(response.data.video_id);
      } else {
        console.error("Failed to fetch video URL.");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  }
  


function Quiz(props) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [videoUrl, setVideoURL] = useState("");
  const [feedback, setFeedback] = useState("");
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [hasWrongAnswer, setHasWrongAnswer] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(props.quiz_id);




  useEffect(() => {
    getQuizDetails(currentQuiz, setQuestions).then(() => {
        if (questions.length > 0) {
            setCurrentIndex(0);
        }
    });
}, [currentQuiz, questions.length]);

useEffect(() => {
    getQuizVideoUrl(currentQuiz, setVideoURL);
}, [currentQuiz]);

  useEffect(() => {
    async function fetchAnswers() {
      if (currentIndex < 0 || currentIndex >= questions.length) return;

      try {
        const response = await axios.get(
          `${apiUrl}/questions/${questions[currentIndex].question_id}/answers`
        );
        setAnswers(response.data);
      } catch (error) {
        console.error("Error fetching answers:", error);
      }
    }
    fetchAnswers();
  }, [questions, currentIndex]);

  const handleAnswerSubmission = (answer) => {
    setSelectedAnswer(answer);
  
    if (answer.is_correct) {
      setCorrectAnswersCount(prevCount => prevCount + 1);
      setFeedback("Correct!");
    } else {
      setHasWrongAnswer(true);
      setFeedback("Wrong answer. Try again!");
    }
  
    setIsAnswered(true);
  
    // Delay for 2 seconds to show whether the answer was correct or not.
    setTimeout(() => {
      if (currentIndex === questions.length - 1) { // last question
        if (hasWrongAnswer || correctAnswersCount !== questions.length) {
          // Restart the quiz
          setCurrentIndex(0);
          setHasWrongAnswer(false);
          setCorrectAnswersCount(0);
        } else {
          // TODO: Move to the next quiz
          startNextQuiz();
        }
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
      setIsAnswered(false);
      setSelectedAnswer(null);
      setFeedback(""); // reset feedback
    }, 2000);
  };
  function startNextQuiz() {
    // Reset states for the next quiz
    setCurrentIndex(0);
    setHasWrongAnswer(false);
    setCorrectAnswersCount(0);
    setSelectedAnswer(null);
    setFeedback("");

    // Move to the next quiz
    setCurrentQuiz(prevQuiz => prevQuiz + 1);
}


  const getAnswerColor = (answer) => {
    if (!isAnswered) return "defaultColor";
    if (answer === selectedAnswer && answer.is_correct) return "green";
    if (answer === selectedAnswer) return "red";
    if (answer !== selectedAnswer && answer.is_correct) return "green";
    return "defaultColor";
  };

  if (currentIndex < 0 || currentIndex >= questions.length) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="quiz-container">
      <h2>{props.name}</h2>
      <div>
        {videoUrl && (
          <div className="video-section">
            <YouTube quiz_id={videoUrl} />
          </div>
        )}
      </div>
      <div className="question-container">
        <p>{currentQuestion.prompt}</p>
  
        {answers.map((answer) => (
          <button
            key={answer.answer_id}
            className={`quiz-button ${getAnswerColor(answer)}`}
            disabled={isAnswered}
            onClick={() => handleAnswerSubmission(answer)}
            style={{
              backgroundColor: getAnswerColor(answer),
              margin: "5px",
            }}
          >
            {answer.answer_text}
          </button>
        ))}
  
        {feedback && <div className="feedback">{feedback}</div>}
  
      </div>
    </div>
  );
  
}

export default Quiz;
