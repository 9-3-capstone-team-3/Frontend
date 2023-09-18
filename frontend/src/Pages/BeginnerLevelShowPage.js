
// import YouTube from "../Components/Youtube";

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";


// const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3003';

// export default function BeginnerLevelShowPage(){
//     const [allLevels, setAllLevels] = useState([]);
//     const {id} = useParams();
    
//     useEffect(() => {
//         axios
//         .get(`${apiUrl}/levels`)
//         .then((response) => {
//             setAllLevels(response.data)
//         })
//         .catch((error) => {
//             console.error(error);
//         });
//     },[])

//     const selectedLevel = allLevels.find(level => level.quiz_id.toString() === id && level.status_name === "Beginner");

//     return (
//         <>
//             <div>
//                 <h1>BeginnerLevelShowPage</h1>
                
//                 <div>
//                     {selectedLevel && (
//                         <ul>
//                             <li>
//                                 Level {selectedLevel.quiz_id} : {selectedLevel.name}
//                             </li>
//                         </ul>
//                     )}
//                 </div>
//             </div>
//         </>
//     )
// }
