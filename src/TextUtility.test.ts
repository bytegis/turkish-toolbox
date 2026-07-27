import { TextUtility } from "./TextUtility";

describe("TextUtility", () => {
  describe("TurkishToUpper", () => {
    it("converts Turkish lowercase characters to uppercase", () => {
      expect(TextUtility.TurkishToUpper("istanbul")).toBe("İSTANBUL");
      expect(TextUtility.TurkishToUpper("çankırı")).toBe("ÇANKIRI");
    });

    it("returns input for empty values", () => {
      expect(TextUtility.TurkishToUpper("")).toBe("");
    });
  });

  describe("TurkishToLower", () => {
    it("converts Turkish uppercase characters to lowercase", () => {
      expect(TextUtility.TurkishToLower("İSTANBUL")).toBe("istanbul");
      expect(TextUtility.TurkishToLower("ISTANBUL")).toBe("ıstanbul");
    });
  });

  describe("ToTurkish", () => {
    it("converts ASCII and Turkish lowercase input to Turkish uppercase", () => {
      expect(TextUtility.ToTurkish("istanbul")).toBe("İSTANBUL");
      expect(TextUtility.ToTurkish("çağrı")).toBe("ÇAĞRI");
    });
  });

  describe("RemoveTurkishChars", () => {
    it("converts Turkish letters to ASCII and removes unsupported symbols", () => {
      expect(TextUtility.RemoveTurkishChars("Merhaba, Dünya!")).toBe("Merhaba Dunya");
      expect(TextUtility.RemoveTurkishChars("Çankırı-İzmir.2026")).toBe("Cankiri-Izmir.2026");
    });
  });

  describe("TurkishCapitalize", () => {
    it("capitalizes the first character with Turkish rules", () => {
      expect(TextUtility.TurkishCapitalize("istanbul")).toBe("İstanbul");
      expect(TextUtility.TurkishCapitalize("ankara")).toBe("Ankara");
    });
  });

  describe("ContainsTurkishChars", () => {
    it("detects presence of Turkish characters", () => {
      expect(TextUtility.ContainsTurkishChars("Hello")).toBe(false);
      expect(TextUtility.ContainsTurkishChars("Hello Dünya")).toBe(true);
      expect(TextUtility.ContainsTurkishChars("")).toBe(false);
    });
  });

  describe("TurkishToggleCase", () => {
    it("toggles case using Turkish rules", () => {
      expect(TextUtility.TurkishToggleCase("İstanbul")).toBe("iSTANBUL");
      expect(TextUtility.TurkishToggleCase("ANKARA")).toBe("ankara");
    });
  });

  describe("ReverseTurkish", () => {
    it("converts Turkish letters to ASCII equivalents", () => {
      expect(TextUtility.ReverseTurkish("İSTANBUL")).toBe("ISTANBUL");
      expect(TextUtility.ReverseTurkish("ÇAĞRI")).toBe("CAGRI");
    });
  });

  describe("StripTurkishDiacritics", () => {
    it("strips Turkish diacritics and keeps base letters", () => {
      expect(TextUtility.StripTurkishDiacritics("çığöşü ÇIĞÖŞÜ")).toBe("cigosu CIGOSU");
    });
  });

  describe("IsMixedCase", () => {
    it("returns true only when text has both uppercase and lowercase letters", () => {
      expect(TextUtility.IsMixedCase("Istanbul")).toBe(true);
      expect(TextUtility.IsMixedCase("ISTANBUL")).toBe(false);
      expect(TextUtility.IsMixedCase("istanbul")).toBe(false);
    });
  });

  describe("GetTurkishCharCount", () => {
    it("counts Turkish characters in text", () => {
      expect(TextUtility.GetTurkishCharCount("Merhaba")).toBe(0);
      expect(TextUtility.GetTurkishCharCount("Çankırı")).toBe(3);
      expect(TextUtility.GetTurkishCharCount("Mühendis")).toBe(2);
    });
  });
});
