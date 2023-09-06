//See a beginner dashboard/ profile page
import { useState } from "react";
import './BeginnerPage.css';
//import { Link } from "react-router-dom";


function BeginnerPage() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    return (
    
            <div className="BeginnerPage">
              <header>
                <h1>Welcome to the Beginner's Page</h1>
              </header>
        
              <nav>
                <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#tutorial">Tutorial</a></li>
                  <li><a href="#contact">Contact(Our contact information)</a></li>
                </ul>
              </nav>
        
              <main>
                <section id="about">
                  <h2>About Us</h2>
                  <p>This page is designed to help beginners learn about coding.</p>
                </section>
        
                <section id="tutorial">
                  <h2>Tutorial</h2>
                  <p>Follow our step-by-step tutorial to learn how to code.</p>
                  <a href="tutorial.html">Start Tutorial</a>
                </section>
        
                <section id="contact">
                  <h2>Contact Us</h2>
                  <p>If you have any questions, feel free to contact us.</p>
                  <a href="contact.html">Contact Form</a>
                </section>
              </main>
        
              <footer>
                <p>&copy; {new Date().getFullYear()} Beginner's Page</p>
              </footer>
            </div>
        );
        
        }
    

export default BeginnerPage;

