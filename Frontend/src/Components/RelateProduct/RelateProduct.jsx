import RelProduct from '../../assets/Data/RelateProduct'
import Item from '../Item/Item'

const RelateProduct = () => {
  return (
    <div className='main-product'>
    <div className="product">
      <h1>Relate Product</h1>
      <hr />
      <div className='product-item-main'>
        <div className="product-item">
          {RelProduct.map((e) => (
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

export default RelateProduct