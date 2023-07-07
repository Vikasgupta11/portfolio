import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import Loader  from 'react-loaders';
const Home = () => {
  


  // here text-animate is a class in Animated.scss file 
  const [letterClass, setletterClass] = useState('text-animate')
  const nameArray=['i','k','a','s'];
  const jobArray=['W','e','b','  ',' ','D','e','v','e','l','o','p','e','r','.'];

 useEffect(() => {
    setTimeout(() => {
     setletterClass('text-animate-hover');
    }, 1000);
  });


  return (
    <>
      <div className=" home-page">


        <div className="text-zone">
          <h1>
           
            <span className={letterClass}>H</span>
           <span className={`${letterClass}  _12` }>i,</span>
           <br /> 
           <span className={`${letterClass}  _13` }>I</span>
           <span className={`${letterClass}  _14` }>'m</span>

            
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters  letterClass={letterClass} 
            strArray={nameArray}  
            idx={15}/>
      
            <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray}
          idx={22}/>
          </h1>
          <h2>Fronted developer/ Java Expert</h2>
          <br/>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
<Logo/>
   
      </div>
      <Loader type='pacman'/>
    </>
  )
}

export default Home;
