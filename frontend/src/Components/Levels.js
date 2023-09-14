import axios from "axios";
import {useState, useEffect} from "react";



const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3003';

export default function Levels(){
 
    const [questions, setQuestions] = useState([]);
 
 useEffect(() => {
    axios
      .get(`${apiUrl}/questions`)
      .then((response) => {
        console.log(response.data)
        setQuestions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="levels-container">
      <div>
        <ul>
        {questions.map((question, index) => (
            <li key={index}>
              Level {question.level_number}: {question.prompt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );


};

