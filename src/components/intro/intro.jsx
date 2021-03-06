import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {
  const textRef = useRef();


  //Will be using iTyped for css animations for words
  useEffect(() => {
    init(textRef.current, {
       backDelay: 1500,
       backSpeed: 60,
       showCursor: false, 
       strings: ["Developer", "Designer", "Enthusiast", "Learner"] 
      })
  }, [])


  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profile2.png" alt="Picture of myself, Newman Law"/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>
            Hi There, I'm
          </h1>
          <h2>Newman Law</h2>
          <h3>Software <span ref={textRef}></span></h3>
          {/* <h3><a href="https://github.com/NLaw5">Here is a link to my GitHub!</a></h3> */}
          <p><a href="https://github.com/NLaw5">Here's a link to my GitHub!</a></p>
          <p>This portfolio is powered by React <a href="https://github.com/NLaw5/React_Portfolio-">[source code]</a></p>
        </div>

        <a class ="arrow-down" href="#portfolio">
          <img src="assets/down.png" alt="Navigate to Portfolio"/>
        </a>
      </div>
    </div>
  )
}
