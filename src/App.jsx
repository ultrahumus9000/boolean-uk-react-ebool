import { Redirect, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import { SingleProduct } from "./Pages/SingleProduct";
import CatagoryPage from "./Pages/CatagoryPage";
import BasketPage from "./Pages/BasketForPage";
import ProductsPage from "./Pages/ProductsPage";
import React, { useEffect, useState } from "react";
import PageNotFound from "./Pages/PageNotFound";
import Signin from "./Pages/SigninPage";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>;

export const SearchContext = React.createContext({});

function App() {
  const [products, setProducts] = useState([]);
  const [baskets, setBaskets] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((resp) => resp.json())
      .then(setProducts);
  }, []);

  return (
    <>
      <SearchContext.Provider value={{ search, setSearch }}>
        <Header user={user} />
      </SearchContext.Provider>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/products" />
          </Route>
          <Route path="/products" exact>
            <ProductsPage
              products={products}
              search={search}
              setProducts={setProducts}
            />
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
          <Route path="/signin">
            <Signin setUser={setUser} />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
