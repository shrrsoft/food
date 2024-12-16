"use client";
import { getProductData, productList } from "@/data/items";
import { createContext, useContext, useState, useEffect } from "react";

export const cartContext = createContext({
  items: [],
  login: [],
  getProductQuantity: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteFromCart: () => {},
  getTotalAmount: () => {},
});

export const useCartContext = () => {
  return useContext(cartContext);
};

const isLoginFromLocalStorage = localStorage.getItem("isLogin");

export function CartProvider({ children }) {
  const [isLogin, setIsLogin] = useState(JSON.parse(isLoginFromLocalStorage));

  // useEffect(() => {
  //   let isLoginFromLocalStorage = localStorage.getItem("isLogin");
  //   if (isLoginFromLocalStorage != "true") {
  //     setIsLogin(false);
  //   } else {
  //     setIsLogin(true);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("isLogin", JSON.stringify(isLogin));
  }, [isLogin]);

  useEffect(() => {
    let cartFromLocalStorage = localStorage.getItem("cartItems");
    if (cartFromLocalStorage == "null") {
      setCartProducts([]);
    } else {
      setCartProducts(JSON.parse(cartFromLocalStorage));
    }
  }, []);

  let [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartProducts));
  }, [cartProducts]);

  function getProductQuantity(id) {
    const quantity = cartProducts?.find((item) => id === item.id)?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    {
      return quantity;
    }
  }

  function addItemToCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: id, quantity: 1 }]);
    } else {
      setCartProducts(
        cartProducts.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((item) => {
        return item.id != id;
      })
    );
  }

  function removeItemFromCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  }

  function getTotalAmount() {
    let totalAmount = 0;
    cartProducts.map((item) => {
      const productData = getProductData(item.id);
      totalAmount += productData.price * item.quantity;
    });
  }

  const contextValue = {
    items: cartProducts,
    isLogin: isLogin,
    setIsLogin: setIsLogin,
    getProductQuantity,
    addItemToCart,
    removeItemFromCart,
    deleteFromCart,
    getTotalAmount,
  };
  return (
    <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
  );
}
