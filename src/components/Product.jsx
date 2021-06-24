import { Link, useParams } from "react-router-dom";

export function Product({ product }) {
  let productID = product.id;
  console.log(productID);
  return (
    <Link to={`/products/${productID}`}>
      <article className="product-item">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
      </article>
    </Link>
  );
}
