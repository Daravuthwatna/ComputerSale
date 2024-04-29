import './Footer.css'
import IconScroll from '../../Utils/ButtonScroll/ScrollUp.jsx'

const Footer = () => {
  return (
    <>
      <IconScroll/>
      <div className="footer">
        <div className="footer-logo">
          <i className="fa-solid fa-computer"></i>
          <p>LAPOTER</p>
        </div>
        <ul className="footer-list">
          <li>Shopping</li>
          <li>About</li>
          <li>Contect Us</li>
          <li>Our Team</li>
        </ul>
        <div className="footer-port">
          <ul className="footer-social">
            <li>
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i className="fa-solid fa-paper-plane"></i>
            </li>
            <li>
              <i className="fa-brands fa-youtube"></i>
            </li>
          </ul>
          <div className="footer-report">
            <input type="text" placeholder="User Report"/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer