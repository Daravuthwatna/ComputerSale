import './offers.css'
import img1 from '../../assets/holding.jpg'

const offers = () => {
  return (
    <div className='main-offers'>
      <div className="offers">
        <div className="offers-left">
          <h1>Exclusive</h1>
          <h1>Offers For You</h1>
          <p>ONLY ON SELLERS PRODUCT</p>
          <button>Check Now</button>
        </div>
        <div className="offers-right">
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default offers