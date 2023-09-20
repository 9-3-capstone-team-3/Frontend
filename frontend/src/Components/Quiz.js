import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import YouTube from "./Youtube";
import "./Quiz.css";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3003";

async function getQuizDetails(quiz_id) {
  try {
    const response = await axios.get(`${apiUrl}/quiz/${quiz_id}/questions`, {
      withCredentials: true,
    });
    console.log(response);

    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Failed to fetch quiz details.");
      return [];
    }
  } catch (err) {
    console.error("Error:", err);
    return [];
  }
}

// const baseURL = "https://www.youtube.com/watch?v=";

async function getQuizVideoUrl(quiz_id, setVideoId) {
  try {
    const response = await axios.get(`${apiUrl}/quiz/${quiz_id}`, {
      withCredentials: true,
    });

    if (response.status === 200 && response.data.video_id) {
      setVideoId(response.data.video_id);
    } else {
      console.error("Failed to fetch video URL.");
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [videoUrl, setVideoURL] = useState("");
  const [feedback, setFeedback] = useState("");
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [hasWrongAnswer, setHasWrongAnswer] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  let { quiz_id } = useParams();
  const navigate = useNavigate();

  

  useEffect(() => {
    getQuizVideoUrl(quiz_id, setVideoURL);
  }, [quiz_id]);

  useEffect(() => {
    const fetchQuizDetails = async () => {
      const fetchedQuestions = await getQuizDetails(quiz_id);
      setQuestions(fetchedQuestions);
    };
    fetchQuizDetails();
  
    getQuizVideoUrl(quiz_id, setVideoURL);
  }, [quiz_id]);

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

  useEffect(() => {
    async function fetchAnswers() {
      if (currentIndex < 0 || currentIndex >= questions.length) return;
  
      try {
          const response = await axios.get(
              `${apiUrl}/questions/${questions[currentIndex].question_id}/answers`
          );
          const shuffledAnswers = shuffleArray(response.data);
          setAnswers(shuffledAnswers);
      } catch (error) {
          console.error("Error fetching answers:", error);
      }
  }
  
    fetchAnswers();
  }, [questions, currentIndex]);

  const handleAnswerSubmission = async (answer) => {
    setIsAnswered(true);
    
    let isCorrect;
    let newCorrectCount;
    let wrongAnswerOccurred;
    
    if (!answer.hasOwnProperty('is_correct')) {
        // It's a free-text response; validate with the backend
        try {
            const response = await axios.post(
              `${apiUrl}/answers/questions/${questions[currentIndex].question_id}/validate`
              , 
                { answer: answer.answer_text }, 
                { withCredentials: true }
            );
            isCorrect = response.data.is_correct;
        } catch (error) {
            console.error("Error validating answer:", error);
            setFeedback("There was an error validating your answer. Please try again.");
            return;  // exit the function since we encountered an error
        }
    } else {
        // It's a multiple-choice question
        isCorrect = answer.is_correct;
    }

    setSelectedAnswer(answer);
    newCorrectCount = isCorrect ? correctAnswersCount + 1 : correctAnswersCount;
    wrongAnswerOccurred = hasWrongAnswer || !isCorrect;

    if (isCorrect) {
        setFeedback("Correct!");
    } else {
        setFeedback("Wrong answer. Try again!");
    }

    setTimeout(() => {
        if (currentIndex === questions.length - 1) { // last question
            if (wrongAnswerOccurred || newCorrectCount !== questions.length) {
                // Restart the quiz
                setCurrentIndex(0);
                setHasWrongAnswer(false);
                setCorrectAnswersCount(0);
                setIsQuizCompleted(false);
            } else {
                // Mark the quiz as completed
                setIsQuizCompleted(true);
            }
        } else {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }

        setHasWrongAnswer(wrongAnswerOccurred);
        setCorrectAnswersCount(newCorrectCount);
        setIsAnswered(false);
        setSelectedAnswer("");
        setFeedback(""); // reset feedback
    }, 4000);
};


  function startNextQuiz() {
    // Reset states for the next quiz
    setCurrentIndex(0);
    setHasWrongAnswer(false);
    setCorrectAnswersCount(0);
    setSelectedAnswer(null);
    setFeedback("");

    // Move to the next quiz
    const nextQuizId = parseInt(quiz_id, 10) + 1;
    navigate(`/quiz/${nextQuizId}`);
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
if (questions.length === 0) {
    return <div>No questions available</div>;
}



 const currentQuestion = questions[currentIndex];
console.log(currentQuestion);
  return (
    <div className="quiz-container">
      <h2>{currentQuestion?.prompt}</h2>
      <div>
        {videoUrl && (
          <div className="video-section">
            <YouTube quiz_id={videoUrl} />
          </div>
        )}
      </div>
  
      <div className="qa-box">
  
      {currentQuestion.prompt_type_id === 2 ? (
    <div>
        <div>TEST RENDERING</div>
        <h2>{currentQuestion?.prompt}</h2>        
          <input 
            type="text" 
            value={selectedAnswer}
            onChange={(e) => setSelectedAnswer(e.target.value)} 
            placeholder="Type your answer here"
            disabled={isAnswered}
        />
        <button 
            className="quiz-button"
            onClick={() => handleAnswerSubmission({ answer_text: selectedAnswer })}
            disabled={isAnswered}
        >
            Submit
        </button>
    </div>
) : currentQuestion.prompt_type_id === 3 ? (
    <div>
        <p className="question-prompt">{currentQuestion?.prompt}</p>
        <button
            className={`quiz-button ${getAnswerColor({answer_text: "True"})}`}
            disabled={isAnswered}
            onClick={() => handleAnswerSubmission({ answer_text: "True" })}
            style={{ backgroundColor: getAnswerColor({answer_text: "True"}), margin: "5px" }}
        >
            True
        </button>
        <button
            className={`quiz-button ${getAnswerColor({answer_text: "False"})}`}
            disabled={isAnswered}
            onClick={() => handleAnswerSubmission({ answer_text: "False" })}
            style={{ backgroundColor: getAnswerColor({answer_text: "False"}), margin: "5px" }}
        >
            False
        </button>
    </div>
) : (
    answers.map((answer) => (
        <button
            key={answer.answer_id}
            className={`quiz-button ${getAnswerColor(answer)}`}
            disabled={isAnswered}
            onClick={() => handleAnswerSubmission(answer)}
            style={{ backgroundColor: getAnswerColor(answer), margin: "5px" }}
        >
            {answer.answer_text}
        </button>
    ))
)}

        {feedback && <div className="feedback">{feedback}</div>}
      </div>
        <button className="quiz-button" onClick={() => navigate("/dashboard/user_id")}>
          Return to Dashboard
        </button>
        {isQuizCompleted && (
          <div className="result-box">
            <p>You answered {correctAnswersCount} out of {questions.length} questions correctly!</p>
            <button className="quiz-button" onClick={startNextQuiz}>Move to Next Quiz</button>
          </div>
        )}
    </div>
  );
  
}
export default Quiz;
