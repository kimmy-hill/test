import React from 'react';
import Nav from './navigation'

function Header({currentPage, setCurrentPage}) {

  const styles = {
  cursor: "pointer",
  fontSize: "18px",
fontWeight: "bold"
  }

const name = "Kim Hill"
  return (
    <nav id="header" className="navbar navbar-expand-lg" >
        <div className="container-fluid">
          <a style = {styles} className="nav-link font-weight-bold link-dark justify-content-start" onClick= {() => setCurrentPage("About Me")}>{name}</a>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <Nav page = "About Me" setCurrentPage = {setCurrentPage}  currentPage = {currentPage}/>
                <Nav page = "Portfolio" setCurrentPage = {setCurrentPage} currentPage = {currentPage}/>
                <Nav page = "Contact" setCurrentPage = {setCurrentPage} currentPage = {currentPage}/>
                <Nav page = "Resume" setCurrentPage = {setCurrentPage} currentPage = {currentPage}/>
              </ul>
          </div>
        </div>
    </nav>
  );
}

export default Header;