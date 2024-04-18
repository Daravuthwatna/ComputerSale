import './Pages/css/productList.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory';
import ShopCategoryList from './Pages/ShopCartgoryList';
import LoginSign from './Pages/LoginSign';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import Banner1 from './assets/Banner/banner1.png'
import Banner2 from './assets/Banner/banner2.png'

const App = () => {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/computer' element={<ShopCategory banner={Banner1} category="Computer"/>}/>
        <Route path='/computer/asus' element={<ShopCategoryList banner={Banner1} brand="Asus"/>}/>
        <Route path="/computer/msi" element={<ShopCategoryList banner={Banner1} brand="MSI"/>}/>
        <Route path='/computer/dell' element={<ShopCategoryList banner={Banner1} brand="Dell"/>}/>
        <Route path='/computer/lenovo' element={<ShopCategoryList banner={Banner1} brand="Lenovo"/>}/>

        <Route path='/accessory' element={<ShopCategory banner={Banner2} category="Accessory"/>}/>
        <Route path='/accessory/dellAC' element={<ShopCategoryList banner={Banner2} brand="dell"/>}/>
        <Route path='/accessory/adata' element={<ShopCategoryList banner={Banner2} brand='Adata'/>}/>
        <Route path='/accessory/tp-link' element={<ShopCategoryList banner={Banner2} brand='Tp-Link'/>}/>
        <Route path='/accessory/razer' element={<ShopCategoryList banner={Banner2} brand="Razer"/>}/>

        <Route path='/login' element={<LoginSign />}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':id' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;