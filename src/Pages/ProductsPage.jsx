import { useParams } from "react-router-dom";
import Products from "../components/Products";

export default function ProductsPage({ products }) {
  const { catagoryid } = useParams;
  let filteredProducts = products;
  console.log(catagoryid);
  if (catagoryid) {
    filteredProducts = filteredProducts.filter(
      (product) => product.categoryId === catagoryid
    );
    return filteredProducts;
  }
  return <Products filteredProducts={filteredProducts} />;
}
