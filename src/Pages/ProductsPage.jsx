import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Products from "../components/Products";

export default function ProductsPage({ products, search, setProducts }) {
  const { catagoryid } = useParams();
  let filteredProducts = products;
  let newCategoryId = parseInt(catagoryid);
  if (catagoryid) {
    filteredProducts = filteredProducts.filter(
      (product) => product.categoryId === newCategoryId
    );
  }

  useEffect(() => {
    fetch(`http://localhost:4000/products?q=${search}`)
      .then((resp) => resp.json())
      .then(setProducts);
  }, [search, setProducts]);

  return <Products filteredProducts={filteredProducts} />;
}
