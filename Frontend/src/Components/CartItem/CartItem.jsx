import { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';

const CartItem = () => {
  const { AllProduct, removeToCart, cartItem, getTotalCartAmount, addToCart } = useContext(ShopContext);

  const handleRemoveFromCart = (productId) => {
    removeToCart(productId);
  };

  const handleAddFromCart = (productId) => {
    addToCart(productId);
  };

  return (
    <div className='cartitem-container'>
      <div className="cartitem">
        <div className="cartitem-main">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>View</p>
          <p>Remove</p>
        </div>
        <hr />
        {AllProduct.map((product) => {
          if (cartItem[product.id] > 0) {
            return (
              <div className="cartitem-list" key={product.id}>
                <img src={product.img} alt="" />
                <p>{product.title}</p>
                <p>${product.price}</p>
                <div className='cartitem-quantity'>
                  <button onClick={() => handleRemoveFromCart(product.id)} className='cartitem-quantity-icon'><i className="fa-solid fa-minus"></i></button>
                  <button className='cartitem-quantity-number'>{cartItem[product.id]}</button>
                  <button onClick={() => handleAddFromCart(product.id)} className='cartitem-quantity-icon'><i className="fa-solid fa-plus"></i></button>
                </div>
                <p>${product.price * cartItem[product.id]}</p>
                <Link to={`/product/${product.id}`}>
                  <i className="fa-solid fa-eye"></i>
                </Link>
                <button className='cartitem-remove' onClick={() => handleRemoveFromCart(product.id)}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <hr />
              </div>
            );
          }
          return null;
        })}
        <div className='cartitem-down-container'>
            <div className="cartitem-total">
              <h1>Cart Total</h1>
              <div>
                <div className="cartitem-total-item">
                  <p>Sub Total</p>
                  <p className='total-item'>${getTotalCartAmount()}</p>
                </div>
                <div className="cartitem-total-item">
                <p>Shipping Fee</p>
                <p className='total-item'>Free</p>
                </div>
                <hr />
                <div className="cartitem-total-item">
                <p>Total</p>
                <p className='total-item'>${getTotalCartAmount()}</p>
              </div>
            </div>
          </div>
          <div className='cartitem-promo'>
              <h1>Enter the PromoCode</h1>
              <div className="cartitem-promobox">
                <input type="text" placeholder='Promo Code' />
                <button>Submit</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
