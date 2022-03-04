import resume from '../../assets/Oluborode-Onaopemipo.pdf'

function CTA() {
  return (
    <div className="cta">
        <a href={ resume } download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Reach Me</a>
    </div>
  )
}

export default CTA