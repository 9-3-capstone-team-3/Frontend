import axios from "axios";  
import { useEffect, useState } from "react";


const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3003';

export default function QuizList(){
    const [ quizList, setQuizList] = useState("");

    useEffect (() => {
        axios
        .get(`${apiUrl}/quiz`)
        .then((res) => {
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
                <li key={index}>{quiz}</li>
            ))}
        </ul>
            </div>
        </div>
    )};