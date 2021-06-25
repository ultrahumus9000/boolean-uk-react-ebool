import { useParams } from "react-router-dom";
import Products from "../components/Products";

export default function ProductsPage({ products }) {
  const { catagoryid } = useParams();
  let filteredProducts = products;
  let newCategoryId = parseInt(catagoryid);
  if (catagoryid) {
    filteredProducts = filteredProducts.filter(
      (product) => product.categoryId === newCategoryId
    );
  }
  return <Products filteredProducts={filteredProducts} />;
}
