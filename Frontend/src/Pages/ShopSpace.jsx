import './Style/ShopCartgory.css'
import Item from '../Components/Item/Item'
import Recomment from '../Components/Recomment/Recomment'
import {ShopContext} from '../Context/ShopContext'
import { useContext, useState } from 'react'
import SortBySpace from '../Components/SortBy/SortBySpace.jsx'

const ShopSpace = (e) => {

  const { AllProduct } = useContext(ShopContext)

  const [isSort, setIsSort] = useState(false)

  const handleSort =()=> {
    if (isSort === false) {
      setIsSort(<SortBySpace/>)
    } else {
      setIsSort(!<SortBySpace/>)
    }
  }

  return (
    <div className='main-product'>
    <img className='shopcategory-banner' src={e.banner} alt="" />
    <div className="shopcartgory-indexSort">
      <p>
        <span>Showing 1-12</span> out of 36 products
      </p>
      <div className="shopcartgory-sort" onClick={handleSort}>
        <span>Sort by</span>
        {isSort === false ? <></>:<SortBySpace/>}
      </div>
    </div>
    <div className="product">
      <div className='product-item-main'>
        <div className="product-item">
          {AllProduct.map((item, i) => {
            if (e.space === item.space) {
              return (
                <Item
                key={i.id}
                id={item.id}
                img={item.img}
                brand={item.brand}
                title={item.title}
                price={item.price}
                />
              )
            }
          })}
        </div>
      </div>
    </div>
    <Recomment/>
  </div>
  )
}

export default ShopSpace