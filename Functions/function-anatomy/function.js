/*\


keyword  nombre parameters
funtion suma (a, b) {
  return  a + b  // body/return (opcional)
}


suma(3,5)  // call/llamado con su argumento

*/
function CalculatedDiscountedPrice(price, discountPercentage) {
  const discount = (price * discountPercentage) / 100;
  const priceWithDiscount = price - discount;

  return priceWithDiscount;
}

const originalPrice = 100;
const discountPercentage = 20;
const finalPrice = CalculatedDiscountedPrice(originalPrice, discountPercentage);

console.log(`Original price: ${originalPrice}`);
console.log(`Discount: ${discountPercentage} %`);
console.log(`Price with discount: ${finalPrice} `);
