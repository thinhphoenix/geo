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
    assert: { type: "json" },
  });
}

// Helper load language theo locale
function loadLanguage(locale) {
  return import(`cldr-localenames-full/main/${locale}/languages.json`, {
    assert: { type: "json" },
  });
}

const out = {};
for (const c of countries) {
  const code = c.cca2.toLowerCase();
  out[code] = {
    flag: `https://flagcdn.com/${code}.svg`,
    name: {},
    lang: {},
  };

  // Lấy tên quốc gia theo từng locale
  for (const loc of locales) {
    try {
      const mod = await loadTerritory(loc);
      const territory = mod.default.main[loc].localeDisplayNames.territories;
      const alpha2 = c.cca2.toUpperCase();
      if (territory[alpha2]) {
        out[code].name[loc] = territory[alpha2];
      }
    } catch {
      // skip nếu locale chưa có
    }
  }

  // Thêm field native cho name (key luôn lowercase, ưu tiên common)
  if (c.name && c.name.native) {
    out[code].name.native = {};
    for (const [lang, val] of Object.entries(c.name.native)) {
      const key = (langCodeMap[lang] || lang).toLowerCase(); // ✅ chuẩn hóa luôn
      if (val.common) out[code].name.native[key] = val.common;
      else if (val.official) out[code].name.native[key] = val.official;
    }
  }

  // Lấy languages chính thức (đa ngôn ngữ)
  if (c.languages) {
    out[code].lang = {};
    for (const [langCode, nativeName] of Object.entries(c.languages)) {
      // map ISO639-3 -> ISO639-1 nếu có
      const cldrCode = langCodeMap[langCode] || langCode;
      const langKey = cldrCode.toLowerCase(); // ✅ chuẩn hóa key về ISO639-1 nếu có

      out[code].lang[langKey] = {};

      for (const loc of locales) {
        try {
          const mod = await loadLanguage(loc);
          const langs = mod.default.main[loc].localeDisplayNames.languages;
          if (langs[langKey]) {
            out[code].lang[langKey][loc] = langs[langKey];
          }
        } catch {
          // skip nếu locale chưa có
        }
      }

      // Thêm field native cho lang
      out[code].lang[langKey].native = {};
      if (langKey === "vi") {
        // Ưu tiên CLDR "Tiếng Việt"
        out[code].lang[langKey].native[langKey] =
          out[code].lang[langKey]["vi"] || "Tiếng Việt";
      } else if (c.name && c.name.native && c.name.native[langCode]) {
        if (c.name.native[langCode].common)
          out[code].lang[langKey].native[langKey] =
            c.name.native[langCode].common;
        else if (c.name.native[langCode].official)
          out[code].lang[langKey].native[langKey] =
            c.name.native[langCode].official;
      } else {
        out[code].lang[langKey].native[langKey] = nativeName;
      }
    }
  }
}

// Xuất JSON
const OUT_JSON = path.join(OUT_DIR, "countries.json");
await fs.promises.writeFile(OUT_JSON, JSON.stringify(out, null, 2), "utf8");

// Xuất JS (ESM import)
const OUT_JS = path.join(OUT_DIR, "countries.js");
const jsContent = `export default ${JSON.stringify(out, null, 2)};\n`;
await fs.promises.writeFile(OUT_JS, jsContent, "utf8");

console.log(`Generated ${OUT_JSON} and ${OUT_JS}`);