import { Link } from 'react-router-dom'
import './drop.css'

const dropAccessory = () => {
  return (
    <div className='drop'>
      <ul className="product-part">
        <li><h2>Brend</h2></li>
        <li><Link to='/accessory/razer'>Razer</Link></li>
        <li><Link to='/accessory/adata'>Adata</Link></li>
        <li><Link to='/accessory/tp-Link'>Tp-Link</Link></li>
        <li><Link to='/accessory/keychron'>KeyChron</Link></li>
        <li><Link to='/accessory/samsung'>Samsung</Link></li>
      </ul>
      <ul className="product-part">
        <li><h2>Accessory</h2></li>
        <li><Link to='/accessory/keyboard'>KeyBoard</Link></li>
        <li><Link to='/accessory/mouse'>Mouse</Link></li>
        <li><Link to='/accessory/ssd'>SSD</Link></li>
        <li><Link to='/accessory/adwifi'>WIFI</Link></li>
        <li><Link to='/accessory/adblue'>Bluetooth</Link></li>
      </ul>
    </div>
  )
}

export default dropAccessory