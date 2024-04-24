import { createContext, useState } from "react";
import AllProduct from "../assets/Data/AllProduct";

const getDefaultCart =()=> {
  let cart = {};
  for (let index = 0; index < AllProduct.length+1; index++) {
    cart[index] = 0;
  }
  return cart;
}

export const ShopContext = createContext(null);

const ShopContextProvider = (p) => {
  
  const [cartItem, setCartItem] = useState(getDefaultCart());
  const addToCart =(itemId)=> {
    setCartItem((prev)=>({...prev, [itemId]:prev[itemId]+1}))
    console.log(cartItem);
  }
  const removeToCart =(itemId)=> {
    setCartItem((prev)=>({...prev, [itemId]:prev[itemId]-1}))
  }

  const contextValue = { AllProduct, cartItem, addToCart, removeToCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {
       p.children
      }
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
