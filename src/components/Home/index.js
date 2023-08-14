import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoM from '../../assets/images/logo-m.png'
import LogoR from '../../assets/images/logo-RRR.png'
import LogoA from '../../assets/images/logo-a.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  
  const mdarray =['d']
  const nameArray = ['a', 'y', 'h', 'a', 'n']
  const surnameArray= ['h', 'm', 'e', 'd']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoM}
              alt="Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={mdarray}
              idx={15}
            />
            <img
              src={LogoR}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={16}
            />
            <img
              src={LogoA}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={surnameArray}
              idx={21}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={25}
            />
          </h1>
          <h2>Mern Stack Developer / React Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <Link to="https://drive.google.com/drive/u/1/folders/1BfOXmHehrkCbZPewArRxmTANcnoEcfeI" target="_blank" className="flat-button">
            RESUME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
