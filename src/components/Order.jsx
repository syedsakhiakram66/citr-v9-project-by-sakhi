import { useState, useEffect, useContext } from "react";
import Pizza from "./Pizza";
import Cart from "./Cart";
import { CartContext } from "./contexts";
const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Order() {
  // const pizzaType = "pepperoni";
  // const pizzaSize = "M";
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [cart, setCart] = useContext(CartContext);
  const [loading, setLoading] = useState(false); // this helps us with ui, as we will be now waiting for the requests we do to the api

  async function checkout() {
    setLoading(true)
    
    await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart, 

      }),
    })

    setCart([]);
    setLoading(false)
  
  }

  useEffect(() => {
    fetchPizzaTypes();
  }, []); // the empty array means it will only run once when the component mounts

  async function fetchPizzaTypes() {
    const pizzaRes = await fetch("/api/pizzas");
    const pizzaJson = await pizzaRes.json();
    setPizzaTypes(pizzaJson);
    setLoading(false);
  }

  let price, selectedPizza;

  if (!loading) {
    selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
    // Once the loading is over, update the selectedPizza variable
    // to the pizza object that matches the selected pizzaType ID
    if (selectedPizza) {
      price = intl.format(selectedPizza.sizes[pizzaSize]);
      // Once the loading is over, update the price variable to the formatted price
      // of the selected pizza size
    }
  }

  return (
    <div className="order-page">
    <div className="order">
      <h2>Create Order</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCart([...cart, { pizza: selectedPizza, size: pizzaSize, price }]);
        }}
      >
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select
              onChange={(e) => setPizzaType(e.target.value)}
              name="pizza-type"
              value={pizzaType}
            >
              {pizzaTypes.map((pizza) => (
                <option key={pizza.id} value={pizza.id}>
                  {pizza.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input
                  checked={pizzaSize === "S"}
                  onChange={(e) => setPizzaSize(e.target.value)}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "M"}
                  onChange={(e) => setPizzaSize(e.target.value)}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "L"}
                  onChange={(e) => setPizzaSize(e.target.value)}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
        </div>

        {selectedPizza && (
          <div className="order-pizza">
            <Pizza
              name={selectedPizza.name}
              description={selectedPizza.description}
              image={selectedPizza.image}
            />
            <p>{price}</p>
          </div>
        )}
      </form>
  
    </div>
        {
        loading ? <p>Loading...</p> : <Cart cart={cart} />
      }
    </div>
  );
}
