import { Link } from 'react-router-dom'
import './Breadcurm.css'

const Breadcurm = (e) => {

  const {product} = e

  return (
    <div className='main-breadcurm'>
      <div className="breadcurm">
      <span>
        <Link to="/">SHOP</Link>
        <i className="fa-solid fa-chevron-right"></i>
      </span>
      <span>
        <>{product.cartgory}</>
        <i className="fa-solid fa-chevron-right"></i>
      </span>
      <span>
        <>{product.brand}</>
        <i className="fa-solid fa-chevron-right"></i>
      </span>  
      <span>
        <>{product.title}</>
      </span> 
      </div>
    </div>
  )
}

export default Breadcurm