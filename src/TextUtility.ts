// Turkish character mapping for uppercase conversion
const TURKISH_UPPERCASE_MAP: Record<string, string> = {
  i: "İ",
  ı: "I",
  ğ: "Ğ",
  ü: "Ü",
  ş: "Ş",
  ö: "Ö",
  ç: "Ç",
};

// Turkish character mapping for lowercase conversion
const TURKISH_LOWERCASE_MAP: Record<string, string> = {
  İ: "i",
  I: "ı",
  Ğ: "ğ",
  Ü: "ü",
  Ş: "ş",
  Ö: "ö",
  Ç: "ç",
};

// Turkish to ASCII character mapping
const TURKISH_TO_ASCII_MAP: Record<string, string> = {
  Ç: "C",
  Ö: "O",
  Ş: "S",
  İ: "I",
  Ü: "U",
  Ğ: "G",
  ç: "c",
  ö: "o",
  ş: "s",
  ı: "i",
  ü: "u",
  ğ: "g",
};

export const TextUtility = {
  /**
   * Converts text to uppercase using Turkish character rules
   * @param text - The text to convert
   * @returns The uppercase text
   */
  TurkishToUpper: (text: string): string => {
    if (!text) return text;
    return text.replace(/./g, (char) => TURKISH_UPPERCASE_MAP[char] || char.toUpperCase());
  },

  /**
   * Converts text to lowercase using Turkish character rules
   * @param text - The text to convert
   * @returns The lowercase text
   */
  TurkishToLower: (text: string): string => {
    if (!text) return text;
    return text.replace(/./g, (char) => TURKISH_LOWERCASE_MAP[char] || char.toLowerCase());
  },

  /**
   * Converts ASCII text to uppercase with Turkish character support
   * @param text - The text to convert
   * @returns The uppercase text with Turkish characters applied
   */
  ToTurkish: (text: string): string => {
    if (!text) return text;

    const charCodeMap: Record<number, string> = {
      105: "İ", // i
      305: "I", // ı
      287: "Ğ", // ğ
      252: "Ü", // ü
      351: "Ş", // ş
      246: "Ö", // ö
      231: "Ç", // ç
    };

    return text.replace(/./g, (char) => {
      const code = char.charCodeAt(0);
      return charCodeMap[code] || (code >= 97 && code <= 122 ? char.toUpperCase() : char);
    });
  },

  /**
   * Removes Turkish characters by converting them to ASCII equivalents
   * @param text - The text to process
   * @returns The text with Turkish characters converted to ASCII
   */
  RemoveTurkishChars: (text: string): string => {
    if (!text) return text;

    // Replace Turkish characters with ASCII equivalents
    const converted = text.replace(/./g, (char) => TURKISH_TO_ASCII_MAP[char] || char);

    // Remove any remaining non-ASCII characters (keeping numbers, dots, dashes, spaces)
    return converted.replace(/[^a-z0-9\-.\s]/gi, "");
  },

  /**
   * Capitalizes the first character with Turkish character rules
   * @param text - The text to capitalize
   * @returns The text with first character capitalized
   */
  TurkishCapitalize: (text: string): string => {
    if (!text || text.length === 0) return text;
    const firstChar = text[0];
    const capitalizedFirst = TURKISH_UPPERCASE_MAP[firstChar] || firstChar.toUpperCase();
    return capitalizedFirst + text.slice(1);
  },

  /**
   * Checks if text contains any Turkish characters
   * @param text - The text to check
   * @returns True if text contains Turkish characters, false otherwise
   */
  ContainsTurkishChars: (text: string): boolean => {
    if (!text) return false;
    const turkishChars = new Set(Object.keys(TURKISH_UPPERCASE_MAP).concat(Object.keys(TURKISH_LOWERCASE_MAP)));
    return Array.from(text).some((char) => turkishChars.has(char));
  },

  /**
   * Toggles case (uppercase → lowercase, lowercase → uppercase) with Turkish rules
   * @param text - The text to toggle
   * @returns The text with case toggled
   */
  TurkishToggleCase: (text: string): string => {
    if (!text) return text;
    return text.replace(/./g, (char) => {
      // Check if it's an uppercase character (Turkish or regular)
      const lowerVersion = TURKISH_LOWERCASE_MAP[char] || char.toLowerCase();
      if (lowerVersion !== char) {
        // It was uppercase, convert to lowercase
        return lowerVersion;
      }
      // It was lowercase, convert to uppercase
      return TURKISH_UPPERCASE_MAP[char] || char.toUpperCase();
    });
  },

  /**
   * Reverses the ToTurkish operation (converts Turkish uppercase back to ASCII)
   * @param text - The Turkish text to convert
   * @returns The text with Turkish characters converted to ASCII equivalents
   */
  ReverseTurkish: (text: string): string => {
    if (!text) return text;
    return text.replace(/./g, (char) => TURKISH_TO_ASCII_MAP[char] || char);
  },

  /**
   * Strips Turkish diacritics while keeping base letters
   * @param text - The text to strip
   * @returns The text with diacritics removed
   */
  StripTurkishDiacritics: (text: string): string => {
    if (!text) return text;
    const diacriticMap: Record<string, string> = {
      ç: "c",
      ğ: "g",
      ı: "i",
      ö: "o",
      ş: "s",
      ü: "u",
      Ç: "C",
      Ğ: "G",
      İ: "I",
      Ö: "O",
      Ş: "S",
      Ü: "U",
    };
    return text.replace(/./g, (char) => diacriticMap[char] || char);
  },

  /**
   * Checks if text is in mixed case
   * @param text - The text to check
   * @returns True if text contains both uppercase and lowercase characters
   */
  IsMixedCase: (text: string): boolean => {
    if (!text || text.length === 0) return false;
    const hasUpper = /[A-ZÇĞIŞÖÜ]/.test(text);
    const hasLower = /[a-zçğışöü]/.test(text);
    return hasUpper && hasLower;
  },

  /**
   * Counts Turkish characters in text
   * @param text - The text to analyze
   * @returns The number of Turkish characters found
   */
  GetTurkishCharCount: (text: string): number => {
    if (!text) return 0;
    const turkishChars = new Set(Object.keys(TURKISH_UPPERCASE_MAP).concat(Object.keys(TURKISH_LOWERCASE_MAP)));
    return Array.from(text).filter((char) => turkishChars.has(char)).length;
  },
};
