import data from '../../assets/Popular_Product'; 
import Item from '../Item/item';

const newCollection = () => {
  return (
    <div className='main-product'>
      <div className="product">
        <h1>New Collection</h1>
        <hr />
        <div className='product-item-main'>
          <div className="product-item">
            {data.map((e) => (
              <Item
                key={e.id}
                id={e.id}
                img={e.img}
                brand={e.brand}
                title={e.title}
                price={e.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default newCollection