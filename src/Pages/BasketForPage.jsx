import Baskets from "../components/Baskets";
export default function BasketPage({ baskets, setBaskets, products }) {
  return (
    <Baskets baskets={baskets} setBaskets={setBaskets} products={products} />
  );
}
