import './index.scss'
import { useState } from 'react'
import LogoR from '../../assets/images/logo-r.png'
import LeetcodeLogo from '../../assets/images/leetcode-logo.png'
import HackrankLogo from '../../assets/images/hackerrank.png'
import LinkedinLogo from '../../assets/images/linkedin_logo.png'
import GithubLogo from '../../assets/images/github-logo.png'
import FacebookLogo from '../../assets/images/facebook-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faHackerrank,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faGear,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
;<FontAwesomeIcon icon={faGear} />
const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img src={LogoR} alt="R Logo Name" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="skills-link"
          to="/skills"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul>
        <li>
          <a
            href="https://leetcode.com/MdRayhanAhmed/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={LeetcodeLogo}
              alt="LeetCode"
              class="anchor-icon leetcode-logo"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.hackerrank.com/MdRayhanAhmed?hr_r=1"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={HackrankLogo}
              alt="Hackerrank"
              class="anchor-icon leetcode-logo"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/MdRayhanAhmed"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={GithubLogo}
              alt="Github"
              class="anchor-icon leetcode-logo"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/md-rayhan-ahmed-a29065140/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={LinkedinLogo}
              alt="LinkedIn"
              class="anchor-icon leetcode-logo"
            />
          </a>
        </li>

        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100008131187213"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={FacebookLogo}
              alt="Facebook"
              class="anchor-icon leetcode-logo"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Sidebar
