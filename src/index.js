import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.js';
import Header from './Header.js';
import Project_Section from './Project_Section.js';
import About from './About.js';
import Contact from './Contact.js';
import Futer from './futer.js';
import "./index.css"


function App() {
  return <div>
    <Navbar />
    <Header/>
    <Project_Section/>
    <About/>
    <Contact/>
    <Futer/>
  
  </div>
}



ReactDOM.render(<App />, document.getElementById("root"))


