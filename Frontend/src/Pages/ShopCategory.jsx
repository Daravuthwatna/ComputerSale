import data from '../assets/All_Product'
import Item from '../Components/Item/item.jsx'

const ShopCategory = (e) => {
  return (
    <div className='main-product'>
      <img className='shopcategory-banner' src={e.banner} alt="" />
      <div className="product">
        <div className='product-item-main'>
          <div className="product-item">
            {data.map((item, i) => {
              if (e.category === item.category) {
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
    </div>
  )
}

export default ShopCategory