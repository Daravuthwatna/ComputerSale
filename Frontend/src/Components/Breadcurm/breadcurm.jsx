import { Link } from 'react-router-dom'
import './breadcurm.css'

const breadcurm = (e) => {
  const {product} = e
  return (
    <div className="breadcurm">
    <span>
      <Link to="/">SHOP</Link>
      <i className="fa-solid fa-chevron-right"></i>
    </span>
    <span>
      <>{product.category}</>
      <i className="fa-solid fa-chevron-right"></i>
    </span>
    <span>{product.title}</span>  
  </div>
  )
}

export default breadcurm