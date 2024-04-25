import { Link } from 'react-router-dom'
import './Navbar.css'
import { useContext, useState } from 'react'
import DropLaptop from './Drop/dropLaptop'
import DropAccessory from './Drop/dropAccessory'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

  const { getTotalIcon } = useContext(ShopContext)

  const [isVisible1, setIsvisible1] = useState(false)
  const [isVisible2, setIsvisible2] = useState(false)

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

  return (
    <div className="navbar">
      <div className="nav-logo">
        <i className="fa-solid fa-computer"></i>
        <p>LAPOTER</p>
      </div>
      <ul className='navbar-list'>
        <li>
          <Link to="/">Shopping</Link>
        </li>
        <li onMouseEnter={handleLaptopEnter} onMouseLeave={handleLaptopLeave}>
          <Link to="/laptop">Laptop</Link>
          {isVisible1 === false ? <i className="fa-solid fa-angle-right"></i> : <i className="fa-solid fa-angle-down"></i>}
          {isVisible1 && <DropLaptop/>}
        </li>
        <li onMouseEnter={handleAccessoryEnter} onMouseLeave={handleAccessoryLeave}>
          <Link to="/accessory">Accessory</Link>
          {isVisible2 === false ? <i className="fa-solid fa-angle-right"></i> : <i className="fa-solid fa-angle-down"></i>}
          {isVisible2 && <DropAccessory/>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'>
          <button>Login</button>
        </Link>
        <Link to='/cart'>
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        <div className="nav-cart-count">{getTotalIcon()}</div>
      </div>
    </div>
  )
}

export default Navbar