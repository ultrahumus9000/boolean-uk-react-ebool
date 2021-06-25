import { calculateTotal } from "../helpers";
import BasketItem from "./BasketItem";
export default function Baskets({ baskets, setBaskets, products }) {
  let total = calculateTotal(baskets, products);
  console.log(baskets);
  return (
    <main>
      <section className="basket-container">
        <h2>Your Basket</h2>
        <ul>
          {baskets.map((basket, index) => (
            <li key={index}>
              <BasketItem
                baskets={baskets}
                setBaskets={setBaskets}
                basket={basket}
                products={products}
              />
            </li>
          ))}
        </ul>

        <h3>Your total: £{total.toFixed(2)}</h3>
      </section>
    </main>
  );
}
