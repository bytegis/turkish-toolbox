const PHONE_DIGITS = /\D/g;

const MOBILE_PREFIXES = [
  "501",
  "505",
  "506",
  "507",
  "530",
  "531",
  "532",
  "533",
  "534",
  "535",
  "536",
  "537",
  "538",
  "539",
  "540",
  "541",
  "542",
  "543",
  "544",
  "545",
  "546",
  "547",
  "548",
  "549",
  "550",
  "551",
  "552",
  "553",
  "554",
  "555",
  "559",
];

const nationalNumber = (value: string): string => {
  if (!value) return value;
  const digits = value.replace(PHONE_DIGITS, "");
  if (digits.length === 12 && digits.slice(0, 2) === "90") return digits.slice(2);
  if (digits.length === 11 && digits[0] === "0") return digits.slice(1);
  return digits;
};

const formatNationalTenDigits = (digits: string, leadingZero: boolean): string => {
  const prefix = leadingZero ? "0" : "";
  return prefix + digits.slice(0, 3) + " " + digits.slice(3, 6) + " " + digits.slice(6, 8) + " " + digits.slice(8);
};

export const PhoneUtility = {
  Normalize: (value: string): string => {
    const national = nationalNumber(value);
    if (national.length !== 10) return value ? value.replace(/\s/g, "") : value;
    return "+90" + national;
  },

  ToNationalNumber: (value: string): string => nationalNumber(value),

  FormatNational: (value: string): string => {
    const national = nationalNumber(value);
    if (national.length !== 10) return value;
    return formatNationalTenDigits(national, true);
  },

  FormatInternational: (value: string): string => {
    const national = nationalNumber(value);
    if (national.length !== 10) return value;
    return "+90 " + formatNationalTenDigits(national, false);
  },

  IsValidPhone: (value: string): boolean => /^[2-5]\d{9}$/.test(nationalNumber(value)),

  IsValidMobile: (value: string): boolean => {
    const national = nationalNumber(value);
    return national.length === 10 && MOBILE_PREFIXES.indexOf(national.slice(0, 3)) >= 0;
  },

  GetOperatorPrefix: (value: string): string | null => {
    const national = nationalNumber(value);
    if (national.length < 3) return null;
    return national.slice(0, 3);
  },
};
