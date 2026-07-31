export const TrNumber = {
  FormatDecimal: (value: number, fractionDigits: number = 2): string =>
    new Intl.NumberFormat("tr-TR", {
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    }).format(value),

  FormatInteger: (value: number): string => new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(value),

  ParseDecimal: (value: string): number => {
    const normalized = value.replace(/\s/g, "").replace(/\./g, "").replace(",", ".");
    return Number(normalized);
  },
};
