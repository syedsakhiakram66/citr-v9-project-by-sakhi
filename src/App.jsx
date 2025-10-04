import * as ReactDOM from "react-dom/client";
import { StrictMode, useState } from "react";
import Order from "./components/Order";  
import PizzaOfTheDay from "./components/PizzaOfTheDay";
import Header from "./components/Header";
import { CartContext } from "./components/contexts";
   

const App = () => {
  const cartHook = useState([]);
  return (
    <div>
      <StrictMode>
    <CartContext.Provider value={cartHook}>
      <Header />
      <Order />
      <PizzaOfTheDay />
    </CartContext.Provider>
      </StrictMode>
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));


