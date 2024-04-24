import { Link } from 'react-router-dom';
import './SortBy.css'

const SortBy = () => {

  const handleClick =()=> {
    window.scrollTo(0, 0);
  }

  return (
    <div className='container-sortby'>
      <div className="triangle"></div>
      <div className='sortby'>
        <ul className='list-sortby'>
          <li><Link onClick={handleClick} to='/accessory/mouse'>Mouse</Link></li>
          <li><Link onClick={handleClick} to='/accessory/ssd'>SSD</Link></li>
          <li><Link onClick={handleClick} to='/accessory/adwifi'>WIFI</Link></li>
          <li><Link onClick={handleClick} to='/accessory/adblue'>Bluetooth</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default SortBy