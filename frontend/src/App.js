import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import OpeningPage from './Pages/OpeningPage';
import FourOFour from "./Pages/FourOFour";
import SignInPage from "./Components/SignInPage";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Header/>
          <Routes>
            <Route path="/" element={<OpeningPage />} /> 
            <Route path="/signin" element={<SignInPage/>}/>
            <Route path="*" element={<FourOFour/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
