import './ProductDisplay.css'
import {useNavigate} from 'react-router-dom';
import Recomment from '../Recomment/Recomment'
import Comment from '../Comment/Comment';
import Breadcurm from '../Breadcurm/Breadcurm.jsx'
import { useContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext.jsx';

const ProductDisplay = (e) => {

  const {product} = e
  const {addToCart} = useContext(ShopContext);

  const [isCommentClicked, setIsCommentClicked] = useState(false);
  const [isShow, setIsShow] = useState('Product')


  const handleClick = (isComment) => {
    setIsCommentClicked(isComment);
  };

  const navigate = useNavigate();

  const handlePrev = () => {
    if (product.id === 1) {
      navigate(`/product/${product.id + 63}`);
    } else {
      navigate(`/product/${product.id - 1}`);
    }
  };

  const handleNext = () => {
    if (product.id === 64) {
      navigate(`/product/${product.id - 63}`);
    } else {
      navigate(`/product/${product.id + 1}`);
    }
  };

  return (
  <div className='container-product'>
    <div className="products">
      <div className="left-product">
        <Breadcurm product={product}/>
        <div className="main-picture">
          <img src={product.img} alt="" />
        </div>
        <div className="prodct-view-next">
            <div className="product-button">
              <i onClick={handlePrev} className="fa-solid fa-circle-chevron-left"></i>
            </div>
            <div className='product-button'>
              <i onClick={handleNext} className="fa-solid fa-circle-chevron-right"></i>
            </div>
          </div>
      </div>
      <div className="right-product">
        <ul className='product-hide-show'>
          <li onClick={() => {
            handleClick(false)
            setIsShow('Product')
            }}>
            Product{isShow === 'Product' ? <hr/> : <></>}
          </li>
          <li onClick={() => {
            handleClick(true)
            setIsShow('Comment')
            }}>
            Comment{isShow === 'Comment' ? <hr/> : <></>}
          </li>
        </ul>
          {isCommentClicked ? (
            <Comment />
          ) : (
          <div className='main-product-detail'>
            <div className="detail-product">
              <h1>{product.title} - <span>{product.brand}</span></h1>
              <ul className='list-detail'>
                <li><p><span>Core: </span>{product.space}</p></li>
                <li><p><span>Size: </span>{product.size}</p></li>
                <li><p><span>Price: </span>{product.price} $</p></li>
              </ul>
              <button onClick={()=>addToCart(product.id)}>
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          )}
        <div className="recomment-product">
          <Recomment/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductDisplay