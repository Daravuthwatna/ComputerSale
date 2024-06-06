import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop.jsx'
import ShopCartgory from './Pages/ShopCartgory.jsx'
import ShopBrand from './Pages/ShopBrand.jsx'
import ShopSpace from './Pages/ShopSpace.jsx'
import Product from './Pages/Product.jsx'
import Cart from './Pages/Cart.jsx'
import LoginSign from './Pages/LoginSign.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import BN1 from './assets/ImgBanner/BN1.png'
import BN2 from './assets/ImgBanner/BN2.png'
import BN3 from './assets/ImgBanner/BN3.png'
import BN5 from './assets/ImgBanner/BN5.png'
import BN6 from './assets/ImgBanner/BN6.png'
import BN7 from './assets/ImgBanner/BN7.png'
import BN8 from './assets/ImgBanner/BN8.png'
import BN9 from './assets/ImgBanner/BN9.png'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/laptop' element={<ShopCartgory cartgory='laptop' banner={BN2} />}/>
        <Route path='/laptop/asus' element={<ShopBrand brand='Asus' banner={BN7}/>} />
        <Route path='/laptop/msi' element={<ShopBrand brand='MSI' banner={BN3}/>} />
        <Route path='/laptop/dell' element={<ShopBrand brand='Dell' banner={BN8}/>} />
        <Route path='/laptop/Lenovo' element={<ShopBrand brand='Lenovo' banner={BN5}/>} />
        <Route path='/accessory' element={<ShopCartgory cartgory='accessory' banner={BN1} />}/>
        <Route path='/accessory/razer' element={<ShopBrand brand='Razer' banner={BN1} />}/>
        <Route path='/accessory/adata' element={<ShopBrand brand='Adata' banner={BN6} />}/>
        <Route path='/accessory/tp-Link' element={<ShopBrand brand='Tp-Link' banner={BN1} />}/>
        <Route path='/accessory/keychron' element={<ShopBrand brand='KeyChron' banner={BN1} />}/>
        <Route path='/accessory/samsung' element={<ShopBrand brand='Samsung' banner={BN9} />}/>
        <Route path='/accessory/keyboard' element={<ShopSpace space='KeyBoard' banner={BN9} />}/>
        <Route path='/accessory/mouse' element={<ShopSpace space='Mouse' banner={BN1} />}/>
        <Route path='/accessory/ssd' element={<ShopSpace space='SSD' banner={BN6} />}/>
        <Route path='/accessory/adwifi' element={<ShopSpace space='Adaptor WIFI' banner={BN2} />}/>
        <Route path='/accessory/adblue' element={<ShopSpace space='Adaptor Bluetooth' banner={BN2} />}/>
        <Route path='/product' element={<Product/>} >
          <Route path=':id' element={<Product/>} />
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSign/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App