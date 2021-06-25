import { Redirect, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import { SingleProduct } from "./Pages/SingleProduct";
import CatagoryPage from "./Pages/CatagoryPage";
import BasketPage from "./Pages/BasketForPage";
import ProductsPage from "./Pages/ProductsPage";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [baskets, setBaskets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((resp) => resp.json())
      .then(setProducts);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/products" />
          </Route>
          <Route path="/products" exact>
            <ProductsPage products={products} />
          </Route>
          <Route path="/products/:productid" exact>
            <SingleProduct
              products={products}
              baskets={baskets}
              setBaskets={setBaskets}
            />
          </Route>
          <Route path="/categories" exact>
            <CatagoryPage />
          </Route>
          <Route path="/categories/:catagoryid" exact>
            <ProductsPage products={products} />
          </Route>
          <Route path="/basket" exact>
            <BasketPage
              baskets={baskets}
              setBaskets={setBaskets}
              products={products}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
