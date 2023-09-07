import { useEffect, useState } from "react";
import axios from "axios";
import "./OpeningPage.css"

function OpeningPage() {

  const [questions, setQuestions] = useState([]);
  let progressCounter = 0

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/quiz`).then((res) => {
        setQuestions(res.data)
    }).catch((e) => {
        console.log({ error: {e}})
    })
}, []);

console.log(questions)
console.log(progressCounter)
function PlusCounter() {
  progressCounter++
}

function MinusCounter() {
  progressCounter--
}

    return (
      <div>
      {progressCounter === 0 ? <>
        <div>
        {}
        </div>
        <button className="forward_button" onClick={PlusCounter}></button>
        </> : null}
        </div>
    );
    
  }
  
  export default OpeningPage;