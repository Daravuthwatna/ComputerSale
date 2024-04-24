import { Link } from 'react-router-dom'
import './drop.css'

const dropLaptop = () => {
  return (
    <div className='drop'>
      <ul className="product-part">
        <li><h2>Brend</h2></li>
        <li><Link to='/laptop/asus'>Asus</Link></li>
        <li><Link to='/laptop/msi'>MSI</Link></li>
        <li><Link to='/laptop/dell'>Dell</Link></li>
        <li><Link to='/laptop/Lenovo'>Lenovo</Link></li>
      </ul>
    </div>
  )
}

export default dropLaptop