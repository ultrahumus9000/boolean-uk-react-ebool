import { useParams } from "react-router";
import { Product } from "./Product";
export default function Products({ filteredProducts }) {
  return (
    <main>
      <section className="products-container main-wrapper">
        <ul className="products-container__list">
          {filteredProducts.map((product) => {
            return (
              <li key={product.id}>
                <Product product={product} />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
