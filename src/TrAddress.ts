const CITIES = [
  "Adana",
  "Adıyaman",
  "Afyonkarahisar",
  "Ağrı",
  "Amasya",
  "Ankara",
  "Antalya",
  "Artvin",
  "Aydın",
  "Balıkesir",
  "Bilecik",
  "Bingöl",
  "Bitlis",
  "Bolu",
  "Burdur",
  "Bursa",
  "Çanakkale",
  "Çankırı",
  "Çorum",
  "Denizli",
  "Diyarbakır",
  "Edirne",
  "Elazığ",
  "Erzincan",
  "Erzurum",
  "Eskişehir",
  "Gaziantep",
  "Giresun",
  "Gümüşhane",
  "Hakkari",
  "Hatay",
  "Isparta",
  "Mersin",
  "İstanbul",
  "İzmir",
  "Kars",
  "Kastamonu",
  "Kayseri",
  "Kırklareli",
  "Kırşehir",
  "Kocaeli",
  "Konya",
  "Kütahya",
  "Malatya",
  "Manisa",
  "Kahramanmaraş",
  "Mardin",
  "Muğla",
  "Muş",
  "Nevşehir",
  "Niğde",
  "Ordu",
  "Rize",
  "Sakarya",
  "Samsun",
  "Siirt",
  "Sinop",
  "Sivas",
  "Tekirdağ",
  "Tokat",
  "Trabzon",
  "Tunceli",
  "Şanlıurfa",
  "Uşak",
  "Van",
  "Yozgat",
  "Zonguldak",
  "Aksaray",
  "Bayburt",
  "Karaman",
  "Kırıkkale",
  "Batman",
  "Şırnak",
  "Bartın",
  "Ardahan",
  "Iğdır",
  "Yalova",
  "Karabük",
  "Kilis",
  "Osmaniye",
  "Düzce",
];

const cityKey = (value: string): string => value.toLocaleLowerCase("tr-TR").replace(/\s+/g, "");

export const TrAddress = {
  Cities: CITIES.slice(),

  NormalizeCity: (value: string): string | null => {
    if (!value) return null;
    const key = cityKey(value);
    for (let index = 0; index < CITIES.length; index += 1) {
      if (cityKey(CITIES[index]) === key) return CITIES[index];
    }
    return null;
  },

  IsValidPlateCode: (value: number | string): boolean => {
    const code = Number(value);
    return code >= 1 && code <= 81 && Math.floor(code) === code;
  },

  GetCityByPlateCode: (value: number | string): string | null => {
    const code = Number(value);
    if (!TrAddress.IsValidPlateCode(code)) return null;
    return CITIES[code - 1];
  },

  GetPlateCode: (city: string): number | null => {
    const normalized = TrAddress.NormalizeCity(city);
    if (!normalized) return null;
    return CITIES.indexOf(normalized) + 1;
  },
};
