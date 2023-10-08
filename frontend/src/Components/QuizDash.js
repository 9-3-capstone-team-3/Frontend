import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Youtube from "./Youtube";
import "../Components/QuizDash.css";
import QuizDetails from "../Components/QuizDetails";
import QuizSummary from './QuizSummary';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import RightBar from './rightBar/RightBar';


const apiUrl = process.env.REACT_APP_API_URL;

const handleErrors = (err, message) => {
    console.error(message, err);
    return [];
};

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

async function getQuizDetails(quiz_id) {
    const data = await fetchData(`${apiUrl}/quiz/${quiz_id}/questions`);
    return data || [];
};

async function getQuizVideoUrl(quiz_id) {
    const data = await fetchData(`${apiUrl}/quiz/${quiz_id}`);
    return data?.video_id || "";
};

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
    // const [user, setUser] = useState([]);
    // const [userPoints, setUserPoints] = useState(0);

    const { quiz_id, user_id } = useParams();
    const navigate = useNavigate();

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
            const response = await axios.post(`${apiUrl}/submission`, {
                user_id,
                user_answer,
                is_correct
            }, { withCredentials: true });
            if (response.status !== 201) {
                console.error("Failed to record submission.");
            }
        } catch (err) {
            console.error("Error:", err);
        }
    };

    function startNextQuiz() {
        setIsAnswered(false);
        setSelectedAnswer("");
        setFeedback("");
        setCorrectAnswersCount(0);
        navigate(`${apiUrl}`)
    }

    const handleNextQuestion = () => {
        if (currentIndex === questions.length - 1) {
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
            //updateUserPoints(user_id, 10);
        } else {
            setFeedback("Wrong answer. Try again!");
        }
        recordSubmission(user_id, answer, isCorrect);
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

    function onDone(){
        navigate(`/quizdash/${quiz_id}/${user_id}`);
    }
   // const userId = 1; // Replace with dynamic user ID if necessary

    useEffect(() => {
        fetch(`/${apiUrl}/correct-answers-count/${user_id}`)
            .then(res => res.json())
            .then(data => {
                setCorrectAnswersCount(data.count);
            })
            .catch(err => console.error(err));
    }, [user_id]); // Re-fetch when userId changes

    const TOTAL_QUESTIONS = questions.length; // Update this to the correct number if different
    const progressBarWidth = `${(correctAnswersCount / TOTAL_QUESTIONS) * 100}%`; // Assuming you know the total number of questions

    return (
        <body>
            <div class="container-three-panel">
                <div class="left-panel">
                    <NavBar/>
                </div>
            <div class="content-panel"> 
            Content goes here
            </div>

            <div class="right-panel">
                <RightBar/>
            </div>
  </div>
</body>
    );
}


export default QuizDash;










