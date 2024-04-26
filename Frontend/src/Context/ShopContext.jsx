import { createContext, useState } from "react";
import AllProduct from "../assets/Data/AllProduct";

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < AllProduct.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
}

export const ShopContext = createContext(null);

const ShopContextProvider = (p) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItem);
  }

  const removeToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    console.log(cartItem);
  }

  const removeAllCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: 0}));
    console.log(cartItem);
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = AllProduct.find((product) => product.id === Number(item));
        totalAmount += itemInfo.price * cartItem[item];
      }
    }
    return totalAmount;
  }

  const getTotalIcon = ()=>{
    let totalItem = 0
    for(const item in cartItem){
      if(cartItem[item]>0){
        totalItem += cartItem[item]
      }
    }
    return totalItem
  }

  const contextValue = { AllProduct, cartItem, addToCart, removeToCart, getTotalCartAmount, getTotalIcon, removeAllCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {p.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
