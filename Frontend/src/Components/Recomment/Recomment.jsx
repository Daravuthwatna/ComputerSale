import { Link } from 'react-router-dom'
import './Recomment.css'

const Recomment = () => {

  const handleClick =()=> {
    window.scrollTo(0, 0);
  }

  return (
    <div className='container-recomment'>
      <div className='recomment'>
        <ul className='list-recomment'>
          <li><Link onClick={handleClick} to='/laptop/asus'>Asus</Link></li>
          <li><Link onClick={handleClick} to='/laptop/msi'>MSI</Link></li>
          <li><Link onClick={handleClick} to='/laptop/dell'>Dell</Link></li>
          <li><Link onClick={handleClick} to='/laptop/Lenovo'>Lenovo</Link></li>
          <li><Link onClick={handleClick} to='/accessory/razer'>Razer</Link></li>
          <li><Link onClick={handleClick} to='/accessory/adata'>Adata</Link></li>
          <li><Link onClick={handleClick} to='/accessory/tp-Link'>Tp-Link</Link></li>
          <li><Link onClick={handleClick} to='/accessory/keychron'>KeyChron</Link></li>
          <li><Link onClick={handleClick} to='/accessory/samsung'>Samsung</Link></li>
          <li><Link onClick={handleClick} to='/accessory/keyboard'>KeyBoard</Link></li>
          <li><Link onClick={handleClick} to='/accessory/mouse'>Mouse</Link></li>
          <li><Link onClick={handleClick} to='/accessory/ssd'>SSD</Link></li>
          <li><Link onClick={handleClick} to='/accessory/adwifi'>WIFI</Link></li>
          <li><Link onClick={handleClick} to='/accessory/adblue'>Bluetooth</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Recomment