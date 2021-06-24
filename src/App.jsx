import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import { SingleProduct } from "./Pages/SingleProduct";
import CatagoryPage from "./Pages/CatagoryPage";
import BasketPage from "./Pages/BasketForPage";
import ProductsPage from "./Pages/ProductsPage";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((resp) => resp.json())
      .then(setProducts);
  }, []);

  console.log(products);
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <ProductsPage products={products} />
          </Route>
          <Route path="/products" exact>
            <ProductsPage products={products} />
          </Route>
          <Route path="/products/:productid" exact>
            <SingleProduct products={products} />
          </Route>
          <Route path="/category" exact>
            <CatagoryPage />
          </Route>
          <Route path="/categories/:catagoryid" exact>
            <ProductsPage products={products} />
          </Route>
          <Route path="/basket" exact>
            <BasketPage />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
