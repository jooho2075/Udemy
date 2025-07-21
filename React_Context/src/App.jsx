import Header from "./components/Header";
import Shop from "./components/Shop";
import Product from './components/Product.jsx';
import {DUMMY_PRODUCTS} from './dummy-products.js';
import  CartContextProvider from "./store/shopping-cart-context.jsx";

function App() {
  

  return (
    <CartContextProvider> {/* 지금 방식에서 작동하지 않을 경우 구방식인 CartContext.Provider 사용*/}
      <Header/>
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
