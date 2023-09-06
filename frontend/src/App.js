import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import FourOFour from "./Pages/FourOFour";
import SignInPage from "./Components/SignInPage";
import BeginnerPage from "./Components/BeginnerPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/signin" element={<SignInPage/>}/>
            <Route path="*" element={<FourOFour/>} />
            <Route path="/beginnerpage" element={<BeginnerPage/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
