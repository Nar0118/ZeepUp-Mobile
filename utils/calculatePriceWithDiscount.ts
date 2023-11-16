export const calculatePriceWithDiscount = (price: number, discount: number): string => {
  return Number(price - (price * discount) / 100).toFixed(2);
};
