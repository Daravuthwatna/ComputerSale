import './Offer.css'
import img1 from '../../assets/Img/holding.jpg'
import { Link } from 'react-router-dom'

const Offer = () => {

  const handleClick =()=> {
    window.scrollTo(0,0)
  }

  return (
    <div className='main-offers'>
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON SELLERS PRODUCT</p>
        <Link onClick={handleClick} to='/laptop'><button>Check Now</button></Link>
      </div>
      <div className="offers-right">
        <img src={img1} alt="" />
      </div>
    </div>
  </div>
  )
}

export default Offer