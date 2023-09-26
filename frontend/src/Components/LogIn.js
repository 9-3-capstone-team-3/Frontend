import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../providers/userProvider.js";
import { useNavigate } from "react-router-dom";
import {
  signInWithGoogle,
  logOut
} from "../services/Firebase.js";

export const Login = () => {
    const navigate = useNavigate();
    const user = useContext(UserContext);
     useEffect(() => {
      if (user) {
        navigate("/loggedin");
      }
    }, [user]);
      return (
      <div>
        <section>
          <div>
            <div> login works</div>
            <button onClick={signInWithGoogle}>Sign in With google</button>
            <button onClick={logOut}> sign out</button>
        </div>
        </section>
      </div>
    );
  };