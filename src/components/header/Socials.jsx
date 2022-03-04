import { FaLinkedin, FaGithub, FaTwitterSquare } from 'react-icons/fa'

function Socials() {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/oluborode-onaopemipo-667752106/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/borodedamie" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><FaTwitterSquare /></a>
    </div>
  )
}

export default Socials