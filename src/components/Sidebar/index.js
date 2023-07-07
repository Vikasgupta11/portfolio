import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype, faYoutube } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="LogoSubtitle" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>

          <NavLink
            exact="true"
            className="about-link"
            activeclassname="active"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>

          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>

        <ul>
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gupta-vikas-13a425222" />
            <FontAwesomeIcon icon={faLinkedin} color="#4d4dde" />
          </li>

          <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/Vikasgupta11" />
            <FontAwesomeIcon icon={faGithub} color="#4d4dde" />
          </li>

          <li>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@VikasGupta-el7bn" />
            <FontAwesomeIcon icon={faYoutube} color="#4d4dde" />
          </li>

          <li>
            <a target="_blank" rel="noreferrer" href="https://www.skype.com/en/" />
            <FontAwesomeIcon icon={faSkype} color="#4d4dde" />
          </li>


        </ul>
      </div>
    </>
  )
}
export default Sidebar
