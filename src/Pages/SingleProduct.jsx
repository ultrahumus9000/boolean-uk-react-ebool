import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function SingleProduct({ products, setBaskets, baskets }) {
  const { productid } = useParams();

  // use fetch to make sure we always get the newest data

  // const [product, setProduct] = useState(null);

  function addBaskets(filterdProduct) {
    let findBasketItem = baskets.find(
      (item) => item.title === filterdProduct.title
    );
    if (findBasketItem === undefined) {
      let newBasketItem = {
        title: filterdProduct.title,
        qty: 1,
      };
      setBaskets([...baskets, newBasketItem]);
    } else {
      if (findBasketItem.qty < 4) {
        setBaskets(
          baskets.map((item) => {
            if (item.title === filterdProduct.title) {
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

  let newId = parseInt(productid);

  let filterdProduct = products.find((product) => product.id === newId);
  if (!filterdProduct) {
    return (
      <main>
        <h1>Product Not Found</h1>
      </main>
    );
  }

  return (
    <main>
      <section className="product-detail main-wrapper">
        <img src={filterdProduct.image} alt={filterdProduct.title} />
        <div
          className="product-detail__side"
          style={{ borderColor: "var(--yellow);" }}
        >
          <h2>{filterdProduct.title}</h2>
          <p>{filterdProduct.description}</p>
          <p>{filterdProduct.price}</p>
          {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}

          <button onClick={() => addBaskets(filterdProduct)}>
            <Link to="/basket">Add to basket</Link>
          </button>
        </div>
      </section>
    </main>
  );
}
