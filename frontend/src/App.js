import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import OpeningPage from './Pages/OpeningPage';
import FourOFour from "./Pages/FourOFour";
import SignInPage from "./Components/SignInPage";
import SignUpPage from "./Components/SignUpPage";
import UserProfile from "./Components/UserProfile";
import NavBar from "./Components/NavBar";
import Quiz from "./Components/Quiz";

import BeginnerLevelShowPage from "./Pages/BeginnerLevelShowPage";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={<OpeningPage />} /> 
            <Route path="/signin" element={<SignInPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="*" element={<FourOFour/>} />
            <Route path="/user-profile/:user_id" element={<UserProfile />} />
            <Route path="/quiz" element={ <Quiz />} />
            {/* <Route path="/dashboard" element={ <Dashboard />} /> */}
          
          </Routes>
      </Router>
    </div>
  );
}

export default App;
