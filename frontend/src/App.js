import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import OpeningPage from './Pages/OpeningPage';
import FourOFour from "./Pages/FourOFour";
import SignInPage from "./Components/SignInPage";
import SignUpPage from "./Components/SignUpPage";
import UserProfile from "./Pages/userProfile/UserProfile";
import Quiz from "./Components/Quiz";
import Simulation from "./Pages/simulation/Simulation";
import Dashboard from "./Pages/Dashboard";
import { Login } from "./Components/LogIn";
import { LoggedInPage } from "./Components/LoggedIn";
import QuizDash from "./Components/QuizDash";
import Leaderboard from "./Pages/leaderboard/Leaderboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<OpeningPage />} /> 
            <Route path='/login' element={<Login/>}/>
            <Route path='/loggedin' element={<LoggedInPage/>}/>
            <Route path="/signin" element={<SignInPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="*" element={<FourOFour/>} />
            <Route path="/users/profile/:user_id" element={<UserProfile />} />
            <Route path="/quiz/:quiz_id/:user_id" element={ <Quiz />} />
            <Route path="/dashboard/:user_id" element={ <Dashboard />} />
            <Route path="/simulation/:user_id" element={<Simulation />} />
            <Route path="/quizdash/:quiz_id/:user_id" element={<QuizDash />} />
            <Route path="/leaderboard/users" element={<Leaderboard/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
