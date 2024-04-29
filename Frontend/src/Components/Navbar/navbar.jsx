import { Link } from 'react-router-dom'
import './Navbar.css'
import { useContext, useRef, useState } from 'react'
import DropLaptop from './Drop/dropLaptop'
import DropAccessory from './Drop/dropAccessory'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  const { getTotalIcon } = useContext(ShopContext)

  const [isVisible1, setIsvisible1] = useState(false)
  const [isVisible2, setIsvisible2] = useState(false)
  const menuref = useRef();

  const handleLaptopEnter = ()=> {
    setIsvisible1(<DropLaptop/>)
  }
  const handleLaptopLeave = ()=> {
    setIsvisible1(!<DropLaptop/>)
  }

  const handleAccessoryEnter = ()=> {
    setIsvisible2(<DropAccessory/>)
  }
  const handleAccessoryLeave = ()=> {
    setIsvisible2(!<DropAccessory/>)
  }

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const handleToggle = () => {
    menuref.current.classList.toggle('navbar-list-toggle')
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <div className="toggle-button nav-dropdown" onClick={handleToggle}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <i className="fa-solid fa-computer"></i>
        <p>LAPOTER</p>
      </div>
      <ul ref={menuref} className='navbar-list'>
        <li onClick={handleLinkClick}>
          <Link to="/">Shopping</Link>
        </li>
        <li onMouseEnter={handleLaptopEnter} onMouseLeave={handleLaptopLeave} onClick={handleLinkClick}  >
          <Link to="/laptop">Laptop</Link>
          {isVisible1 === false ? <i className="fa-solid fa-angle-right"></i> : <i className="fa-solid fa-angle-down"></i>}
          {isVisible1 && <DropLaptop/>}
        </li>
        <li onMouseEnter={handleAccessoryEnter} onMouseLeave={handleAccessoryLeave} onClick={handleLinkClick}>
          <Link to="/accessory">Accessory</Link>
          {isVisible2 === false ? <i className="fa-solid fa-angle-right"></i> : <i className="fa-solid fa-angle-down"></i>}
          {isVisible2 && <DropAccessory/>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login' onClick={handleLinkClick}>
          <button>Login</button>
        </Link>
        <div className='nav-cart'>
          <Link to='/cart' onClick={handleLinkClick}>
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <div className="nav-cart-count">{getTotalIcon()}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar