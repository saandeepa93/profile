import React from 'react'
import { BrowserRouter as Router, Route, Switch,
  withRouter } from 'react-router-dom'

import './App.css'

const Header = withRouter(function(props) {
  const tab = props.location.hash.toLowerCase()

  return <header>
    <nav>
      <ol>
        <li className={tab === `#about` ? 'selected-tab' : ''}>
          <a href="#about">
              About
          </a>
        </li>
        <li className={tab === `#education` ? 'selected-tab' : ''}>
          <a href="#education">
              Education
          </a>
        </li>
        <li className={tab === `#experience` ? 'selected-tab' : ''}>
          <a href="#experience">
              Experience
          </a>
        </li>
        <li className={tab === `#publications` ? 'selected-tab' : ''}>
          <a href="#publications">
              Publications
          </a>
        </li>
      </ol>
    </nav>
  </header>
})

function Main() {
  return <main id="about">
    <section className='about'>
      <div className='ql'>
        <img
          className='avatar'
          src="assets/imgs/avatar.jpg"
          alt="Saandeep"
        />
        <br />
        <a className='ss' href='mailto:saandeepaath@usf.edu'>saandeepaath@usf.edu</a><br />
        <a className='ss' target="_" href='https://scholar.google.com/citations?user=-Akxmj0AAAAJ'>Google Scholar</a><br />
        <a className='ss' target="_" href='https://linkedin.com/in/saandeepa93'>LinkedIn</a><br />
        <a className='ss' target="_" href='https://twitter.com/saandeepa93'>Twitter</a><br />
      </div>
      <div className='summary'>
        <div>
        <p>I am a PhD student, deep learning researcher, and computer science
        engineer, currently studying at the University of South Florida,
        Tampa.</p>

        <p>My interests include affective computing, emotion and gaze recognition,
        de-expression, and computer vision.</p>
        </div>
      </div>
    </section>

    <section>
      <h3 id='education'>Education</h3>
      <ol>
        <li className='university'>
          University of South Florida, Tampa
        </li>
        <li className='university'>
          Visvesvaraya Technological University, Mysore
        </li>
      </ol>
    </section>

    <section>
      <h3 id='experience'>Experience</h3>
      <ol>
        <li className='university'>
          Infosys, Mysore
        </li>
      </ol>
    </section>

    <section>
      <h3 id='publications'>Publications</h3>
      <ol>
      <li className='university'>
        <a
          className='ss'
          download="FG2020_EmoPain_PainDetectionFace.pdf"
          target="_"
          href="assets/docs/FG2020_EmoPain_PainDetectionFace.pdf">
          Three-level training of multi-head architecture for pain detection
          </a>
        </li>
      </ol>
    </section>
  </main>
}

function Footer() {
  const year = new Date().getFullYear()

  return <footer>
    <span>&#9400; {year} • Designed and built by Saandeep</span>
  </footer>
}

function App() {
  return <Router className='container'>
    <Header/>
    <Main />
    <Footer />
  </Router>
}

export default App