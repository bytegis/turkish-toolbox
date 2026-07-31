import { TrAddress } from "./TrAddress";
import { TrCurrency } from "./TrCurrency";
import { TrDate } from "./TrDate";
import { TrIBAN } from "./TrIBAN";
import { TrIdentity } from "./TrIdentity";
import { TrName } from "./TrName";
import { TrNumber } from "./TrNumber";
import { TrPhone } from "./TrPhone";
import { TrPostalCode } from "./TrPostalCode";

describe("TrIdentity", () => {
  it("validates and masks Turkish identity numbers", () => {
    expect(TrIdentity.IsValidTCKN("10000000146")).toBe(true);
    expect(TrIdentity.IsValidTCKN("10000000145")).toBe(false);
    expect(TrIdentity.MaskTCKN("123 456 789 01")).toBe("123******01");
    expect(TrIdentity.NormalizeIdentityNumber("123 456 789 01")).toBe("12345678901");
  });

  it("validates Turkish tax numbers", () => {
    expect(TrIdentity.IsValidVKN("1000000000")).toBe(true);
    expect(TrIdentity.IsValidVKN("1000000001")).toBe(false);
  });
});

describe("TrPhone", () => {
  it("normalizes, formats, and validates Turkish phone numbers", () => {
    expect(TrPhone.Normalize("0532 123 45 67")).toBe("+905321234567");
    expect(TrPhone.FormatNational("905321234567")).toBe("0532 123 45 67");
    expect(TrPhone.FormatInternational("05321234567")).toBe("+90 532 123 45 67");
    expect(TrPhone.IsValidPhone("+90 212 123 45 67")).toBe(true);
    expect(TrPhone.IsValidMobile("0532 123 45 67")).toBe(true);
    expect(TrPhone.GetOperatorPrefix("0532 123 45 67")).toBe("532");
  });
});

describe("TrDate", () => {
  const date = new Date(2026, 6, 27);

  it("formats and parses Turkish dates", () => {
    expect(TrDate.Format(date)).toBe("27 Temmuz 2026");
    expect(TrDate.Format(date, "short")).toBe("27.07.2026");
    expect(TrDate.Format(date, "iso")).toBe("2026-07-27");
    expect(TrDate.GetMonthName(7)).toBe("Temmuz");
    expect(TrDate.GetDayName(date)).toBe("Pazartesi");
    expect(TrDate.ParseTurkishDate("27 Temmuz 2026")).toEqual(date);
    expect(TrDate.ParseTurkishDate("27.07.2026")).toEqual(date);
  });

  it("returns Turkish relative date labels", () => {
    expect(TrDate.ToRelative(new Date(2026, 6, 27), date)).toBe("bugün");
    expect(TrDate.ToRelative(new Date(2026, 6, 26), date)).toBe("dün");
    expect(TrDate.ToRelative(new Date(2026, 6, 28), date)).toBe("yarın");
    expect(TrDate.ToRelative(new Date(2026, 6, 24), date)).toBe("3 gün önce");
  });

  it("returns Turkish relative time labels in minutes", () => {
    const now = new Date(2026, 6, 27, 12, 0, 0);
    expect(TrDate.ToRelativeMinutes(new Date(2026, 6, 27, 11, 59, 59), now)).toBe("az önce");
    expect(TrDate.ToRelativeMinutes(new Date(2026, 6, 27, 12, 0, 1), now)).toBe("az sonra");
    expect(TrDate.ToRelativeMinutes(new Date(2026, 6, 27, 11, 55, 0), now)).toBe("5 dakika önce");
    expect(TrDate.ToRelativeMinutes(new Date(2026, 6, 27, 12, 5, 0), now)).toBe("5 dakika sonra");
  });
});

describe("TrCurrency", () => {
  it("formats, parses, and spells Turkish lira amounts", () => {
    expect(TrCurrency.FormatTRY(1234.5)).toContain("1.234,50");
    expect(TrCurrency.ParseTRY("₺1.234,50")).toBe(1234.5);
    expect(TrCurrency.AmountToWords(1250.25)).toBe("bin iki yüz elli Türk lirası yirmi beş kuruş");
  });
});

describe("TrAddress", () => {
  it("normalizes city names and resolves plate codes", () => {
    expect(TrAddress.NormalizeCity("istanbul")).toBe("İstanbul");
    expect(TrAddress.IsValidPlateCode(34)).toBe(true);
    expect(TrAddress.GetCityByPlateCode(34)).toBe("İstanbul");
    expect(TrAddress.GetPlateCode("Ankara")).toBe(6);
  });
});

describe("TrName", () => {
  it("formats names and derives initials", () => {
    expect(TrName.Format("ahmet yılmaz")).toBe("Ahmet Yılmaz");
    expect(TrName.Initials("ahmet yılmaz")).toBe("AY");
    expect(TrName.MaskName("Ahmet Yılmaz")).toBe("A**** Y*****");
  });
});

describe("TrIBAN", () => {
  it("validates and formats Turkish IBANs", () => {
    expect(TrIBAN.IsValid("TR330006100519786457841326")).toBe(true);
    expect(TrIBAN.IsValid("TR330006100519786457841327")).toBe(false);
    expect(TrIBAN.Format("TR330006100519786457841326")).toBe("TR33 0006 1005 1978 6457 8413 26");
  });
});

describe("TrPostalCode", () => {
  it("validates and normalizes Turkish postal codes", () => {
    expect(TrPostalCode.IsValid("34000")).toBe(true);
    expect(TrPostalCode.IsValid("99000")).toBe(false);
    expect(TrPostalCode.Normalize("34 000-123")).toBe("34000");
  });
});

describe("TrNumber", () => {
  it("formats and parses Turkish decimal numbers", () => {
    expect(TrNumber.FormatDecimal(1234567.89)).toBe("1.234.567,89");
    expect(TrNumber.FormatInteger(1234567.89)).toBe("1.234.568");
    expect(TrNumber.ParseDecimal("1.234.567,89")).toBe(1234567.89);
  });
});
