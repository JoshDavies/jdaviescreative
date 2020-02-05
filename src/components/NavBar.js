import React from "react"

function NavBar() {
   return (
     <header className="App-header">
       <a href="#" className="Title">J. Davies</a>
       <nav className="Nav">
         <a href="#latest">Latest Work</a>
         <a href="#buy">Buy</a>
         <a href="#about">About</a>
         <a href="#contact">Contact</a>
         </nav>
         <a href="http://instagram.com/jdaviesartwork" className="fa fa-instagram" target="_blank"></a>
     </header>
   );
 }

 export default NavBar;
