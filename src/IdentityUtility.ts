const ONLY_DIGITS = /\D/g;

const digitsOf = (value: string): number[] => value.replace(ONLY_DIGITS, "").split("").map((digit) => Number(digit));

export const IdentityUtility = {
  NormalizeIdentityNumber: (value: string): string => {
    if (!value) return value;
    return value.replace(ONLY_DIGITS, "");
  },

  IsValidTCKN: (value: string): boolean => {
    const digits = digitsOf(value);
    if (digits.length !== 11 || digits[0] === 0) return false;

    const firstTenSum = digits.slice(0, 10).reduce((sum, digit) => sum + digit, 0);
    const oddSum = digits[0] + digits[2] + digits[4] + digits[6] + digits[8];
    const evenSum = digits[1] + digits[3] + digits[5] + digits[7];

    return ((oddSum * 7 - evenSum) % 10 + 10) % 10 === digits[9] && firstTenSum % 10 === digits[10];
  },

  IsValidVKN: (value: string): boolean => {
    const digits = digitsOf(value);
    if (digits.length !== 10) return false;

    let sum = 0;
    for (let index = 0; index < 10; index += 1) {
      const position = 9 - index;
      const valueAtPosition = (digits[index] + position) % 10;
      const weighted = valueAtPosition === 9 ? 9 : (valueAtPosition * Math.pow(2, position)) % 9;
      sum += weighted;
    }

    return sum % 10 === 0;
  },

  MaskTCKN: (value: string): string => {
    const normalized = IdentityUtility.NormalizeIdentityNumber(value);
    if (normalized.length <= 4) return normalized;
    return normalized.slice(0, 3) + "******" + normalized.slice(-2);
  },
};
