import { AddressUtility } from "./AddressUtility";
import { CurrencyUtility } from "./CurrencyUtility";
import { DateUtility } from "./DateUtility";
import { IBANUtility } from "./IBANUtility";
import { IdentityUtility } from "./IdentityUtility";
import { NameUtility } from "./NameUtility";
import { NumberUtility } from "./NumberUtility";
import { PhoneUtility } from "./PhoneUtility";
import { PostalCodeUtility } from "./PostalCodeUtility";
import { SlugUtility } from "./SlugUtility";

describe("IdentityUtility", () => {
  it("validates and masks Turkish identity numbers", () => {
    expect(IdentityUtility.IsValidTCKN("10000000146")).toBe(true);
    expect(IdentityUtility.IsValidTCKN("10000000145")).toBe(false);
    expect(IdentityUtility.MaskTCKN("123 456 789 01")).toBe("123******01");
    expect(IdentityUtility.NormalizeIdentityNumber("123 456 789 01")).toBe("12345678901");
  });

  it("validates Turkish tax numbers", () => {
    expect(IdentityUtility.IsValidVKN("1000000000")).toBe(true);
    expect(IdentityUtility.IsValidVKN("1000000001")).toBe(false);
  });
});

describe("PhoneUtility", () => {
  it("normalizes, formats, and validates Turkish phone numbers", () => {
    expect(PhoneUtility.Normalize("0532 123 45 67")).toBe("+905321234567");
    expect(PhoneUtility.FormatNational("905321234567")).toBe("0532 123 45 67");
    expect(PhoneUtility.FormatInternational("05321234567")).toBe("+90 532 123 45 67");
    expect(PhoneUtility.IsValidPhone("+90 212 123 45 67")).toBe(true);
    expect(PhoneUtility.IsValidMobile("0532 123 45 67")).toBe(true);
    expect(PhoneUtility.GetOperatorPrefix("0532 123 45 67")).toBe("532");
  });
});

describe("DateUtility", () => {
  const date = new Date(2026, 6, 27);

  it("formats and parses Turkish dates", () => {
    expect(DateUtility.Format(date)).toBe("27 Temmuz 2026");
    expect(DateUtility.Format(date, "short")).toBe("27.07.2026");
    expect(DateUtility.Format(date, "iso")).toBe("2026-07-27");
    expect(DateUtility.GetMonthName(7)).toBe("Temmuz");
    expect(DateUtility.GetDayName(date)).toBe("Pazartesi");
    expect(DateUtility.ParseTurkishDate("27 Temmuz 2026")).toEqual(date);
    expect(DateUtility.ParseTurkishDate("27.07.2026")).toEqual(date);
  });

  it("returns Turkish relative date labels", () => {
    expect(DateUtility.ToRelative(new Date(2026, 6, 27), date)).toBe("bugün");
    expect(DateUtility.ToRelative(new Date(2026, 6, 26), date)).toBe("dün");
    expect(DateUtility.ToRelative(new Date(2026, 6, 28), date)).toBe("yarın");
    expect(DateUtility.ToRelative(new Date(2026, 6, 24), date)).toBe("3 gün önce");
  });
});

describe("CurrencyUtility", () => {
  it("formats, parses, and spells Turkish lira amounts", () => {
    expect(CurrencyUtility.FormatTRY(1234.5)).toContain("1.234,50");
    expect(CurrencyUtility.ParseTRY("₺1.234,50")).toBe(1234.5);
    expect(CurrencyUtility.AmountToWords(1250.25)).toBe("bin iki yüz elli Türk lirası yirmi beş kuruş");
  });
});

describe("AddressUtility", () => {
  it("normalizes city names and resolves plate codes", () => {
    expect(AddressUtility.NormalizeCity("istanbul")).toBe("İstanbul");
    expect(AddressUtility.IsValidPlateCode(34)).toBe(true);
    expect(AddressUtility.GetCityByPlateCode(34)).toBe("İstanbul");
    expect(AddressUtility.GetPlateCode("Ankara")).toBe(6);
  });
});

describe("NameUtility", () => {
  it("formats names and derives initials", () => {
    expect(NameUtility.Format("ahmet yılmaz")).toBe("Ahmet Yılmaz");
    expect(NameUtility.Initials("ahmet yılmaz")).toBe("AY");
    expect(NameUtility.MaskName("Ahmet Yılmaz")).toBe("A**** Y*****");
  });
});

describe("IBANUtility", () => {
  it("validates and formats Turkish IBANs", () => {
    expect(IBANUtility.IsValid("TR330006100519786457841326")).toBe(true);
    expect(IBANUtility.IsValid("TR330006100519786457841327")).toBe(false);
    expect(IBANUtility.Format("TR330006100519786457841326")).toBe("TR33 0006 1005 1978 6457 8413 26");
  });
});

describe("PostalCodeUtility", () => {
  it("validates and normalizes Turkish postal codes", () => {
    expect(PostalCodeUtility.IsValid("34000")).toBe(true);
    expect(PostalCodeUtility.IsValid("99000")).toBe(false);
    expect(PostalCodeUtility.Normalize("34 000-123")).toBe("34000");
  });
});

describe("NumberUtility", () => {
  it("formats and parses Turkish decimal numbers", () => {
    expect(NumberUtility.FormatDecimal(1234567.89)).toBe("1.234.567,89");
    expect(NumberUtility.FormatInteger(1234567.89)).toBe("1.234.568");
    expect(NumberUtility.ParseDecimal("1.234.567,89")).toBe(1234567.89);
  });
});
