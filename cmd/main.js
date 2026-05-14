import fs from "fs";
import path from "path";
import countries from "world-countries";

const OUT_DIR = "./out";
await fs.promises.mkdir(OUT_DIR, { recursive: true });

// Toàn bộ locales phổ biến trong CLDR
const locales = [
  "af",
  "am",
  "ar",
  "az",
  "be",
  "bg",
  "bn",
  "bs",
  "ca",
  "cs",
  "cy",
  "da",
  "de",
  "el",
  "en",
  "es",
  "et",
  "eu",
  "fa",
  "fi",
  "fil",
  "fr",
  "ga",
  "gl",
  "gu",
  "he",
  "hi",
  "hr",
  "hu",
  "hy",
  "id",
  "is",
  "it",
  "ja",
  "jv",
  "ka",
  "kk",
  "km",
  "kn",
  "ko",
  "ky",
  "lo",
  "lt",
  "lv",
  "mk",
  "ml",
  "mn",
  "mr",
  "ms",
  "my",
  "ne",
  "nl",
  "no",
  "or",
  "pa",
  "pl",
  "ps",
  "pt",
  "ro",
  "ru",
  "si",
  "sk",
  "sl",
  "sq",
  "sr",
  "sv",
  "sw",
  "ta",
  "te",
  "th",
  "tr",
  "uk",
  "ur",
  "uz",
  "vi",
  "zh",
  "zu",
];

// Map ISO639-3 (world-countries) → ISO639-1 (CLDR)
const langCodeMap = {
  afr: "af",
  amh: "am",
  ara: "ar",
  aze: "az",
  bel: "be",
  bul: "bg",
  ben: "bn",
  bos: "bs",
  cat: "ca",
  ces: "cs",
  cym: "cy",
  dan: "da",
  deu: "de",
  ell: "el",
  eng: "en",
  spa: "es",
  est: "et",
  eus: "eu",
  fas: "fa",
  fin: "fi",
  fil: "fil",
  fra: "fr",
  gle: "ga",
  glg: "gl",
  guj: "gu",
  heb: "he",
  hin: "hi",
  hrv: "hr",
  hun: "hu",
  hye: "hy",
  ind: "id",
  isl: "is",
  ita: "it",
  jpn: "ja",
  jav: "jv",
  kat: "ka",
  kaz: "kk",
  khm: "km",
  kan: "kn",
  kor: "ko",
  kir: "ky",
  lao: "lo",
  lit: "lt",
  lav: "lv",
  mkd: "mk",
  mal: "ml",
  mon: "mn",
  mar: "mr",
  msa: "ms",
  mya: "my",
  nep: "ne",
  nld: "nl",
  nor: "no",
  ori: "or",
  pan: "pa",
  pol: "pl",
  pus: "ps",
  por: "pt",
  ron: "ro",
  rus: "ru",
  sin: "si",
  slk: "sk",
  slv: "sl",
  sqi: "sq",
  srp: "sr",
  swe: "sv",
  swa: "sw",
  tam: "ta",
  tel: "te",
  tha: "th",
  tur: "tr",
  ukr: "uk",
  urd: "ur",
  uzb: "uz",
  vie: "vi",
  zho: "zh",
  zul: "zu",
};

// Helper load territory theo locale
function loadTerritory(locale) {
  return import(`cldr-localenames-full/main/${locale}/territories.json`, {
    with: { type: "json" },
  });
}

// Helper load language theo locale
function loadLanguage(locale) {
  return import(`cldr-localenames-full/main/${locale}/languages.json`, {
    with: { type: "json" },
  });
}

const outArr = [];
const outMap = {};
for (const c of countries) {
  const code = c.cca2.toLowerCase();
  const entry = {
    code,
    flag: `https://flagcdn.com/${code}.svg`,
    name: {},
    lang: {},
    phone: "",
  };
  outMap[code] = entry;
  outArr.push(entry);

  // Lấy tên quốc gia theo từng locale
  for (const loc of locales) {
    try {
      const mod = await loadTerritory(loc);
      const territory = mod.default.main[loc].localeDisplayNames.territories;
      const alpha2 = c.cca2.toUpperCase();
      if (territory[alpha2]) {
        entry.name[loc] = territory[alpha2];
      }
    } catch {
      // skip nếu locale chưa có
    }
  }

  // Thêm field native cho name (key luôn lowercase, ưu tiên common)
  if (c.name && c.name.native) {
    entry.name.native = {};
    for (const [lang, val] of Object.entries(c.name.native)) {
      const key = (langCodeMap[lang] || lang).toLowerCase();
      if (val.common) entry.name.native[key] = val.common;
      else if (val.official) entry.name.native[key] = val.official;
    }
  }

  // Lấy languages chính thức (đa ngôn ngữ)
  if (c.languages) {
    entry.lang = {};
    for (const [langCode, nativeName] of Object.entries(c.languages)) {
      const cldrCode = langCodeMap[langCode] || langCode;
      const langKey = cldrCode.toLowerCase();

      entry.lang[langKey] = {};

      for (const loc of locales) {
        try {
          const mod = await loadLanguage(loc);
          const langs = mod.default.main[loc].localeDisplayNames.languages;
          if (langs[langKey]) {
            entry.lang[langKey][loc] = langs[langKey];
          }
        } catch {
          // skip nếu locale chưa có
        }
      }

      entry.lang[langKey].native = {};
      if (langKey === "vi") {
        entry.lang[langKey].native[langKey] =
          entry.lang[langKey]["vi"] || "Tiếng Việt";
      } else if (c.name && c.name.native && c.name.native[langCode]) {
        if (c.name.native[langCode].common)
          entry.lang[langKey].native[langKey] =
            c.name.native[langCode].common;
        else if (c.name.native[langCode].official)
          entry.lang[langKey].native[langKey] =
            c.name.native[langCode].official;
      } else {
        entry.lang[langKey].native[langKey] = nativeName;
      }
    }
  }

  // Mã quốc gia
  if (c.idd) {
    const { root, suffixes } = c.idd;
    entry.phone = suffixes.length === 1 ? `${root}${suffixes[0]}` : root;
  }
}

// Xuất từng country thành file JSON riêng (cho jsDelivr)
const JSON_DIR = path.join(OUT_DIR, "json");
await fs.promises.mkdir(JSON_DIR, { recursive: true });
for (const entry of outArr) {
  const filePath = path.join(JSON_DIR, `${entry.code}.json`);
  const payload = JSON.stringify({ data: entry, message: "success", status: 200 }, null, 2);
  await fs.promises.writeFile(filePath, payload, "utf8");
}

// Xuất all.json (tất cả countries)
const ALL_JSON = path.join(JSON_DIR, "all.json");
const allPayload = JSON.stringify({ data: outArr, message: "success", status: 200 }, null, 2);
await fs.promises.writeFile(ALL_JSON, allPayload, "utf8");

// Xuất all (không đuôi, ở root out/)
const ALL_ROOT = path.join(OUT_DIR, "all");
await fs.promises.writeFile(ALL_ROOT, allPayload, "utf8");

// Xuất từng country ra out/ không đuôi
for (const entry of outArr) {
  const fullPayload = JSON.stringify({ data: entry, message: "success", status: 200 }, null, 2);
  await fs.promises.writeFile(path.join(OUT_DIR, entry.code), fullPayload, "utf8");
}

console.log(`Generated ${outArr.length} countries in out/ and out/json/`);