function formatCurrency(digit: number) {
  const formated = new Intl.NumberFormat("es-CO", {
    currency: "COP",
    style: "currency",
    minimumFractionDigits: 0,
  }).format(digit);

  return formated;
}

export default formatCurrency;
