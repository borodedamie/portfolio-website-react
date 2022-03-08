import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>Acquired Skillset</h5>  
      <h2>My Experience</h2>

      <div className="container container__experience">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>  
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article> 
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article> 
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> 
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>React</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article> 
          </div>
        </div>


        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>  
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>Mongo DB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article> 
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>Sqlite and MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article> 
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article> 
        </div>
      </div>
      </div>
    </section>
  )
}

export default Experience