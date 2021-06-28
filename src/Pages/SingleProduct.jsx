import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageNotFound from "./PageNotFound";

export function SingleProduct({ products, setBaskets, baskets }) {
  const { productid } = useParams();

  // use fetch to make sure we always get the newest data

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/products/${productid}`)
      .then((resp) => resp.json())
      .then(setProduct);
  }, [productid]);

  function addBaskets(product) {
    let findBasketItem = baskets.find((item) => item.title === product.title);
    if (findBasketItem === undefined) {
      let newBasketItem = {
        title: product.title,
        qty: 1,
      };
      setBaskets([...baskets, newBasketItem]);
    } else {
      if (findBasketItem.qty < 11) {
        setBaskets(
          baskets.map((item) => {
            if (item.title === product.title) {
              return { ...item, qty: item.qty + 1 };
            }
            return item;
          })
        );
      } else {
        return;
      }
    }
  }

  if (product === null || product.title === undefined) {
    return <PageNotFound></PageNotFound>;
  }

  console.log(product);

  return (
    <main>
      <section className="product-detail main-wrapper">
        <img src={product.image} alt={product.title} />
        <div
          className="product-detail__side"
          style={{ borderColor: "var(--yellow);" }}
        >
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}

          <button onClick={() => addBaskets(product)}>
            <Link to="/basket">Add to basket</Link>
          </button>
        </div>
      </section>
    </main>
  );
}
