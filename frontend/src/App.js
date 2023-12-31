import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import OpeningPage from './Pages/OpeningPage';
import FourOFour from "./Pages/FourOFour";
import SignInPage from "./Components/SignInPage";
import SignUpPage from "./Components/SignUpPage";
import UserProfile from "./Pages/userProfile/UserProfile";
import Simulation from "./Pages/simulation/Simulation";
import SimVidOne from "./Pages/simulationVidOne/SimVidOne";
import Dashboard from "./Pages/Dashboard";
import { Login } from "./Components/LogIn";
import { LoggedInPage } from "./Components/LoggedIn";

import QuizDash from "./Components/QuizDash";
import Leaderboard from "./Pages/leaderboard/Leaderboard";

import About from "./Pages/AboutUs/About";
import SimVidTwo from "./Pages/simulationVidTwo/SimVidTwo";

import CommitsBranchesStory from "./Components/Stories/CommitsBranchesStory";
import CloningStory from "./Components/Stories/CloningStory";
import UpdatingRepoStory from "./Components/Stories/UpdatingRepoStory";



function App() {
  return (
    <div className="App">
      <Router>

          <Routes>
            <Route path="/" element={<Dashboard />} /> 
            <Route path='/login' element={<Login/>}/>
            <Route path='/loggedin' element={<LoggedInPage/>}/>
            <Route path='/leaderboard' element={<Leaderboard/>}/>
            <Route path="/signin" element={<SignInPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/users/profile/:user_id" element={<UserProfile />} />
            <Route path="/dashboard/:user_id" element={ <Dashboard />} />
            <Route path="/simulation/:user_id" element={<Simulation />} />
            <Route path="/quizdash/:quiz_id" element={<QuizDash />} />
            <Route path="/leaderboard/users" element={<Leaderboard/>} />
            <Route path="/aboutus" element={<About />} />

            <Route path="commits" element={<CommitsBranchesStory/>} />
            <Route path="/cloning" element={<CloningStory />}/>
            <Route path="/update-repo" element={<UpdatingRepoStory />}/>
            <Route path="*" element={<FourOFour/>} />

            <Route path="/simvidone" element={<SimVidOne/>} />
            <Route path="/simvidtwo" element={<SimVidTwo/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
            
