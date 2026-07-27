# Turkish Toolbox 🇹🇷

A comprehensive TypeScript utility library for Turkish text processing. Handles Turkish character case conversion, validation, and transformation with proper support for Turkish language rules.

## Features

✨ **Case Conversion**
- Turkish uppercase conversion (`TurkishToUpper`)
- Turkish lowercase conversion (`TurkishToLower`)
- Capitalize first letter with Turkish rules (`TurkishCapitalize`)
- Toggle case with Turkish support (`TurkishToggleCase`)

🔤 **Character Transformation**
- Convert ASCII to Turkish uppercase (`ToTurkish`)
- Remove Turkish characters to ASCII (`RemoveTurkishChars`)
- Reverse Turkish transformation (`ReverseTurkish`)
- Strip Turkish diacritics (`StripTurkishDiacritics`)

🔍 **Text Analysis**
- Check for Turkish characters (`ContainsTurkishChars`)
- Detect mixed case text (`IsMixedCase`)
- Count Turkish characters (`GetTurkishCharCount`)

## Installation

```bash
npm install @bytegis/turkish-toolbox
```

## Quick Start

```typescript
import { TextUtility } from '@bytegis/turkish-toolbox';

// Uppercase conversion
TextUtility.TurkishToUpper('istanbul'); // İSTANBUL

// Lowercase conversion 
TextUtility.TurkishToLower('İSTANBUL'); // istanbul

// Capitalize
TextUtility.TurkishCapitalize('istanbul'); // İstanbul

// Check for Turkish characters
TextUtility.ContainsTurkishChars('Merhaba'); // true
```

## API Reference

### Case Conversion

#### `TurkishToUpper(text: string): string`
Converts text to uppercase using Turkish character rules.

```typescript
TextUtility.TurkishToUpper('istanbul');     // İSTANBUL
TextUtility.TurkishToUpper('çankırı');      // ÇANKIRI
TextUtility.TurkishToUpper('mühendis');     // MÜHENDİS
```

#### `TurkishToLower(text: string): string`
Converts text to lowercase using Turkish character rules.

```typescript
TextUtility.TurkishToLower('ISTANBUL');     // istanbul
TextUtility.TurkishToLower('ÇANKIRI');      // çankırı
TextUtility.TurkishToLower('MÜHENDİS');     // mühendis
```

#### `TurkishCapitalize(text: string): string`
Capitalizes the first character with Turkish rules.

```typescript
TextUtility.TurkishCapitalize('istanbul');  // İstanbul
TextUtility.TurkishCapitalize('ankara');    // Ankara
```

#### `TurkishToggleCase(text: string): string`
Toggles case (uppercase ↔ lowercase) respecting Turkish rules.

```typescript
TextUtility.TurkishToggleCase('İstanbul');  // İSTANBUL
TextUtility.TurkishToggleCase('ANKARA');    // ankara
```

### Character Transformation

#### `ToTurkish(text: string): string`
Converts ASCII text to uppercase with Turkish character support.

```typescript
TextUtility.ToTurkish('istanbul');  // İSTANBUL
TextUtility.ToTurkish('ankara');    // ANKARA
```

#### `RemoveTurkishChars(text: string): string`
Converts Turkish characters to ASCII equivalents and removes non-alphanumeric characters.

```typescript
TextUtility.RemoveTurkishChars('Merhaba, Dünya!');  // Merhaba Dunya
TextUtility.RemoveTurkishChars('Çankırı-İzmir');    // Cankiri-Izmir
```

#### `ReverseTurkish(text: string): string`
Reverses the `ToTurkish` operation (converts Turkish uppercase back to ASCII).

```typescript
TextUtility.ReverseTurkish('İSTANBUL');  // ISTANBUL
TextUtility.ReverseTurkish('ÇANKIRI');   // CANKIRI
```

#### `StripTurkishDiacritics(text: string): string`
Removes Turkish diacritics while keeping base letters.

```typescript
TextUtility.StripTurkishDiacritics('çankırı');     // cankiri
TextUtility.StripTurkishDiacritics('MÜHENDIS');    // MUHENDIS
```

### Text Analysis

#### `ContainsTurkishChars(text: string): boolean`
Checks if text contains any Turkish characters.

```typescript
TextUtility.ContainsTurkishChars('Merhaba');       // true
TextUtility.ContainsTurkishChars('Hello');         // false
TextUtility.ContainsTurkishChars('Hello Dünya');   // true
```

#### `IsMixedCase(text: string): boolean`
Checks if text contains both uppercase and lowercase characters.

```typescript
TextUtility.IsMixedCase('Istanbul');   // true
TextUtility.IsMixedCase('ISTANBUL');   // false
TextUtility.IsMixedCase('istanbul');   // false
```

#### `GetTurkishCharCount(text: string): number`
Counts Turkish characters in text.

```typescript
TextUtility.GetTurkishCharCount('Merhaba');        // 0
TextUtility.GetTurkishCharCount('Çankırı');        // 3 (Ç, ı, ı)
TextUtility.GetTurkishCharCount('Mühendis');       // 2 (ü, i)
```

## Turkish Characters Supported

| Uppercase | Lowercase |
|-----------|-----------|
| İ         | i         |
| I         | ı         |
| Ç         | ç         |
| Ğ         | ğ         |
| Ş         | ş         |
| Ö         | ö         |
| Ü         | ü         |

## License

See [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

# Türkçe Toolbox 🇹🇷

Türkçe metin işleme için kapsamlı bir TypeScript yardımcı kütüphanesi. Türkçe karakter büyük/küçük harf dönüşümü, doğrulama ve dönüştürme işlevlerini Türk dil kurallarına uygun şekilde işler.

## Özellikler

✨ **Harf Dönüşümü**
- Türkçe büyük harf dönüşümü (`TurkishToUpper`)
- Türkçe küçük harf dönüşümü (`TurkishToLower`)
- Türkçe kurallara göre ilk harfi büyüt (`TurkishCapitalize`)
- Türkçe desteğiyle büyük/küçük harf değişimi (`TurkishToggleCase`)

🔤 **Karakter Dönüştürme**
- ASCII'yi Türkçe büyük harfe dönüştür (`ToTurkish`)
- Türkçe karakterleri ASCII'ye çevir (`RemoveTurkishChars`)
- Türkçe dönüştürmesini geri al (`ReverseTurkish`)
- Türkçe diakritikleri kaldır (`StripTurkishDiacritics`)

🔍 **Metin Analizi**
- Türkçe karakterleri kontrol et (`ContainsTurkishChars`)
- Karışık durumlu metni algıla (`IsMixedCase`)
- Türkçe karakter sayısını bul (`GetTurkishCharCount`)

## Kurulum

```bash
npm install @bytegis/turkish-toolbox
```

## Hızlı Başlangıç

```typescript
import { TextUtility } from '@bytegis/turkish-toolbox';

// Büyük harfe dönüştürme
TextUtility.TurkishToUpper('istanbul'); // İSTANBUL

// Küçük harfe dönüştürme
TextUtility.TurkishToLower('İSTANBUL'); // istanbul

// İlk harfi büyüt
TextUtility.TurkishCapitalize('istanbul'); // İstanbul

// Türkçe karakter kontrolü
TextUtility.ContainsTurkishChars('Merhaba'); // true
```

## API Referansı

### Harf Dönüşümü

#### `TurkishToUpper(text: string): string`
Metni Türkçe karakter kurallarını kullanarak büyük harfe dönüştürür.

```typescript
TextUtility.TurkishToUpper('istanbul');     // İSTANBUL
TextUtility.TurkishToUpper('çankırı');      // ÇANKIRI
TextUtility.TurkishToUpper('mühendis');     // MÜHENDİS
```

#### `TurkishToLower(text: string): string`
Metni Türkçe karakter kurallarını kullanarak küçük harfe dönüştürür.

```typescript
TextUtility.TurkishToLower('ISTANBUL');     // istanbul
TextUtility.TurkishToLower('ÇANKIRI');      // çankırı
TextUtility.TurkishToLower('MÜHENDİS');     // mühendis
```

#### `TurkishCapitalize(text: string): string`
Türkçe kurallarıyla ilk karakteri büyüklüklü yapar.

```typescript
TextUtility.TurkishCapitalize('istanbul');  // İstanbul
TextUtility.TurkishCapitalize('ankara');    // Ankara
```

#### `TurkishToggleCase(text: string): string`
Büyük/küçük harf değişimi yapar ve Türkçe kurallarına uyar.

```typescript
TextUtility.TurkishToggleCase('İstanbul');  // İSTANBUL
TextUtility.TurkishToggleCase('ANKARA');    // ankara
```

### Karakter Dönüştürme

#### `ToTurkish(text: string): string`
ASCII metni Türkçe karakter desteğiyle büyük harfe dönüştürür.

```typescript
TextUtility.ToTurkish('istanbul');  // İSTANBUL
TextUtility.ToTurkish('ankara');    // ANKARA
```

#### `RemoveTurkishChars(text: string): string`
Türkçe karakterleri ASCII eşdeğerlerine dönüştürür ve alfanümerik olmayan karakterleri kaldırır.

```typescript
TextUtility.RemoveTurkishChars('Merhaba, Dünya!');  // Merhaba Dunya
TextUtility.RemoveTurkishChars('Çankırı-İzmir');    // Cankiri-Izmir
```

#### `ReverseTurkish(text: string): string`
`ToTurkish` işlemini geri alır (Türkçe büyük harfleri ASCII'ye çevirir).

```typescript
TextUtility.ReverseTurkish('İSTANBUL');  // ISTANBUL
TextUtility.ReverseTurkish('ÇANKIRI');   // CANKIRI
```

#### `StripTurkishDiacritics(text: string): string`
Türkçe diakritikleri kaldırırken temel harfleri tutar.

```typescript
TextUtility.StripTurkishDiacritics('çankırı');     // cankiri
TextUtility.StripTurkishDiacritics('MÜHENDIS');    // MUHENDIS
```

### Metin Analizi

#### `ContainsTurkishChars(text: string): boolean`
Metinde herhangi bir Türkçe karakter olup olmadığını kontrol eder.

```typescript
TextUtility.ContainsTurkishChars('Merhaba');       // true
TextUtility.ContainsTurkishChars('Hello');         // false
TextUtility.ContainsTurkishChars('Hello Dünya');   // true
```

#### `IsMixedCase(text: string): boolean`
Metinde büyük ve küçük harflerin karışık olup olmadığını kontrol eder.

```typescript
TextUtility.IsMixedCase('Istanbul');   // true
TextUtility.IsMixedCase('ISTANBUL');   // false
TextUtility.IsMixedCase('istanbul');   // false
```

#### `GetTurkishCharCount(text: string): number`
Metindeki Türkçe karakter sayısını sayar.

```typescript
TextUtility.GetTurkishCharCount('Merhaba');        // 0
TextUtility.GetTurkishCharCount('Çankırı');        // 3 (Ç, ı, ı)
TextUtility.GetTurkishCharCount('Mühendis');       // 2 (ü, i)
```

## Desteklenen Türkçe Karakterler

| Büyük Harf | Küçük Harf |
|-----------|-----------|
| İ         | i         |
| I         | ı         |
| Ç         | ç         |
| Ğ         | ğ         |
| Ş         | ş         |
| Ö         | ö         |
| Ü         | ü         |

---

**Built with ❤️ for Turkish language support**