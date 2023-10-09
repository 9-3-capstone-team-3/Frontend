//dependencies
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

//components
import NavBar from "./NavBar";
import RightBar from "./rightBar/RightBar";
import Youtube from "./Youtube";
import CommitsBranchesStory from "./Stories/CommitsBranchesStory";
import CreateRepoStory from "./Stories/CreateRepoStory";
import GitHubSetupStory from "./Stories/GitHubSetupStory";
import GitIntroStory from "./Stories/GitIntroStory";
import InstallGitStory from "./Stories/InstallGitStory";
import VersionControlStory from "./Stories/VersionControlStory";
import QuizDetails from "../Components/QuizDetails";
import QuizSummary from "./QuizSummary";
import QuizBox from "./QuizBox";
import SimVidOne from "../Pages/simulationVidOne/SimVidOne"
import SimVidTwo from "../Pages/simulationVidTwo/SimVidTwo";
import Simulation from "../Pages/simulation/Simulation";



//images
import readingIcon from "../Assests/reading-icon.png";
import youtubeIcon from "../Assests/youtube-icon.png";
import quizIcon from "../Assests/quizbox-icon.png";
import simulateIcon from "../Assests/simulate-icon.png";

//css
import "../Components/QuizDash.css";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3000/";

const handleErrors = (err, message) => {
  console.error(message, err);
  return [];
};

const fetchData = async (url, options = {}) => {
  try {
    const response = await axios.get(url, {
      ...options,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (err) {
    handleErrors(err, "Failed to fetch data from: " + url);
  }
  return null;
};

async function getQuizDetails(quiz_id) {
  const data = await fetchData(`${apiUrl}/quiz/${quiz_id}/questions`);
  return data || [];
}

async function getQuizVideoUrl(quiz_id) {
  const data = await fetchData(`${apiUrl}/quiz/${quiz_id}`);
  return data?.video_id || "";
}


function QuizDash() {

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
  const [selectedComponent, setSelectedComponent] = useState("story"); // Default to 'story'
  const [panelsOpen, setPanelsOpen] = useState(false);


  // const [user, setUser] = useState([]);
  // const [userPoints, setUserPoints] = useState(0);

  const { quiz_id, user_id } = useParams();
  const navigate = useNavigate();
  const togglePanels = () => {
    setPanelsOpen(!panelsOpen);
  };

  useEffect(() => {
    console.log(selectedComponent);
  }, [selectedComponent]);

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

  async function recordSubmission(user_id, user_answer, is_correct) {
    try {
      const response = await axios.post(
        `${apiUrl}/submission`,
        {
          user_id,
          user_answer,
          is_correct,
        },
        { withCredentials: true }
      );
      if (response.status !== 201) {
        console.error("Failed to record submission.");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  }

  

  const handleNextQuestion = () => {
    if (currentIndex === questions.length - 1) {
      setIsQuizCompleted(true);
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
    setIsAnswered(false);
    setSelectedAnswer("");
    setFeedback("");
  };

  const handleAnswerSubmission = async (answer) => {
    setIsAnswered(true);

    let isCorrect;
    let newCorrectCount;
    let wrongAnswerOccurred;

    if (!answer.hasOwnProperty("is_correct")) {
      // It's a free-text response; validate with the backend
      try {
        const response = await axios.post(
          `${apiUrl}/answers/questions/${questions[currentIndex].question_id}/validate`,
          { answer: answer.answer_text },
          { withCredentials: true }
        );
        isCorrect = response.data.is_correct;
      } catch (error) {
        console.error("Error validating answer:", error);
        setFeedback(
          "There was an error validating your answer. Please try again."
        );
        return; // exit the function since we encountered an error
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
      //updateUserPoints(user_id, 10);
    } else {
      setFeedback("Wrong answer. Try again!");
    }
    recordSubmission(user_id, answer, isCorrect);
    setTimeout(() => {
      if (currentIndex === questions.length - 1) {
        // last question
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
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }

      setHasWrongAnswer(wrongAnswerOccurred);
      setCorrectAnswersCount(newCorrectCount);
      setIsAnswered(false);
      setSelectedAnswer("");
      setFeedback(""); // reset feedback
    }, 1000);
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

  const currentQuestion = questions[currentIndex];

  // const userId = 1; // Replace with dynamic user ID if necessary

  useEffect(() => {
    fetch(`/${apiUrl}/correct-answers-count/${user_id}`)
      .then((res) => res.json())
      .then((data) => {
        setCorrectAnswersCount(data.count);
      })
      .catch((err) => console.error(err));
  }, [user_id]); // Re-fetch when userId changes

  useEffect(() => {
    if (isQuizCompleted) {
        setIsQuizCompleted(true); // Set the quiz as completed
        setSelectedComponent("simulate"); // Automatically navigate to the simulation after quiz completion
    }
}, [isQuizCompleted]);

  const handleStoryClick = () => {
    alert('Story Icon Clicked')
    setSelectedComponent("story");
    console.log(selectedComponent)

  };

  const handleVideoClick = () => {
    alert('Video Icon clicked')
    setSelectedComponent("video");
    console.log(selectedComponent)
  };

  const handleQuizClick = () => {
    alert('Quiz Icon clicked')
    setSelectedComponent("quiz");
    console.log(selectedComponent)

  };

  const handleSimulateClick = () => {
    alert('Simulate Icon Clicked')
    setSelectedComponent("simulate");
    console.log(selectedComponent)

  };
  const handleTestSimulationClick = () => {
    setIsQuizCompleted(true);
};

  const TOTAL_QUESTIONS = questions.length; // Update this to the correct number if different
  const progressBarWidth = `${(correctAnswersCount / TOTAL_QUESTIONS) * 100}%`; // Assuming you know the total number of questions
  const quizIdMap = {
    1: "1.1",
    2: "1.2",
    3: "2.1",
    4: "2.2",
    5: "3.1",
    6: "3.2",
  };
  const translatedQuizId = quizIdMap[quiz_id];

  const getCurrentStory = (lesson) => {
    switch (lesson) {
      case "1.1":
        return <VersionControlStory />;
      case "1.2":
        return <GitIntroStory />;
      case "2.1":
        return <InstallGitStory />;
      case "2.2":
        return <GitHubSetupStory />;
      case "3.1":
        return <CreateRepoStory />;
      case "3.2":
        return <CommitsBranchesStory />;
      default:
        return null;
    }

  };

  const getCurrentSimulation = (lesson) => {
    switch (lesson) {
        case "1.2": // After lesson 1.2's quiz
            return <SimVidOne />;
        case "2.2": // After lesson 2.2's quiz
            return <SimVidTwo />;
        // ... add more cases for other lessons ...
        case "3.2":
            return <Simulation />;
        default:
            return  "No Simulation Available"; // Default simulation or a placeholder component
    }
};

  let contentPanel;
  switch (selectedComponent) {
    case "story":
      contentPanel = getCurrentStory(translatedQuizId);
      break;
    case "video":
      contentPanel = <Youtube videoUrl={videoUrl} />;
      break;
    case "quiz":
      contentPanel = (
        <QuizBox 
    currentQuestion={currentQuestion}
    isAnswered={isAnswered}
    selectedAnswer={selectedAnswer}
    answers={answers}
    handleAnswerSubmission={handleAnswerSubmission}
    feedback={feedback}
    handleNextQuestion={handleNextQuestion}
    progressBarWidth={progressBarWidth}
    isQuizCompleted={isQuizCompleted}
    correctAnswersCount={correctAnswersCount}
    questions={questions}
    startNextQuiz={startNextQuiz}
    />

      );
      break;
    case "simulate":
      contentPanel = getCurrentSimulation(translatedQuizId);  
      break;
    default:
      contentPanel = null;
    }
    console.log(currentQuestion, answers);

  return (
    <div className="container-three-panel">
      <div className="left-panel">
        <NavBar />
      </div>
  
      <div className="content-panel">
        <div className="story-video-quiz-simulate">
          <div className="icon" onClick={handleStoryClick}>
            <img src={readingIcon} alt="Story Icon" height={70}/>
            Story
          </div>
          <div className="icon" onClick={handleVideoClick}>
            <img src={youtubeIcon} alt="Video Icon" height={70}/>
            Video
          </div>
          <div className="icon" onClick={handleQuizClick}>
            <img src={quizIcon} alt="Quiz Icon" height={70}/>
            Quiz
          </div>
          <div className="icon" onClick={handleSimulateClick}>
            <img src={simulateIcon} alt="Simulate Icon" height={70}/>
            Simulate
          </div>
        </div>
        {contentPanel}
        <button onClick={handleTestSimulationClick}>Test Simulation</button>
      </div>
  
      <div className="right-panel">
        <RightBar />
      </div>
    </div>
  );
  


    

}

export default QuizDash;
