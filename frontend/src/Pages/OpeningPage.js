import "./OpeningPage.css"
import logo3 from '../Assests/Logo3.png';
import { Link} from "react-router-dom";
// import CenterOfPage from "../Components/CenterOfPage";
// import Footer from "../Components/Footer";
// import Header from "../Components/Header";

//const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3003';

function OpeningPage() {

    return (
  //   return (
  //   <div className="openingMain">
  //     <Header/>
  //     <br/>
  //     <br/>
  //     <CenterOfPage/>
  //     <br/>
  //     <br/>
  //     <Footer/>
  //   </div>

  //   );
    
  // }

  <div class="landing-page">
  <header>
    <div class="container">
      <img src={logo3} alt="logo3" className="logo-image"></img>
      <a href="/" class="logo">CodeFusion</a>
      <ul class="links">
        <a href="/"><li>Home</li></a>
        <Link to="/aboutus"><li>About Us</li></Link>
        <a href="https://www.youtube.com/channel/UCX-6L6UBdZTJ2CeQVSL3uKw"><li>Youtube</li></a>
        <Link to="/signin"><li>Sign In</li></Link>
      </ul>
    </div>
  </header>
  <div class="content">
    <div class="container">
      <div class="info">
        <h2 className="htwo-font">Fun. Easy. Collaboration</h2>
        <p>Learn to collaborate with ease.<br></br>
           Watch Git tutorials and answer questions.<br/> Practice contributing to open source projects through fun easy simulations.<br/>Just sign up!</p>
        <Link to="/signup">
        <button>Sign Up</button>
        </Link>
      </div>
      <div class="image">
        <img src="https://i.postimg.cc/4dn7GjXC/handshack-removebg-preview.png" alt=""/>
      </div>
    </div>
  </div>
</div>
    );
}
  
  export default OpeningPage;