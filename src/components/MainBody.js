import React from "react"
import LatestWork from './LatestWork'
import Buy from './Buy'
import About from './About'
import Contact from './Contact'

function MainBody() {
   return (
    <body className="App-body">
      <LatestWork />
      <Buy />
      <About />
      <Contact />
    </body>
   );
 }

 export default MainBody;
