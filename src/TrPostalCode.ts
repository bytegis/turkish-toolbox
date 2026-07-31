export const TrPostalCode = {
  IsValid: (value: string): boolean => /^[0-8]\d{4}$/.test(value),

  Normalize: (value: string): string => (value ? value.replace(/\D/g, "").slice(0, 5) : value),
};
