import './about.css'
import ME from '../../assets/devs.png'
import { FaAward, FaRegFolderOpen } from 'react-icons/fa'
import { FiUsers} from 'react-icons/fi'

function About() {
  return (
    <section id='about'>
      <h5>Career Biography</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me-image">
          <img src={ ME } alt="About image" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>3+ Clients</small>
            </article>

            <article className='about__card'>
              <FaRegFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nobis atque rem quae sequi sed est deserunt neque?
            Dolores voluptate sed incidunt ut dolorum ad temporibus ex provident quaerat voluptas.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About