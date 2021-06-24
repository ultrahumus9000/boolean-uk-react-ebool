import { useParams } from "react-router-dom";

export function SingleProduct({ products }) {
  const { productid } = useParams();

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
          //   style="border-color: var(--yellow);"
        >
          <h2>{filterdProduct.title}</h2>
          <p>{filterdProduct.description}</p>
          <p>{filterdProduct.price}</p>
          {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
          <button>Add to basket</button>
        </div>
      </section>
    </main>
  );
}
