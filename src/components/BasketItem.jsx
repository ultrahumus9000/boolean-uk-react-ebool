export default function BasketItem({ baskets, setBaskets, products, basket }) {
  console.log(products);
  if (!products) {
    return (
      <main>
        <h2>Loading...</h2>
      </main>
    );
  }
  let filterdBasketItem = products.find(
    (product) => product.title === basket.title
  );
  console.log(filterdBasketItem);

  let mapData = Array(basket.qty + 1)
    .fill()
    .map((item, index) => index);
  console.log(mapData);
  return (
    <article className="className-container__item">
      <img
        src={filterdBasketItem.image}
        alt={filterdBasketItem.title}
        width="90"
      />
      <p>{filterdBasketItem.title}</p>
      <p>
        Qty:
        <select
          onChange={(e) => {
            let updatedBasketItems = baskets.map((eachBasket) => {
              if (eachBasket.title === basket.title) {
                return { ...basket, qty: e.target.value };
              }
              return eachBasket;
            });
            setBaskets(updatedBasketItems);
          }}
        >
          {mapData.map((index) => (
            <option>{index}</option>
          ))}
        </select>
      </p>
      <p>Item total: £{basket.qty * filterdBasketItem.price}</p>
    </article>
  );
}
