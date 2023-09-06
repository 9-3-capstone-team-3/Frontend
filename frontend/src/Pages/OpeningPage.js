import { useEffect, useState } from "react";
import axios from "axios";
import "./OpeningPage.css"

function OpeningPage() {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/quiz`).then((res) => {
        setQuestions(res.data)
    }).catch((e) => {
        console.log({ error: {e}})
    })
}, []);

console.log(questions)


    return (
      <>
      <div className="fakeMenu">
      <div class="fakeButtons fakeClose"></div>
      <div class="fakeButtons fakeMinimize"></div>
      <div class="fakeButtons fakeZoom"></div>
    </div>
    <div class="fakeScreen">
      <h1>placeholder for form, can this show up?</h1>
    </div>
    </>
    );
  }
  
  export default OpeningPage;