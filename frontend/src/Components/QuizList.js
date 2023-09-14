import axios from "axios";  
import { useEffect, useState } from "react";


const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3003';

export default function QuizList(){
    const [ quizList, setQuizList] = useState("");

    useEffect (() => {
        axios
        .get(`${apiUrl}/quiz`)
        .then((res) => {
            console.log(res.data)
            setQuizList(res.data);
        })
        .catch((error) => {
            console.log(error)
        })
    }, []) 

    return (
        <div className="quiz-list-container">
            <div>
            <ul>
            {quizList.map((quiz, index) => (
                <li key={index}>{quiz.name} - {quiz.video_url}
                
                </li>
            ))}
            <YouTube quiz_id={quiz.quiz_id} />

        </ul>
            </div>
        </div>
    )};