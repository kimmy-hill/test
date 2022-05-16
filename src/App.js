import React, {useState} from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './components/header'
import Footer from './components/footer'
import AboutMe from './components/aboutme'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import Resume from './components/resume'




function App() {

const [currentPage, setCurrentPage] = useState('About Me')



const activePage = () => {
switch (currentPage){
case "About Me":
return <AboutMe/>
break;
case "Portfolio":
return <Portfolio/>
break;
case "Contact":
return <Contact/>
break;
case "Resume":
return <Resume/>
break;
}
}


  return (

<div className ="main-div d-flex flex-column">

  <Header currentPage = {currentPage} setCurrentPage = {setCurrentPage}/ >

  {activePage()}



  <Footer/>

</div>

  );
}

export default App;