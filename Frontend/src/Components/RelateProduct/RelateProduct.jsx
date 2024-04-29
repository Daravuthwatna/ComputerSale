import { useContext, useState } from 'react'
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'

const RelateProduct = () => {
  const { AllProduct } = useContext(ShopContext)

  const [isVisibe, setIsVisibe] = useState(4)

  const handleLoadMore =()=> {
    setIsVisibe((prevValue)=>prevValue + 4);
  }
  return (
    <div className='main-product'>
    <div className="product">
      <h1>Relate Product</h1>
      <hr />
      <div className='product-item-main'>
        <div className="product-item">
          {AllProduct.slice(0, isVisibe).map((e) => (
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
    <div className='load-more'>
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  </div>
  )
}

export default RelateProduct