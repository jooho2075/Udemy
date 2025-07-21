import { createContext, useState, useReducer } from "react";

import { DUMMY_PRODUCTS } from "../dummy-products.js";

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
    updateItemQuantity: () => {},
}); // createContext로 생성된 값이 실제 react component를 포함한 객체가 됨

// CartContextProvider 함수 바깥에 만든 이유
// => 앞서 만든 함수가 실행될 때마다 이 새로운 함수가 재생성되지 않도록 하기 위함
function shoppingCartReducer(state, action) { // 인수가 2개인 이유 : action이 dispatch를 통해 보내진 후에 react가 reducer 함수를 호출할 것이기 때문
    return state;
};

// context data를 관리하고 그 date를 app에 제공하는 등 장바구니 쪽 context와 연관
export default function CartContextProvider({children}) {
    const [shoppingCartState, shoppingCartDispatch] = useReducer(
        shoppingCartReducer,
    {
        items: [],
    }
);

    const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  function handleAddItemToCart(id) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  }

  const ctxValue = {
    items: shoppingCartState.items,
    addItemtoCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity
  };

  return <CartContext.Provider value={ctxValue}>
    {children}
  </CartContext.Provider>
}