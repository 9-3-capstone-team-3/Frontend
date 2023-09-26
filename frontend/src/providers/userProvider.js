import React, { useEffect, useState, createContext } from "react";
//noice here we are refrenceing the service we set up earlier
import { auth } from "../services/Firebase.js";

export const UserContext = createContext(null)