const MONTHS = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

const DAYS = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

const two = (value: number): string => (value < 10 ? "0" + value : String(value));

const startOfDay = (date: Date): Date => new Date(date.getFullYear(), date.getMonth(), date.getDate());

export type TurkishDateFormat = "short" | "long" | "iso";

export const DateUtility = {
  GetMonthName: (month: number): string => MONTHS[month - 1] || "",

  GetDayName: (date: Date): string => DAYS[date.getDay()],

  Format: (date: Date, format: TurkishDateFormat = "long"): string => {
    if (format === "iso") return date.getFullYear() + "-" + two(date.getMonth() + 1) + "-" + two(date.getDate());
    if (format === "short") return two(date.getDate()) + "." + two(date.getMonth() + 1) + "." + date.getFullYear();
    return date.getDate() + " " + MONTHS[date.getMonth()] + " " + date.getFullYear();
  },

  ParseTurkishDate: (value: string): Date | null => {
    if (!value) return null;

    const numericMatch = value.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{4})$/);
    if (numericMatch) {
      return new Date(Number(numericMatch[3]), Number(numericMatch[2]) - 1, Number(numericMatch[1]));
    }

    const match = value.trim().match(/^(\d{1,2})\s+([A-Za-zÇĞİÖŞÜçğıöşü]+)\s+(\d{4})$/);
    if (!match) return null;

    const monthIndex = MONTHS.map((month) => month.toLocaleLowerCase("tr-TR")).indexOf(match[2].toLocaleLowerCase("tr-TR"));
    if (monthIndex < 0) return null;
    return new Date(Number(match[3]), monthIndex, Number(match[1]));
  },

  ToRelative: (date: Date, baseDate: Date = new Date()): string => {
    const diffMs = startOfDay(date).getTime() - startOfDay(baseDate).getTime();
    const diffDays = Math.round(diffMs / 86400000);

    if (diffDays === 0) return "bugün";
    if (diffDays === -1) return "dün";
    if (diffDays === 1) return "yarın";
    if (diffDays < 0) return Math.abs(diffDays) + " gün önce";
    return diffDays + " gün sonra";
  },
};
