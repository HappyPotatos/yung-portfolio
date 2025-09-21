import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FadeInSection from "./components/FadeInSection"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="introduction">
        <h1> Hi, I'm Yung</h1>
      </div>
      <FadeInSection>
        <div className="about_me">
          <h1>
            About Me
          </h1>
          <p>
            I’m a Full-Stack Software Developer, recently graduated from UNSW with a Bachelor’s in Computer Science. <br></br>
            I love sharing my knowledge and experiences in the hobbies and work I am passionate about, <br></br>
            which are programming, volleyball and philosophy. 
          </p>
        </div>
      </FadeInSection>
      <div className="projects">
        <FadeInSection>
          <div className="backend">
            <h1>
              Back-end
            </h1>
            <p>
              I am proficient in SQL, Java, Python, and using APIs (flask).
            </p>
            <h2>
              Virtual Wait System
            </h2>
            <h2>
              Insert Image/Link here of project
            </h2>
            <p>
              A fully functional kiosk screen and menu, eliminating the need for waiters to find a table and order food. <br></br>
              <strong>Primary Languages:</strong> SQLite, Python, Flask.
            </p>
            <h2>
              Dungeon Crawler
            </h2>
            <h2>
              Insert Image/Link here of project
            </h2>
            <p>
              A 2D dungeon crawler game, with unique monster and weapon mechanics. <br></br>
              <strong>Primary Languages:</strong> Java.
            </p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="frontend">
            <h1>
              Front-end
            </h1>
            <p>
              I am proficient in Javascript, TypeScript, HTML/CSS, Node.js, React. <br></br>
              I have commercial experience building professional Websites.
            </p>
            <h2>
              Industrial Foot Bath
            </h2>
            <h2>
              Insert Image/Link here of project
            </h2>
            <p>
              A professional website marketing industrial cleaning products for FMCG Industry Solutions <br></br>
              <strong>Primary Languages:</strong> Wordpress, HTML, CSS.
            </p>
            <h2>
              PlaceHolder Project
            </h2>
            <h2>
              Insert Image/Link here of project
            </h2>
            <p>
              PlaceHolder Description <br></br>
              <strong>Primary Languages:</strong> Fill in with Javascript, Typescipt, React, etc.
            </p>
          </div>
        </FadeInSection>
      </div>
      <FadeInSection>
        <div className="links">
          <h1>
            Links
          </h1>
          <p>
            Email: yungkim10023@gmail.com <br></br>
            LinkedIn: https://www.linkedin.com/in/yung-kim1/
          </p>
        </div>
      </FadeInSection>
    </>
  )
}

export default App
