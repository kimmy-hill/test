import React, {useEffect} from 'react';


function Navigation({page, currentPage, setCurrentPage}) {

  var styles = {
 cursor: "pointer",
 textDecoration: "none"
  }
  

if (currentPage === page){
styles.textDecoration = "underline"
}

  return (
	 <li className="nav-item justify-content-end">
         <a style = {styles} className="nav-link font-weight-bolder link-dark" onClick ={() => setCurrentPage(page)}>{page}</a>
        </li>
  );
}

export default Navigation;