# Turkish Toolbox EN

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
import { TrText } from '@bytegis/turkish-toolbox';

// Uppercase conversion
TrText.TurkishToUpper('istanbul'); // İSTANBUL

// Lowercase conversion 
TrText.TurkishToLower('İSTANBUL'); // istanbul

// Capitalize
TrText.TurkishCapitalize('istanbul'); // İstanbul

// Check for Turkish characters
TrText.ContainsTurkishChars('Merhaba'); // true
```

## API Reference

### Case Conversion

#### `TurkishToUpper(text: string): string`
Converts text to uppercase using Turkish character rules.

```typescript
TrText.TurkishToUpper('istanbul');     // İSTANBUL
TrText.TurkishToUpper('söğütlüçeşme');      // SÖĞÜTLÜÇEŞME
TrText.TurkishToUpper('mühendis');     // MÜHENDİS
```

#### `TurkishToLower(text: string): string`
Converts text to lowercase using Turkish character rules.

```typescript
TrText.TurkishToLower('ISTANBUL');     // istanbul
TrText.TurkishToLower('SÖĞÜTLÜÇEŞME');  // söğütlüçeşme
TrText.TurkishToLower('MÜHENDİS');     // mühendis
```

#### `TurkishCapitalize(text: string): string`
Capitalizes the first character with Turkish rules.

```typescript
TrText.TurkishCapitalize('istanbul');  // İstanbul
TrText.TurkishCapitalize('ankara');    // Ankara
```

#### `TurkishToggleCase(text: string): string`
Toggles case (uppercase ↔ lowercase) respecting Turkish rules.

```typescript
TrText.TurkishToggleCase('İstanbul');  // İSTANBUL
TrText.TurkishToggleCase('ANKARA');    // ankara
```

### Character Transformation

#### `ToTurkish(text: string): string`
Converts ASCII text to uppercase with Turkish character support.

```typescript
TrText.ToTurkish('istanbul');  // İSTANBUL
TrText.ToTurkish('ankara');    // ANKARA
```

#### `RemoveTurkishChars(text: string): string`
Converts Turkish characters to ASCII equivalents and removes non-alphanumeric characters.

```typescript
TrText.RemoveTurkishChars('Merhaba, Dünya!');  // Merhaba Dunya
TrText.RemoveTurkishChars('Söğütlüçeşme-İzmir');    //Sogutlucesme-Izmir
```

#### `ReverseTurkish(text: string): string`
Reverses the `ToTurkish` operation (converts Turkish uppercase back to ASCII).

```typescript
TrText.ReverseTurkish('İSTANBUL');  // ISTANBUL
TrText.ReverseTurkish('SÖĞÜTLÜÇEŞME');   // SOGUTLUCESME
```

#### `StripTurkishDiacritics(text: string): string`
Removes Turkish diacritics while keeping base letters.

```typescript
TrText.StripTurkishDiacritics('söğütlüçeşme');     // sogutlucesme
TrText.StripTurkishDiacritics('MÜHENDIS');    // MUHENDIS
```

### Text Analysis

#### `ContainsTurkishChars(text: string): boolean`
Checks if text contains any Turkish characters.

```typescript
TrText.ContainsTurkishChars('Merhaba');       // true
TrText.ContainsTurkishChars('Hello');         // false
TrText.ContainsTurkishChars('Hello Dünya');   // true
```

#### `IsMixedCase(text: string): boolean`
Checks if text contains both uppercase and lowercase characters.

```typescript
TrText.IsMixedCase('Istanbul');   // true
TrText.IsMixedCase('ISTANBUL');   // false
TrText.IsMixedCase('istanbul');   // false
```

#### `GetTurkishCharCount(text: string): number`
Counts Turkish characters in text.

```typescript
TrText.GetTurkishCharCount('Merhaba');        // 0
TrText.GetTurkishCharCount('Söğütlüçeşme');        // 5 (ö,ü,ü,ç,ş)
TrText.GetTurkishCharCount('Mühendis');       // 2 (ü, i)
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
import { TrText } from '@bytegis/turkish-toolbox';

// Büyük harfe dönüştürme
TrText.TurkishToUpper('istanbul'); // İSTANBUL

// Küçük harfe dönüştürme
TrText.TurkishToLower('İSTANBUL'); // istanbul

// İlk harfi büyüt
TrText.TurkishCapitalize('istanbul'); // İstanbul

// Türkçe karakter kontrolü
TrText.ContainsTurkishChars('Merhaba'); // true
```

## API Referansı

### Harf Dönüşümü

#### `TurkishToUpper(text: string): string`
Metni Türkçe karakter kurallarını kullanarak büyük harfe dönüştürür.

```typescript
TrText.TurkishToUpper('istanbul');     // İSTANBUL
TrText.TurkishToUpper('söğütlüçeşme');      // SÖĞÜTLÜÇEŞME
TrText.TurkishToUpper('mühendis');     // MÜHENDİS
```

#### `TurkishToLower(text: string): string`
Metni Türkçe karakter kurallarını kullanarak küçük harfe dönüştürür.

```typescript
TrText.TurkishToLower('ISTANBUL');     // istanbul
TrText.TurkishToLower('SÖĞÜTLÜÇEŞME');      // söğütlüçeşme
TrText.TurkishToLower('MÜHENDİS');     // mühendis
```

#### `TurkishCapitalize(text: string): string`
Türkçe kurallarıyla ilk karakteri büyüklüklü yapar.

```typescript
TrText.TurkishCapitalize('istanbul');  // İstanbul
TrText.TurkishCapitalize('ankara');    // Ankara
```

#### `TurkishToggleCase(text: string): string`
Büyük/küçük harf değişimi yapar ve Türkçe kurallarına uyar.

```typescript
TrText.TurkishToggleCase('İstanbul');  // İSTANBUL
TrText.TurkishToggleCase('ANKARA');    // ankara
```

### Karakter Dönüştürme

#### `ToTurkish(text: string): string`
ASCII metni Türkçe karakter desteğiyle büyük harfe dönüştürür.

```typescript
TrText.ToTurkish('istanbul');  // İSTANBUL
TrText.ToTurkish('ankara');    // ANKARA
```

#### `RemoveTurkishChars(text: string): string`
Türkçe karakterleri ASCII eşdeğerlerine dönüştürür ve alfanümerik olmayan karakterleri kaldırır.

```typescript
TrText.RemoveTurkishChars('Merhaba, Dünya!');  // Merhaba Dunya
TrText.RemoveTurkishChars('Göztepe-İzmir');    // Goztepe-Izmir
```

#### `ReverseTurkish(text: string): string`
`ToTurkish` işlemini geri alır (Türkçe büyük harfleri ASCII'ye çevirir).

```typescript
TrText.ReverseTurkish('İSTANBUL');  // ISTANBUL
TrText.ReverseTurkish('SÖĞÜTLÜÇEŞME');   // SOGUTLUCESME
```

#### `StripTurkishDiacritics(text: string): string`
Türkçe diakritikleri kaldırırken temel harfleri tutar.

```typescript
TrText.StripTurkishDiacritics('söğütlüçeşme');     //sogutlucesme
TrText.StripTurkishDiacritics('MÜHENDIS');    // MUHENDIS
```

### Metin Analizi

#### `ContainsTurkishChars(text: string): boolean`
Metinde herhangi bir Türkçe karakter olup olmadığını kontrol eder.

```typescript
TrText.ContainsTurkishChars('Merhaba');       // true
TrText.ContainsTurkishChars('Hello');         // false
TrText.ContainsTurkishChars('Hello Dünya');   // true
```

#### `IsMixedCase(text: string): boolean`
Metinde büyük ve küçük harflerin karışık olup olmadığını kontrol eder.

```typescript
TrText.IsMixedCase('Istanbul');   // true
TrText.IsMixedCase('ISTANBUL');   // false
TrText.IsMixedCase('istanbul');   // false
```

#### `GetTurkishCharCount(text: string): number`
Metindeki Türkçe karakter sayısını sayar.

```typescript
TrText.GetTurkishCharCount('Merhaba');        // 0
TrText.GetTurkishCharCount('Göztepe');        // 1 (ö)
TrText.GetTurkishCharCount('Mühendis');       // 2 (ü, i)
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