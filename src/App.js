import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://github.com/JoshDavies/jdaviescreative/blob/master/public/favicon.png?raw=true" className="Fav"></img>
        <a href="#" className="Title">J Davies</a>
        <nav className="Nav">
          <a href="#latest">Latest Work</a>
          <a href="#buy">Buy</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          </nav>
          <a href="http://instagram.com/jdaviesartwork" className="fa fa-instagram" target="_blank"></a>
      </header>
      <body className="App-body">
        <h1 id="latest">Latest Work</h1>
        <h1 id="buy">Buy</h1>
        <h1 id="about">About</h1>
        <h1 id="contact">Contact</h1>
      </body>
    </div>
  );
}

export default App;
