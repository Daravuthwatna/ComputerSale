import { useParams } from 'react-router-dom'
import ProductDisplay from '../Components/Display/ProductDisplay'
import AllProduct from '../assets/Data/AllProduct'
import RelateProduct from '../Components/RelateProduct/RelateProduct'

const Product = () => {
  const Products = AllProduct
  const { id } = useParams()
  const product = Products.find((product => product.id === Number(id)))
  return (
    <>
      <ProductDisplay product={product}/>
      <RelateProduct/>
    </>
  )
}

export default Product