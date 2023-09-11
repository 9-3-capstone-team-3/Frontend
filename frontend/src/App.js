import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import NavBar from "./Components/NavBar";
import OpeningPage from './Pages/OpeningPage';
import FourOFour from "./Pages/FourOFour";
import SignInPage from "./Components/SignInPage";
import SignUpPage from "./Components/SignUpPage";
import Header from "./Components/Header";
import UserProfile from "./Components/UserProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Header/>
          <Routes>
            <Route path="/" element={<OpeningPage />} /> 
            <Route path="/signin" element={<SignInPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="*" element={<FourOFour/>} />
            <Route path="/user-profile/:user_id" element={UserProfile} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
