import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetter from '../AnimatedLetters'
import './index.scss'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
const About = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setletterClass('text-animate-hover')
    }, 3000)
  })

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with latest
            technologies on challenging and diverse project.
          </p>
          <p>
            I'm quietly confident , naturally curious, and perpetually working
            on improving my chops one design problem at a time.
          </p>
          <p>
            If I need define myself in one sentence that would be, I am a final
            year Computer Engineering student from Shree L.R Tiwari College of
            Engineering based in Mumbai.
          </p>

        
        </div>

 </div>
        <div className="stage-cube-cont">
            <div className="cubespinner">
              {/* this is for to build Acude shape in Abour page ,
              All this imported form free-brands-svg-icons
              */}
              <div className="face1">
                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
              </div>

              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faJsSquare} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faReact} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4E28 " />
              </div>
            </div>
          </div>
     

     <Loader type='pacman'/>
    </>
  )
}
export default About
