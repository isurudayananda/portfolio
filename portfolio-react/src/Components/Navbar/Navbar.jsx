import './Navbar.css'
import logo from '../../assets/logo.svg'
import { useState, React } from 'react'
import underline from '../../assets/nav_underline.svg'

const Navbar = () => {

  const [menu,setMenu]  = useState("home");

  return (
    <div className='navbar'>
      <img src={logo}  alt=""/>
      <ul className="nav-menu">
        <li><p>Home</p></li>
        <li><p>About Me</p></li>
        <li><p>Services</p></li>
        <li><p>Portfolio</p></li>
        <li><p>Contact</p></li>
      </ul>
    <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar