import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {

  const [menu, setMenu] = useState('shop');
  const menuRef = useRef();

  return (
    <div className="navbar">
      <div className="nav-logo">
        <i className="fa-solid fa-computer"></i>
        <p>SHOPPER</p>
      </div>
      <ul ref={menuRef}>
        <li onClick={() => setMenu('shop')}>
          <Link to="/">Shopping</Link>
          {menu === 'shop' ? <hr/> : <></>}
        </li>
        <li onClick={() => setMenu('computer')}>
          <Link to="/computer">Computer</Link>
          {menu === 'computer' ? <hr/> : <></>}
        </li>
        <li onClick={() => setMenu('accessory')}>
          <Link to="/accessory">Accessory</Link>
          {menu === 'accessory' ? <hr/> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'>
          <button>Login</button>
        </Link>
        <Link to='/cart'>
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar;
