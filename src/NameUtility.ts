const particles = ["ve", "ile", "de", "da"];

const titleCaseWord = (word: string): string => {
  if (!word) return word;
  return word.charAt(0).toLocaleUpperCase("tr-TR") + word.slice(1).toLocaleLowerCase("tr-TR");
};

export const NameUtility = {
  Format: (value: string): string => {
    if (!value) return value;
    return value
      .trim()
      .replace(/\s+/g, " ")
      .split(" ")
      .map((word, index) => (index > 0 && particles.indexOf(word.toLocaleLowerCase("tr-TR")) >= 0 ? word.toLocaleLowerCase("tr-TR") : titleCaseWord(word)))
      .join(" ");
  },

  Initials: (value: string): string => {
    if (!value) return value;
    return NameUtility.Format(value)
      .split(" ")
      .filter(Boolean)
      .map((word) => word.charAt(0).toLocaleUpperCase("tr-TR"))
      .join("");
  },

  MaskName: (value: string): string => {
    if (!value) return value;
    return NameUtility.Format(value)
      .split(" ")
      .map((word) => (word.length <= 1 ? word : word.charAt(0) + new Array(word.length).join("*")))
      .join(" ");
  },
};
