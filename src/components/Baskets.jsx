import { calculateTotal } from "../helpers";
import BasketItem from "./BasketItem";
export default function Baskets({ baskets, setBaskets, products }) {
  let total = calculateTotal(baskets, products);
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
        {/* <!-- Basket total is calculated using each item's total from above --> */}
        <h3>Your total: £{total}</h3>
      </section>
    </main>
  );
}
