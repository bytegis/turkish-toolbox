const SMALL_NUMBERS = [
  "sıfır",
  "bir",
  "iki",
  "üç",
  "dört",
  "beş",
  "altı",
  "yedi",
  "sekiz",
  "dokuz",
];

const TENS = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"];
const GROUPS = ["", "bin", "milyon", "milyar", "trilyon"];

const underThousandToWords = (value: number): string => {
  const words: string[] = [];
  const hundreds = Math.floor(value / 100);
  const tens = Math.floor((value % 100) / 10);
  const ones = value % 10;

  if (hundreds > 0) {
    if (hundreds > 1) words.push(SMALL_NUMBERS[hundreds]);
    words.push("yüz");
  }
  if (tens > 0) words.push(TENS[tens]);
  if (ones > 0) words.push(SMALL_NUMBERS[ones]);

  return words.join(" ");
};

const integerToWords = (value: number): string => {
  if (value === 0) return SMALL_NUMBERS[0];

  const words: string[] = [];
  let remaining = Math.floor(Math.abs(value));
  let groupIndex = 0;

  while (remaining > 0) {
    const groupValue = remaining % 1000;
    if (groupValue > 0) {
      const groupName = GROUPS[groupIndex];
      const groupWords = groupIndex === 1 && groupValue === 1 ? groupName : underThousandToWords(groupValue) + (groupName ? " " + groupName : "");
      words.unshift(groupWords);
    }
    remaining = Math.floor(remaining / 1000);
    groupIndex += 1;
  }

  return words.join(" ");
};

export const CurrencyUtility = {
  FormatTRY: (value: number): string => new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY" }).format(value),

  ParseTRY: (value: string): number => {
    const normalized = value.replace(/[^\d,.-]/g, "").replace(/\./g, "").replace(",", ".");
    return Number(normalized);
  },

  AmountToWords: (value: number): string => {
    const lira = Math.floor(Math.abs(value));
    const kurus = Math.round((Math.abs(value) - lira) * 100);
    const sign = value < 0 ? "eksi " : "";
    const liraText = integerToWords(lira) + " Türk lirası";
    return sign + (kurus > 0 ? liraText + " " + integerToWords(kurus) + " kuruş" : liraText);
  },
};
