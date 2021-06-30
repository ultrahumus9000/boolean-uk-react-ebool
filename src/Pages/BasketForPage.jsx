import Baskets from "../components/Baskets";
export default function BasketPage({ products, baskets, setBaskets }) {
  return (
    <Baskets products={products} baskets={baskets} setBaskets={setBaskets} />
  );
}
