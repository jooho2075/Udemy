import { createContext } from "react";

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
}); // createContext로 생성된 값이 실제 react component를 포함한 객체가 됨

