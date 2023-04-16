import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
const [closed, setClosed]= useState(true);

  return (
    
    <CartProvider>
      {!closed && <Cart setClosed={setClosed}/>}
     <Header setClosed={setClosed}/>
     <main>
      <Meals/>
     </main>
    
    </CartProvider>
  );
}

export default App;
