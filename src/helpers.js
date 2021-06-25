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
