import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Youtube from "./Youtube";
import "./Quiz.css";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3003";


/**
 * Handles errors by logging them.
 * @param {Error} err The error object.
 * @param {string} message The custom error message.
 * @return {Array} Empty array.
 */
const handleErrors = (err, message) => {
  console.error(message, err);
  return [];
};

/**
 * Fetch data from the specified URL.
 * @param {string} url The URL to fetch data from.
 * @param {Object} [options={}] Axios configuration options.
 * @return {Object|null} Fetched data or 
 */
const fetchData = async (url, options = {}) => {
  try {
    const response = await axios.get(url, { withCredentials: true, ...options });
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    handleErrors(err, "Failed to fetch data from: " + url);
  }
  return null;
};

/**
 * Retrieves quiz details for a given quiz ID
 * @param {string} quiz_id The quiz ID.
 * @return {Array} List of quiz questions.
 */
async function getQuizDetails(quiz_id) {
  const data = await fetchData(`${apiUrl}/quiz/${quiz_id}/questions`);
  return data || [];
};

/**
 * Retrieves the video URL for a given quiz ID.
 * @param {string} quiz_id The quiz ID.
 * @return {string} Video URL.
 */
async function getQuizVideoUrl(quiz_id) {
  const data = await fetchData(`${apiUrl}/quiz/${quiz_id}`);
  return data?.video_id || "";
};

/**
 * Component to render quiz questions based on their type.
 * @param {Object} props
 * @returns {React.Element}
 */
const questionRenderer = ({ question, isAnswered, selectedAnswer, answers, handleAnswerSubmission, setSelectedAnswer }) => {
  
  if (!question) return null;

  if (question.prompt_type_id === 2) {
    return (
      <div>
        <h2>{question?.prompt}</h2>
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
    );
  }
  if (question.prompt_type_id === 3) {
    return (
      <div>
        <p className="question-prompt">{question?.prompt}</p>
        <button
          className="quiz-button"
          disabled={isAnswered}
          onClick={() => handleAnswerSubmission({ answer_text: "True" })}
        >
          True
        </button>
        <button
          className="quiz-button"
          disabled={isAnswered}
          onClick={() => handleAnswerSubmission({ answer_text: "False" })}
        >
          False
        </button>
      </div>
    );
  }
  return (
    <div>
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
  )
}

/**
 * The main Quiz component.
 * @return {React.Element} Rendered component.
 */

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
  let { user_id } = useParams();
  let { prompt_type_id } = useParams();
  let navigate = useNavigate();
  const currentQuestion = questions[currentIndex]
  
  useEffect(() => {
    async function fetchVideoUrl() {
      const videoId = await getQuizVideoUrl(quiz_id);
      setVideoURL(videoId);
    }
    fetchVideoUrl();
  }, [quiz_id]);
  

  useEffect(() => {
    const fetchQuizDetails = async () => {
      const fetchedQuestions = await getQuizDetails(quiz_id);
      setQuestions(fetchedQuestions);
    };
    fetchQuizDetails();
  
    
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
 async function getPointsForPromptType(prompt_type_id) {
  try {
    const response = await axios.get(`${apiUrl}/promptType/${prompt_type_id}`);
    return response.data.points || 0;
  } catch (error) {
    console.error("Error fetching points for prompt type:", error);
    return 0;
  }
 } 

function startNextQuiz () {
  setIsAnswered(false);
  setSelectedAnswer("");
  setFeedback("");
  setCorrectAnswersCount(0);
  navigate(`${apiUrl}`)
} 

const handleNextQuestion = () => {
  if (currentIndex === questions.length -1) {
    setIsQuizCompleted(true);
    setCurrentIndex(0);
  } else {
    setCurrentIndex(prevIndex => prevIndex + 1);
  }
  setIsAnswered(false);
  setSelectedAnswer("");
  setFeedback("")
};

const handleAnswerSubmission = async (answer) => {
  setIsAnswered(true);

  let isCorrect;

  if(!answer.hasOwnPropery("is_correct")) {
    try {
      const response = await axios.post(
        `${apiUrl}/answers/questions/${questions[currentIndex].question_id}/validate`,
        { answer: answer.answer_text },
        { withCredentials: true }
      );
      isCorrect = response.data.is_correct;
    } catch (error) {
      console.error("Error validating answer:", error);
      setFeedback("Wrong answer. Please try again");
      return;
    }
  } else {
    isCorrect = answer.is_correct;
  }
  setSelectedAnswer(answer);
  if (isCorrect) {
    const pointsEarned = await getPointsForPromptType(currentQuestion.prompt_type_id);

    axios.post("/submission/updateUserPoints", {
      userId: user_id,
      points: pointsEarned
    }).then(response => {
      console.log("Points updated.");
      setCorrectAnswersCount(prevCount => prevCount + 1);
      setFeedback("Correct");
    }).catch(error => {
      console.error("Error updating points:", error);
    });
  } else {
    setFeedback("Wrong Answer. Try again!")
  }
}

return (
  <div className="quiz-container">
      
      
      {videoUrl && (
          <div className="video-section">
              <Youtube quiz_id={videoUrl} />
          </div>
      )}
      <h2>{currentQuestion?.prompt}</h2>
      <div className="qa-box">
          {questionRenderer({
              question: currentQuestion,
              isAnswered,
              selectedAnswer,
              answers,
              handleAnswerSubmission
          })}
          {feedback && <div className="feedback">{feedback}</div>}
          
          {isAnswered && (
              <button className="quiz-button" onClick={handleNextQuestion}>
                  Next Question
              </button>
          )}

          <button className="quiz-button" onClick={() => navigate("/dashboard/user_id")}>
              Return to Dashboard
          </button>
      </div>

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
