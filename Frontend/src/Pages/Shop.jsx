import Hero from "../Components/Hero/Hero"
import NewCollection from "../Components/NewCollection/NewCollection"
import NewProduct from "../Components/NewProduct/NewProduct"
import Offer from "../Components/Offers/Offer"
import Recomment from "../Components/Recomment/Recomment"

const Shop = () => {
  return (
    <>
      <Hero/>
      <Recomment/>
      <NewProduct/>
      <Offer/>
      <NewCollection/>
    </>
  )
}

export default Shop