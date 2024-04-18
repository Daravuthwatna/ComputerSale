import './display.css'

const display = (e) => {
  const {product} = e
  return (
    <div className='main-products'>
      <div className="left-product">
        <div className="main-picture">
          <img src={product.img} alt="" />
        </div>
        <ul className="small-picture">
          <li><img src={product.img} alt="" /></li>
          <li><img src={product.img} alt="" /></li>
          <li><img src={product.img} alt="" /></li>
          <li><img src={product.img} alt="" /></li>
        </ul>
      </div>
      <div className="right-product">
        <p>Brand : <span>{product.brand}</span></p>
        <p>Model : <span>{product.title}</span></p>
        <p>Core : <span>{product.core}</span></p>
        <p>Size : <span>{product.invent}</span></p>
        <p>Price : <span>{product.price}</span></p>
        <button>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  )
}

export default display