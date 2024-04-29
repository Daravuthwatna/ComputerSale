import './Style/ShopCartgory.css'
import Item from '../Components/Item/Item.jsx'
import Recomment from '../Components/Recomment/Recomment.jsx'
import { useContext, useState } from 'react'
import {ShopContext} from '../Context/ShopContext.jsx'
import SortByBrand from '../Components/SortBy/SortByBrand.jsx'

const ShopCartgory = (e) => {

  const { AllProduct } = useContext(ShopContext)

  const [isSort, setIsSort] = useState(false)

  // const [isVisibe, setIsVisibe] = useState(8)

  // const handleLoadMore =()=> {
  //   setIsVisibe((prevValue)=>prevValue + 4);
  // }

  const handleSort =()=> {
    if (isSort === false) {
      setIsSort(<SortByBrand/>)
    } else {
      setIsSort(!<SortByBrand/>)
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
        {isSort === false ? <></>:<SortByBrand/>}
      </div>
    </div>
    <div className="product">
      <div className='product-item-main'>
        <div className="product-item">
        {AllProduct.map((item, i) => {
          {/* {AllProduct.slice(0, isVisibe).map((item, i) => {  */}
            if (e.cartgory === item.cartgory) {
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
    {/* <div className='load-more'>
      <button onClick={handleLoadMore}>Load More</button>
    </div> */}
    <Recomment/>
  </div>
  )
}

export default ShopCartgory