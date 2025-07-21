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
    if(action.type === 'ADD_ITEM') {
    }

    if(action.type === 'UPDATE_ITEM') {
         const updatedItems = [...state.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.payload.productId
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
        updatedItems.push({
          id: action.payload,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        ...state, // not needed here because we have only one value
        items: updatedItems,
      };
    }

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
    shoppingCartDispatch({
        type: 'ADD_ITEM',
        payload: id
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
        type: 'UPDATE_ITEM',
        pyaload: {
            productId,
            amount
        }
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