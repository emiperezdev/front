export const formatCurrency = (amount: number): string => {
  if (amount == 0) return "";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};
