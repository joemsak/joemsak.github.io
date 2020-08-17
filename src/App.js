import React from 'react';
import headshot from './img/headshot.jpg';
import './App.scss';

function App() {
  const openMail = evt => {
    window.location.href = 'mailto:' +
      evt.target.dataset.name +
      '@' +
      evt.target.dataset.domain +
      '.' +
      evt.target.dataset.tld;

    return false;
  }

  return (
    <>
      <header>
        <h1>Joseph M. Sak</h1>
        <h2>Cloud &amp; Applications Engineer at <a href="http://kadenze.com">Kadenze</a></h2>

        <img
          src={headshot}
          alt="Professional headshot - vibrant gradient color background, blue t-shirt"
        />
      </header>

      <main>
        <p>
          Joe Sak is a software writer living in Guadalajara, Mexico with his
          wife&nbsp;
          <a href="//www.youtube.com/watch?v=-RAN5l4Q0rw" target="_blank">
            Cristina
          </a>
          &nbsp;and their&nbsp;
          <a href="//www.youtube.com/watch?v=Y1KSUBvHzx8&t=78" target="_blank">
            two cats, Fuji &amp; Bizen
          </a>
          .
        </p>

        <ul>
          <li>20 years of full stack web development, project management, professional &amp; personal development</li>
          <li>Hundreds of design agency clients from a variety of business sizes, goals, &amp; industries</li>
          <li>Fundamental continuous learning of Ruby, OOP, Rails, HTML, CSS, Javascript, DevOps</li>
          <li>Proactive collaborator dynamic, iterative project development and prototyping</li>
          <li>Proficient-ish DevOps chops in linux, cloud engineering, kubernetes, docker, SQL, TCP/IP, SSL, DNS, et. al</li>
          <li>Never done pushing myself, always starting another class or book</li>
        </ul>

        <p>
          <button
            className="cryptedmail button-as-link"
            data-name="joe"
            data-domain="joesak"
            data-tld="com"
            onClick={openMail}
          ></button>
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
