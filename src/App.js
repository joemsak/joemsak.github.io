import React from 'react';
import headshot from './headshot.jpg';
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>Joseph M. Sak</h1>
        <h2>Cloud &amp; Application Engineer at <a href="http://kadenze.com">Kadenze</a></h2>

        <img
          src={headshot}
          alt="Professional headshot - vibrant gradient color background, blue t-shirt"
        />
      </header>

      <main>
        <p>A professional, seasoned web developer who hates every cover letter and web copy he's ever tried to write about himself.</p>
        <ul>
          <li>15+ years of experience with hundreds of clients in many industries</li>
          <li>Ruby, Rails, HTML, CSS, Javascript (vanilla or frameworks)</li>
          <li>UI/UX prototyping, project management, ideation &amp; requirements gathering</li>
          <li>Linux, cloud engineering, kubernetes, docker, SQL, networking, et. al</li>
          <li>Never done learning</li>
          <li>Oh and I need a favicon but I don't know how to design a good one</li>
        </ul>

        <p>
          <a href="mailto:joe@joesak.com">email/joe@joesak.com</a>
        </p>

        <p>
          <a href="//github.com/joemsak">github/joemsak</a>
        </p>

        <p>
          <a href="//linkedin.com/in/joemsak">linkedin/joemsak</a>
        </p>

        <p>
          <a href="//instagram.com/dosgatoscreative">instagram/@dosgatoscreative</a>
        </p>
      </main>
    </>
  );
}

export default App;
