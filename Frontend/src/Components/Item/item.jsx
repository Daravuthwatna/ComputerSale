import './item.css'
import { Link } from 'react-router-dom';

const Item = (p) => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='item'>
      <img src={p.img} alt="" />
      <h2>{p.price}</h2>
      <h3>{p.brand}</h3>
      <h4>{p.title}</h4>
      <Link to={`/product/${p.id}`} onClick={handleLinkClick}>
        <button>View</button>
      </Link>
    </div>
  );
}

export default Item;
