const LETTER_OFFSET = 55;

const ibanToNumeric = (iban: string): string => {
  const rearranged = iban.slice(4) + iban.slice(0, 4);
  let numeric = "";

  for (let index = 0; index < rearranged.length; index += 1) {
    const char = rearranged.charAt(index);
    numeric += /[A-Z]/.test(char) ? String(char.charCodeAt(0) - LETTER_OFFSET) : char;
  }

  return numeric;
};

const mod97 = (numeric: string): number => {
  let remainder = 0;
  for (let index = 0; index < numeric.length; index += 1) {
    remainder = (remainder * 10 + Number(numeric.charAt(index))) % 97;
  }
  return remainder;
};

export const IBANUtility = {
  Normalize: (value: string): string => (value ? value.replace(/\s/g, "").toUpperCase() : value),

  IsValid: (value: string): boolean => {
    const iban = IBANUtility.Normalize(value);
    if (!/^TR\d{24}$/.test(iban)) return false;
    return mod97(ibanToNumeric(iban)) === 1;
  },

  Format: (value: string): string => {
    const iban = IBANUtility.Normalize(value);
    return iban.replace(/(.{4})/g, "$1 ").trim();
  },
};
