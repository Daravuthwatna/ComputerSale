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
          <li><Link onClick={handleClick} to='/laptop/asus'>Asus</Link></li>
          <li><Link onClick={handleClick} to='/laptop/msi'>MSI</Link></li>
          <li><Link onClick={handleClick} to='/laptop/dell'>Dell</Link></li>
          <li><Link onClick={handleClick} to='/laptop/Lenovo'>Lenovo</Link></li>
          <li><Link onClick={handleClick} to='/accessory/razer'>Razer</Link></li>
          <li><Link onClick={handleClick} to='/accessory/adata'>Adata</Link></li>
          <li><Link onClick={handleClick} to='/accessory/tp-Link'>Tp-Link</Link></li>
          <li><Link onClick={handleClick} to='/accessory/samsung'>Samsung</Link></li>
          <li><Link onClick={handleClick} to='/accessory/keyboard'>KeyBoard</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default SortBy