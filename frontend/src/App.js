import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import FourOFour from "./Pages/FourOFour";
import SignInPage from "./Components/SignInPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/signin" element={<SignInPage/>}/>
            <Route path="*" element={<FourOFour/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
