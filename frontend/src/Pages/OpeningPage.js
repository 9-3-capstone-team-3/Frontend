import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import "./OpeningPage.css"

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3003';

function OpeningPage() {

  const [questions, setQuestions] = useState([]);
  const [isTrueChecked, setIsTrueChecked] = useState(false);
  const [isFalseChecked, setIsFalseChecked] = useState(false);
  const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     axios.get(`${apiUrl}/introquestions`).then((res) => {
//         setQuestions(res.data)
//     }).catch((e) => {
//         console.log({ error: {e}})
//     })
// }, [progressCounter]);

// console.log(questions)

console.log(counter)

console.log(isTrueChecked)
console.log(isFalseChecked)

const handleIncrement = () => {
  setCounter(counter + 1);
};
const handleTrueChange = () => {
  setIsTrueChecked(true);
  setIsFalseChecked(false);
};

const handleFalseChange = () => {
  setIsTrueChecked(false);
  setIsFalseChecked(true);
};


return (
  <>
    <div className="fakeMenu">
      <div className="fakeButtons fakeClose"></div>
      <div className="fakeButtons fakeMinimize"></div>
      <div className="fakeButtons fakeZoom"></div>
    </div>
    {counter === 0 ? <><div className="fakeScreen">
      <div className="lineone">
        Want to learn more about programming and coding? Hit next and to embark on your journey!
        
        </div>
        <br/>
        <br/>
        <br/>
      </div>
      <button onClick={handleIncrement}>Next</button>
      </> : null}
  
    {counter === 1 ?<><div className="fakeScreen">
      <div className="line1"><div>True Or False? <br/>Software developers completely independently to complete projects.</div><br/><br/><br/> 
        <form>
          <label>
            <input
              type="checkbox"
              checked={isTrueChecked}
              onChange={handleTrueChange}
            />{' '}
            True
          </label>
          <label>
            <input
              type="checkbox"
              checked={isFalseChecked}
              onChange={handleFalseChange}
            />{' '}
            False
          </label>
        </form>
        </div>
      </div><button onClick={handleIncrement}>Next</button></> : null}

    {counter === 2 ?<><div className="fakeScreen">
      <div className="line1"><div>True Or False? Developers should use a version tracker to keep track of code changes, in case something goes wrong</div><br/><br/><br/> <form>
        <label>
          <input
            type="checkbox"
            checked={isTrueChecked}
            onChange={handleTrueChange}
          />{' '}
          True
        </label>
        <label>
          <input
            type="checkbox"
            checked={isFalseChecked}
            onChange={handleFalseChange}
          />{' '}
          False
        </label>
      </form>
      </div>
      </div><Link className="signup-button" to={`/signup`}>Continue Your Journey!</Link></> : null}
            
      
</>



//       <>
//       <div className="fakeMenu">
//   <div className="fakeButtons fakeClose"></div>
//   <div className="fakeButtons fakeMinimize"></div>
//   <div className="fakeButtons fakeZoom"></div>
// </div>
// <div className="fakeScreen">
//   <p className="line1"><span className="cursor1">_</span></p>
//   <h1>{questions[0].prompt}</h1>
//   <p className="line2">{questions[1].prompt}<span className="cursor2">_</span></p>
//   <p className="line3">[?] What more would you like? (Press space to select)<span className="cursor3">_</span></p>
//   <p className="line4">><span className="cursor4">_</span></p>
// </div>
//     </>
    );
    
  }
  
  export default OpeningPage;