import React from "react"
import LatestWork from './LatestWork'
import Buy from './Buy'
import About from './About'
import Contact from './Contact'
import CoverPage from './CoverPage'


function MainBody() {
   return (
    <body>
      <CoverPage />
      <div className="App-body">
        <LatestWork />
        <Buy />
        <About />
        <Contact />
      </div>
    </body>
   );
 }

 export default MainBody;
