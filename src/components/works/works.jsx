import './works.scss'
import { useState } from 'react'
export default function Works() {

  const [currentSlider, setCurrentSlider] = useState(0)



  const data = [
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "TDSB Meeting Module",
      desc:
        ".NET Meeting Module for Archived Meetings on TDSB",
      img:
        "assets/tdsbMeetingModule.jpg",
      link:
        "https://www.tdsb.on.ca/Leadership/Boardroom/Live-Webcast-of-Meetings/Webcast-Archives",
      SourceCode: 
        "",
      extraStyle:
        "",
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "EventHood",
      desc:
        "iOS/Android Mobile Event app using REACT Native",
      img:
        "assets/EventHood.png",
      link:
        "https://expo.dev/@kevan-y/eventhood-app",
      SourceCode:
        "https://github.com/Eventhood/Eventhood-app",
      extraStyle:
        "200px"
    },
    {
      id: "3",
      icon: "./assets/globe.png",
      title: "Angular Spotify App",
      desc:
        "Full Stack Angular Project utilizing Spotify APIs and component based design.",
      img:
        "assets/SpotifyAngular.jpg",
      link:
        "https://angular-fullstack-spotifyapp.netlify.app/",
      SourceCode:
        "https://github.com/NLaw5/Angular-Spotify-App",
      extraStyle:
        ""
    },
  ];

  const handleClick = (way)=> {
    way === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider-1 : 2) : 
    setCurrentSlider(currentSlider<data.length -1 ? currentSlider + 1 : 0);

    // Summary of code:
    // if Left, set the current Slider either currentSlider-1 or 2 depending on currentSlider value
    // For right, it will only go back to 2 if we reach the minimum in our data list

    // if Right, set the current Slider either to currentSlider+1 or 0 depending on currentSlider value
    // For right, it will only go back to 0 if we reach the max in our data list (in this case 2)
  }
  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlider * 100}vw)`}}>
        {data.map((item) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={item.icon} alt= ""/>
                  </div>
                  <h2>{item.title}</h2>
                  <p>
                    {item.desc}
                  </p>
                  <span><a  href={item.link}>Project Link</a></span>
                  {item.SourceCode.length > 0 && 
                      <span> 
                      <a href={item.SourceCode}>Source Code</a>
                    </span>
                  }
                </div>
              </div>
              <div className="right">
                <img
                  src={item.img}
                  alt="test123"
                  style = {{width: item.extraStyle}}
                />
              </div>
            </div>
          </div>
        ))} 
      </div>
      <img src="assets/arrow.png" className="arrow left" alt ="Navigation Arrow" onClick={()=>handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt ="Navigation Arrow" onClick={()=>handleClick()}/>
    </div>
  )
}
