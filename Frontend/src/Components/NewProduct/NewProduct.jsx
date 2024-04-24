import NewProduct from '../../assets/Data/NewProduct'
import Item from '../Item/Item'

const NewPro = () => {
  return (
    <div className='main-product'>
    <div className="product">
      <h1>New Product</h1>
      <hr />
      <div className='product-item-main'>
        <div className="product-item">
          {NewProduct.map((e) => (
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

export default NewPro