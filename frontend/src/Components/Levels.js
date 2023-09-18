// import axios from "axios";
// import {useState, useEffect} from "react";



// const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3003';

// export default function Levels({ levels }){
 
//     // const [levels, setLevels] = useState([]);
 
//  useEffect(() => {
//     axios
//       .get(`${apiUrl}/levels`)
//       .then((response) => {
//         console.log(response.data)
//         setLevels(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div className="levels-container">
//       <div>
//         <ul>
//         {levels.map((level, index) => (
//             <li key={index}>
//               Level {level.quiz_id} : {level.name};
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );


// };

