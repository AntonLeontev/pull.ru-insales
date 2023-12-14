function formatNumber(number) {
  return new Intl.NumberFormat({
    style: "currency",
    maximumSignificantDigits: 0,
  }).format(number);
}
