# Turkish Toolbox

A TypeScript utility library for Turkish text processing, localization, validation, and formatting. It includes helpers for Turkish character rules, identity numbers, phone numbers, dates, currency, addresses, names, IBANs, postal codes, and number formatting.

## Installation

```bash
npm install @bytegis/turkish-toolbox
```

## Quick Start

```typescript
import {
  TrAddress,
  TrCurrency,
  TrDate,
  TrIBAN,
  TrIdentity,
  TrName,
  TrNumber,
  TrPhone,
  TrPostalCode,
  TrText,
} from "@bytegis/turkish-toolbox";

TrText.TurkishToUpper("istanbul"); // İSTANBUL
TrIdentity.IsValidTCKN("10000000146"); // true
TrPhone.FormatNational("+90 532 123 45 67"); // 0532 123 45 67
TrDate.Format(new Date(2026, 6, 27)); // 27 Temmuz 2026
TrCurrency.FormatTRY(1234.5); // ₺1.234,50
TrAddress.GetCityByPlateCode(34); // İstanbul
TrIBAN.IsValid("TR330006100519786457841326"); // true
TrPostalCode.IsValid("34000"); // true
TrNumber.ParseDecimal("1.234.567,89"); // 1234567.89
TrName.Format("ahmet yılmaz"); // Ahmet Yılmaz
```

## Modules

### `TrText`

Turkish-aware text conversion and analysis utilities.

```typescript
TrText.TurkishToUpper("istanbul"); // İSTANBUL
TrText.TurkishToLower("ISTANBUL"); // ıstanbul
TrText.TurkishCapitalize("istanbul"); // İstanbul
TrText.TurkishToggleCase("İstanbul"); // iSTANBUL

TrText.ToTurkish("istanbul"); // İSTANBUL
TrText.RemoveTurkishChars("Merhaba, Dünya!"); // Merhaba Dunya
TrText.ReverseTurkish("İSTANBUL"); // ISTANBUL
TrText.StripTurkishDiacritics("söğütlüçeşme"); // sogutlucesme

TrText.ContainsTurkishChars("Hello Dünya"); // true
TrText.IsMixedCase("Istanbul"); // true
TrText.GetTurkishCharCount("Söğütlüçeşme"); // 5
```

### `TrIdentity`

Turkish identity number and tax number helpers.

```typescript
TrIdentity.NormalizeIdentityNumber("123 456 789 01"); // 12345678901
TrIdentity.IsValidTCKN("10000000146"); // true
TrIdentity.IsValidVKN("1000000000"); // true
TrIdentity.MaskTCKN("12345678901"); // 123******01
```

### `TrPhone`

Turkish phone normalization, formatting, and validation.

```typescript
TrPhone.Normalize("0532 123 45 67"); // +905321234567
TrPhone.ToNationalNumber("+90 532 123 45 67"); // 5321234567
TrPhone.FormatNational("905321234567"); // 0532 123 45 67
TrPhone.FormatInternational("05321234567"); // +90 532 123 45 67
TrPhone.IsValidPhone("+90 212 123 45 67"); // true
TrPhone.IsValidMobile("0532 123 45 67"); // true
TrPhone.GetOperatorPrefix("0532 123 45 67"); // 532
```

### `TrDate`

Turkish date formatting, parsing, and relative labels.

```typescript
const date = new Date(2026, 6, 27);

TrDate.Format(date); // 27 Temmuz 2026
TrDate.Format(date, "short"); // 27.07.2026
TrDate.Format(date, "iso"); // 2026-07-27
TrDate.GetMonthName(7); // Temmuz
TrDate.GetDayName(date); // Pazartesi
TrDate.ParseTurkishDate("27 Temmuz 2026"); // Date
TrDate.ToRelative(date, new Date(2026, 6, 26)); // yarın
```

Supported date formats:

- `long`: `27 Temmuz 2026`
- `short`: `27.07.2026`
- `iso`: `2026-07-27`

### `TrCurrency`

Turkish lira formatting, parsing, and amount-to-words conversion.

```typescript
TrCurrency.FormatTRY(1234.5); // ₺1.234,50
TrCurrency.ParseTRY("₺1.234,50"); // 1234.5
TrCurrency.AmountToWords(1250.25); // bin iki yüz elli Türk lirası yirmi beş kuruş
```

### `TrAddress`

Turkish city and license plate code helpers.

```typescript
TrAddress.NormalizeCity("istanbul"); // İstanbul
TrAddress.IsValidPlateCode(34); // true
TrAddress.GetCityByPlateCode(34); // İstanbul
TrAddress.GetPlateCode("Ankara"); // 6
TrAddress.Cities; // all 81 Turkish city names
```

### `TrName`

Turkish-aware name formatting and masking.

```typescript
TrName.Format("ahmet yılmaz"); // Ahmet Yılmaz
TrName.Initials("Ahmet Yılmaz"); // AY
TrName.MaskName("Ahmet Yılmaz"); // A**** Y*****
```

### `TrIBAN`

Turkish IBAN normalization, validation, and formatting.

```typescript
TrIBAN.Normalize("tr33 0006 1005 1978 6457 8413 26"); // TR330006100519786457841326
TrIBAN.IsValid("TR330006100519786457841326"); // true
TrIBAN.Format("TR330006100519786457841326"); // TR33 0006 1005 1978 6457 8413 26
```

### `TrPostalCode`

Turkish postal code validation and normalization.

```typescript
TrPostalCode.IsValid("34000"); // true
TrPostalCode.Normalize("34 000-123"); // 34000
```

### `TrNumber`

Turkish number formatting and parsing.

```typescript
TrNumber.FormatDecimal(1234567.89); // 1.234.567,89
TrNumber.FormatInteger(1234567.89); // 1.234.568
TrNumber.ParseDecimal("1.234.567,89"); // 1234567.89
```

## API Reference

### Text

| Function | Description |
| --- | --- |
| `TrText.TurkishToUpper(text)` | Converts text to uppercase using Turkish character rules. |
| `TrText.TurkishToLower(text)` | Converts text to lowercase using Turkish character rules. |
| `TrText.TurkishCapitalize(text)` | Capitalizes the first character with Turkish rules. |
| `TrText.TurkishToggleCase(text)` | Toggles uppercase/lowercase with Turkish rules. |
| `TrText.ToTurkish(text)` | Converts lowercase ASCII/Turkish text to Turkish uppercase. |
| `TrText.RemoveTurkishChars(text)` | Converts Turkish letters to ASCII equivalents and removes unsupported symbols. |
| `TrText.ReverseTurkish(text)` | Converts Turkish letters to ASCII equivalents. |
| `TrText.StripTurkishDiacritics(text)` | Removes Turkish diacritics while keeping base letters. |
| `TrText.ContainsTurkishChars(text)` | Checks whether text contains Turkish characters. |
| `TrText.IsMixedCase(text)` | Checks whether text has both uppercase and lowercase letters. |
| `TrText.GetTurkishCharCount(text)` | Counts Turkish characters in text. |

### Identity

| Function | Description |
| --- | --- |
| `TrIdentity.NormalizeIdentityNumber(value)` | Removes non-digit characters. |
| `TrIdentity.IsValidTCKN(value)` | Validates Turkish Republic identity numbers. |
| `TrIdentity.IsValidVKN(value)` | Validates Turkish tax identity numbers. |
| `TrIdentity.MaskTCKN(value)` | Masks a TCKN value for display. |

### Phone

| Function | Description |
| --- | --- |
| `TrPhone.Normalize(value)` | Converts a valid Turkish number to `+90XXXXXXXXXX`. |
| `TrPhone.ToNationalNumber(value)` | Returns the 10-digit national number when possible. |
| `TrPhone.FormatNational(value)` | Formats as `0532 123 45 67`. |
| `TrPhone.FormatInternational(value)` | Formats as `+90 532 123 45 67`. |
| `TrPhone.IsValidPhone(value)` | Validates Turkish landline or mobile numbers. |
| `TrPhone.IsValidMobile(value)` | Validates Turkish mobile numbers. |
| `TrPhone.GetOperatorPrefix(value)` | Returns the first three national digits, such as `532`. |

### Date

| Function | Description |
| --- | --- |
| `TrDate.Format(date, format?)` | Formats a date as `long`, `short`, or `iso`. |
| `TrDate.GetMonthName(month)` | Returns the Turkish month name for `1-12`. |
| `TrDate.GetDayName(date)` | Returns the Turkish weekday name. |
| `TrDate.ParseTurkishDate(value)` | Parses Turkish long or numeric date strings. |
| `TrDate.ToRelative(date, baseDate?)` | Returns labels such as `bugün`, `dün`, `yarın`, or `3 gün önce`. |

### Currency

| Function | Description |
| --- | --- |
| `TrCurrency.FormatTRY(value)` | Formats a number as Turkish lira. |
| `TrCurrency.ParseTRY(value)` | Parses Turkish lira strings into numbers. |
| `TrCurrency.AmountToWords(value)` | Converts an amount to Turkish lira words. |

### Address

| Function | Description |
| --- | --- |
| `TrAddress.NormalizeCity(value)` | Returns the canonical Turkish city name. |
| `TrAddress.IsValidPlateCode(value)` | Checks whether a license plate code is between `1` and `81`. |
| `TrAddress.GetCityByPlateCode(value)` | Returns the city for a plate code. |
| `TrAddress.GetPlateCode(city)` | Returns the plate code for a city. |
| `TrAddress.Cities` | Contains all 81 Turkish city names. |

### Name

| Function | Description |
| --- | --- |
| `TrName.Format(value)` | Formats person names using Turkish casing. |
| `TrName.Initials(value)` | Returns initials from a formatted name. |
| `TrName.MaskName(value)` | Masks each name part for display. |

### IBAN

| Function | Description |
| --- | --- |
| `TrIBAN.Normalize(value)` | Removes spaces and uppercases the IBAN. |
| `TrIBAN.IsValid(value)` | Validates Turkish IBAN format and checksum. |
| `TrIBAN.Format(value)` | Groups an IBAN into readable blocks. |

### Postal Code

| Function | Description |
| --- | --- |
| `TrPostalCode.IsValid(value)` | Validates a 5-digit Turkish postal code. |
| `TrPostalCode.Normalize(value)` | Removes non-digits and keeps the first 5 digits. |

### Number

| Function | Description |
| --- | --- |
| `TrNumber.FormatDecimal(value, fractionDigits?)` | Formats decimal numbers with Turkish separators. |
| `TrNumber.FormatInteger(value)` | Formats integer values with Turkish separators. |
| `TrNumber.ParseDecimal(value)` | Parses Turkish decimal strings into numbers. |

## Supported Turkish Characters

| Uppercase | Lowercase |
| --- | --- |
| `İ` | `i` |
| `I` | `ı` |
| `Ç` | `ç` |
| `Ğ` | `ğ` |
| `Ş` | `ş` |
| `Ö` | `ö` |
| `Ü` | `ü` |

## License

See [LICENSE](LICENSE) for details.

## Contributing

Contributions are welcome. Feel free to open issues or submit pull requests.
