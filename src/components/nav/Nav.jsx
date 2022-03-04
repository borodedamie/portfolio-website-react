import './nav.css'
import { BiHome, BiUser, BiBook, BiArchive } from 'react-icons/bi'
import { RiCustomerService2Line } from 'react-icons/ri'
import { useState } from 'react'


function Nav() {
  const [ activeNav, setActiveNav ] = useState('#')

  return (
    <nav>
      <a href="#" onClick={ () => setActiveNav('#') } className={ activeNav === '#' ? 'active' : '' }><BiHome /></a>
      <a href="#about" onClick={ () => setActiveNav('#about') } className={ activeNav === '#about' ? 'active' : '' }><BiUser /></a>
      <a href="#experience" onClick={ () => setActiveNav('#experience') } className={ activeNav === '#experience' ? 'active' : '' }><BiBook /></a>
      <a href="#portfolio" onClick={ () => setActiveNav('#portfolio') } className={ activeNav === '#portfolio' ? 'active' : '' }><BiArchive /></a>
      <a href="#contact" onClick={ () => setActiveNav('#contact') } className={ activeNav === '#contact' ? 'active' : '' }><RiCustomerService2Line /></a>
    </nav>
  )
}

export default Nav
