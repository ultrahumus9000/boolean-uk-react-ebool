export default function BasketItem({ baskets, setBaskets, products, basket }) {
  console.log(products);
  console.log(baskets);
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
  console.log(typeof basket.qty);
  console.log(filterdBasketItem);
  console.log(basket);
  let mapData = Array(11)
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
          value={basket.qty}
          onChange={(e) => {
            let updatedBasketItems = [];
            if (parseInt(e.target.value) === 0) {
              updatedBasketItems = baskets.filter((item) => {
                return item.title !== basket.title;
              });
              console.log(updatedBasketItems);
              setBaskets(updatedBasketItems);
            } else {
              updatedBasketItems = baskets.map((eachBasket) => {
                if (eachBasket.title === basket.title) {
                  return { ...basket, qty: parseInt(e.target.value) };
                }
                return eachBasket;
              });
              setBaskets(updatedBasketItems);
            }
          }}
        >
          {mapData.map((indexForOption) => (
            <option>{indexForOption}</option>
          ))}
        </select>
      </p>
      <p>Item total: £{(basket.qty * filterdBasketItem.price).toFixed(2)}</p>
    </article>
  );
}
