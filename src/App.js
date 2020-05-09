import React from 'react';
import headshot from './headshot.jpg';
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>Joseph M. Sak</h1>
        <h2>Web Production &amp; Strategy</h2>

        <img
          src={headshot}
          alt="Professional headshot - vibrant gradient color background, blue t-shirt"
        />
      </header>

      <main>
        <p>A seasoned web developer who hates every word he's ever written to describe himself.</p>
      </main>
    </>
  );
}

export default App;
