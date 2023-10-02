import "./OpeningPage.css"
import CenterOfPage from "../Components/CenterOfPage";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

//const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3003';

function OpeningPage() {




    return (
    <div className="openingMain">
      <Header/>
      <br/>
      <br/>
      <CenterOfPage/>
      <br/>
      <br/>
      <Footer/>
    </div>

    );
    
  }
  
  export default OpeningPage;