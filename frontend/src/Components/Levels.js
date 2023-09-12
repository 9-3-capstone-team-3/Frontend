import axios from "axios";
import {useState} from "react";


const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3003';

export default function Levels(){
 
    const [levels, setLevels] = useState("");
 
 useEffect(() => {
    axios
      .get(`${apiUrl}/level`)
      .then((response) => {
        setLevels(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="levels-container">
        <div>
        <ul>
            {levels.map((level, index) => (
                <li key={index}>{level}</li>
            ))}
        </ul>
        </div>
    </div>
  )

};

