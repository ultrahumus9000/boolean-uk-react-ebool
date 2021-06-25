import { useHistory } from "react-router";
import { useEffect } from "react";

export function calculateTotal(baskets, products) {
  let total = 0;
  for (const basket of baskets) {
    let findProduct = products.find(
      (product) => product.title === basket.title
    );
    total = total + basket.qty * findProduct.price;
  }
  return total;
}

export function useHistoryHook() {
  let history = useHistory();
  useEffect(() => {
    let intervalID = setTimeout(() => {
      history.push("/");
    }, 3000);
    return () => clearTimeout(intervalID);
  }, []);
}
