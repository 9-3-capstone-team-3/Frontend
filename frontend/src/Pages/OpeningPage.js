import { useEffect, useState } from "react";
import axios from "axios";
import "./OpeningPage.css"

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3003';

function OpeningPage() {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/quiz`).then((res) => {
        setQuestions(res.data)
    }).catch((e) => {
        console.log({ error: {e}})
    })
}, []);

console.log(questions)


    return (
      <>
      <div className="fakeMenu">
      <div className="fakeButtons fakeClose"></div>
      <div className="fakeButtons fakeMinimize"></div>
      <div className="fakeButtons fakeZoom"></div>
    </div>
    <div className="fakeScreen">
      <h1>placeholder for form, can this show up?</h1>
    </div>
    </>
    );
  }
  
  export default OpeningPage;