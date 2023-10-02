import "./OpeningPage.css"
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
      <a href="#" class="logo">Code <b>Fusion</b></a>
      <ul class="links">
        <li>Home</li>
        <li>About Us</li>
        <li>Work</li>
        <li>Info</li>
        <li>Sign In</li>
      </ul>
    </div>
  </header>
  <div class="content">
    <div class="container">
      <div class="info">
        <h2 className="htwo-font">Fun. Easy. Collaboration</h2>
        <p>Learn to collaborate with ease. Just sign up!
           Watch Git tutorials and answer questions. Practice contributing to open source projects through fun easy simulations.</p>
        <button>Sign Up</button>
      </div>
      <div class="image">
        <img src="https://i.postimg.cc/4dn7GjXC/handshack-removebg-preview.png" />
      </div>
    </div>
  </div>
</div>
    );
}
  
  export default OpeningPage;