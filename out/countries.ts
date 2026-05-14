export interface CountryEntry {
  flag: string;
  name: Record<string, string | Record<string, string>>;
  lang: Record<string, Record<string, string | Record<string, string>>>;
  phone: string;
}

const countries: Record<string, CountryEntry> = {
  "aw": {
    "flag": "https://flagcdn.com/aw.svg",
    "name": {
      "native": {
        "nl": "Aruba",
        "pap": "Aruba"
      }
    },
    "lang": {
      "nl": {
        "native": {
          "nl": "Aruba"
        }
      },
      "pap": {
        "native": {
          "pap": "Aruba"
        }
      }
    },
    "phone": "+297"
  },
  "af": {
    "flag": "https://flagcdn.com/af.svg",
    "name": {
      "native": {
        "prs": "افغانستان",
        "ps": "افغانستان",
        "tuk": "Owganystan"
      }
    },
    "lang": {
      "prs": {
        "native": {
          "prs": "افغانستان"
        }
      },
      "ps": {
        "native": {
          "ps": "افغانستان"
        }
      },
      "tuk": {
        "native": {
          "tuk": "Owganystan"
        }
      }
    },
    "phone": "+93"
  },
  "ao": {
    "flag": "https://flagcdn.com/ao.svg",
    "name": {
      "native": {
        "pt": "Angola"
      }
    },
    "lang": {
      "pt": {
        "native": {
          "pt": "Angola"
        }
      }
    },
    "phone": "+244"
  },
  "ai": {
    "flag": "https://flagcdn.com/ai.svg",
    "name": {
      "native": {
        "en": "Anguilla"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Anguilla"
        }
      }
    },
    "phone": "+1264"
  },
  "ax": {
    "flag": "https://flagcdn.com/ax.svg",
    "name": {
      "native": {
        "sv": "Åland"
      }
    },
    "lang": {
      "sv": {
        "native": {
          "sv": "Åland"
        }
      }
    },
    "phone": "+35818"
  },
  "al": {
    "flag": "https://flagcdn.com/al.svg",
    "name": {
      "native": {
        "sq": "Shqipëria"
      }
    },
    "lang": {
      "sq": {
        "native": {
          "sq": "Shqipëria"
        }
      }
    },
    "phone": "+355"
  },
  "ad": {
    "flag": "https://flagcdn.com/ad.svg",
    "name": {
      "native": {
        "ca": "Andorra"
      }
    },
    "lang": {
      "ca": {
        "native": {
          "ca": "Andorra"
        }
      }
    },
    "phone": "+376"
  },
  "ae": {
    "flag": "https://flagcdn.com/ae.svg",
    "name": {
      "native": {
        "ar": "الإمارات"
      }
    },
    "lang": {
      "ar": {
        "native": {
          "ar": "الإمارات"
        }
      }
    },
    "phone": "+971"
  },
  "ar": {
    "flag": "https://flagcdn.com/ar.svg",
    "name": {
      "native": {
        "grn": "Argentina",
        "es": "Argentina"
      }
    },
    "lang": {
      "grn": {
        "native": {
          "grn": "Argentina"
        }
      },
      "es": {
        "native": {
          "es": "Argentina"
        }
      }
    },
    "phone": "+54"
  },
  "am": {
    "flag": "https://flagcdn.com/am.svg",
    "name": {
      "native": {
        "hy": "Հայաստան"
      }
    },
    "lang": {
      "hy": {
        "native": {
          "hy": "Հայաստան"
        }
      }
    },
    "phone": "+374"
  },
  "as": {
    "flag": "https://flagcdn.com/as.svg",
    "name": {
      "native": {
        "en": "American Samoa",
        "smo": "Sāmoa Amelika"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "American Samoa"
        }
      },
      "smo": {
        "native": {
          "smo": "Sāmoa Amelika"
        }
      }
    },
    "phone": "+1684"
  },
  "aq": {
    "flag": "https://flagcdn.com/aq.svg",
    "name": {
      "native": {}
    },
    "lang": {},
    "phone": ""
  },
  "tf": {
    "flag": "https://flagcdn.com/tf.svg",
    "name": {
      "native": {
        "fr": "Terres australes et antarctiques françaises"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Terres australes et antarctiques françaises"
        }
      }
    },
    "phone": "+262"
  },
  "ag": {
    "flag": "https://flagcdn.com/ag.svg",
    "name": {
      "native": {
        "en": "Antigua and Barbuda"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Antigua and Barbuda"
        }
      }
    },
    "phone": "+1268"
  },
  "au": {
    "flag": "https://flagcdn.com/au.svg",
    "name": {
      "native": {
        "en": "Australia"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Australia"
        }
      }
    },
    "phone": "+61"
  },
  "at": {
    "flag": "https://flagcdn.com/at.svg",
    "name": {
      "native": {
        "bar": "Österreich"
      }
    },
    "lang": {
      "bar": {
        "native": {
          "bar": "Österreich"
        }
      }
    },
    "phone": "+43"
  },
  "az": {
    "flag": "https://flagcdn.com/az.svg",
    "name": {
      "native": {
        "az": "Azərbaycan",
        "ru": "Азербайджан"
      }
    },
    "lang": {
      "az": {
        "native": {
          "az": "Azərbaycan"
        }
      },
      "ru": {
        "native": {
          "ru": "Азербайджан"
        }
      }
    },
    "phone": "+994"
  },
  "bi": {
    "flag": "https://flagcdn.com/bi.svg",
    "name": {
      "native": {
        "fr": "Burundi",
        "run": "Uburundi"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Burundi"
        }
      },
      "run": {
        "native": {
          "run": "Uburundi"
        }
      }
    },
    "phone": "+257"
  },
  "be": {
    "flag": "https://flagcdn.com/be.svg",
    "name": {
      "native": {
        "de": "Belgien",
        "fr": "Belgique",
        "nl": "België"
      }
    },
    "lang": {
      "de": {
        "native": {
          "de": "Belgien"
        }
      },
      "fr": {
        "native": {
          "fr": "Belgique"
        }
      },
      "nl": {
        "native": {
          "nl": "België"
        }
      }
    },
    "phone": "+32"
  },
  "bj": {
    "flag": "https://flagcdn.com/bj.svg",
    "name": {
      "native": {
        "fr": "Bénin"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Bénin"
        }
      }
    },
    "phone": "+229"
  },
  "bf": {
    "flag": "https://flagcdn.com/bf.svg",
    "name": {
      "native": {
        "fr": "Burkina Faso"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Burkina Faso"
        }
      }
    },
    "phone": "+226"
  },
  "bd": {
    "flag": "https://flagcdn.com/bd.svg",
    "name": {
      "native": {
        "bn": "বাংলাদেশ"
      }
    },
    "lang": {
      "bn": {
        "native": {
          "bn": "বাংলাদেশ"
        }
      }
    },
    "phone": "+880"
  },
  "bg": {
    "flag": "https://flagcdn.com/bg.svg",
    "name": {
      "native": {
        "bg": "България"
      }
    },
    "lang": {
      "bg": {
        "native": {
          "bg": "България"
        }
      }
    },
    "phone": "+359"
  },
  "bh": {
    "flag": "https://flagcdn.com/bh.svg",
    "name": {
      "native": {
        "ar": "البحرين"
      }
    },
    "lang": {
      "ar": {
        "native": {
          "ar": "البحرين"
        }
      }
    },
    "phone": "+973"
  },
  "bs": {
    "flag": "https://flagcdn.com/bs.svg",
    "name": {
      "native": {
        "en": "Bahamas"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Bahamas"
        }
      }
    },
    "phone": "+1242"
  },
  "ba": {
    "flag": "https://flagcdn.com/ba.svg",
    "name": {
      "native": {
        "bs": "Bosna i Hercegovina",
        "hr": "Bosna i Hercegovina",
        "sr": "Боснa и Херцеговина"
      }
    },
    "lang": {
      "bs": {
        "native": {
          "bs": "Bosna i Hercegovina"
        }
      },
      "hr": {
        "native": {
          "hr": "Bosna i Hercegovina"
        }
      },
      "sr": {
        "native": {
          "sr": "Боснa и Херцеговина"
        }
      }
    },
    "phone": "+387"
  },
  "bl": {
    "flag": "https://flagcdn.com/bl.svg",
    "name": {
      "native": {
        "fr": "Saint-Barthélemy"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Saint-Barthélemy"
        }
      }
    },
    "phone": "+590"
  },
  "sh": {
    "flag": "https://flagcdn.com/sh.svg",
    "name": {
      "native": {
        "en": "Saint Helena, Ascension and Tristan da Cunha"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Saint Helena, Ascension and Tristan da Cunha"
        }
      }
    },
    "phone": "+2"
  },
  "by": {
    "flag": "https://flagcdn.com/by.svg",
    "name": {
      "native": {
        "be": "Белару́сь",
        "ru": "Беларусь"
      }
    },
    "lang": {
      "be": {
        "native": {
          "be": "Белару́сь"
        }
      },
      "ru": {
        "native": {
          "ru": "Беларусь"
        }
      }
    },
    "phone": "+375"
  },
  "bz": {
    "flag": "https://flagcdn.com/bz.svg",
    "name": {
      "native": {
        "bjz": "Belize",
        "en": "Belize",
        "es": "Belice"
      }
    },
    "lang": {
      "bjz": {
        "native": {
          "bjz": "Belize"
        }
      },
      "en": {
        "native": {
          "en": "Belize"
        }
      },
      "es": {
        "native": {
          "es": "Belice"
        }
      }
    },
    "phone": "+501"
  },
  "bm": {
    "flag": "https://flagcdn.com/bm.svg",
    "name": {
      "native": {
        "en": "Bermuda"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Bermuda"
        }
      }
    },
    "phone": "+1441"
  },
  "bo": {
    "flag": "https://flagcdn.com/bo.svg",
    "name": {
      "native": {
        "aym": "Wuliwya",
        "grn": "Volívia",
        "que": "Buliwya",
        "es": "Bolivia"
      }
    },
    "lang": {
      "aym": {
        "native": {
          "aym": "Wuliwya"
        }
      },
      "grn": {
        "native": {
          "grn": "Volívia"
        }
      },
      "que": {
        "native": {
          "que": "Buliwya"
        }
      },
      "es": {
        "native": {
          "es": "Bolivia"
        }
      }
    },
    "phone": "+591"
  },
  "bq": {
    "flag": "https://flagcdn.com/bq.svg",
    "name": {
      "native": {
        "nl": "Caribisch Nederland",
        "pap": "Boneiru, Sint Eustatius y Saba"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "English"
        }
      },
      "nl": {
        "native": {
          "nl": "Caribisch Nederland"
        }
      },
      "pap": {
        "native": {
          "pap": "Boneiru, Sint Eustatius y Saba"
        }
      }
    },
    "phone": "+599"
  },
  "br": {
    "flag": "https://flagcdn.com/br.svg",
    "name": {
      "native": {
        "pt": "Brasil"
      }
    },
    "lang": {
      "pt": {
        "native": {
          "pt": "Brasil"
        }
      }
    },
    "phone": "+55"
  },
  "bb": {
    "flag": "https://flagcdn.com/bb.svg",
    "name": {
      "native": {
        "en": "Barbados"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Barbados"
        }
      }
    },
    "phone": "+1246"
  },
  "bn": {
    "flag": "https://flagcdn.com/bn.svg",
    "name": {
      "native": {
        "ms": "Negara Brunei Darussalam"
      }
    },
    "lang": {
      "ms": {
        "native": {
          "ms": "Negara Brunei Darussalam"
        }
      }
    },
    "phone": "+673"
  },
  "bt": {
    "flag": "https://flagcdn.com/bt.svg",
    "name": {
      "native": {
        "dzo": "འབྲུག་ཡུལ་"
      }
    },
    "lang": {
      "dzo": {
        "native": {
          "dzo": "འབྲུག་ཡུལ་"
        }
      }
    },
    "phone": "+975"
  },
  "bv": {
    "flag": "https://flagcdn.com/bv.svg",
    "name": {
      "native": {
        "no": "Bouvetøya"
      }
    },
    "lang": {
      "no": {
        "native": {
          "no": "Bouvetøya"
        }
      }
    },
    "phone": "+47"
  },
  "bw": {
    "flag": "https://flagcdn.com/bw.svg",
    "name": {
      "native": {
        "en": "Botswana",
        "tsn": "Botswana"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Botswana"
        }
      },
      "tsn": {
        "native": {
          "tsn": "Botswana"
        }
      }
    },
    "phone": "+267"
  },
  "cf": {
    "flag": "https://flagcdn.com/cf.svg",
    "name": {
      "native": {
        "fr": "République centrafricaine",
        "sag": "Bêafrîka"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "République centrafricaine"
        }
      },
      "sag": {
        "native": {
          "sag": "Bêafrîka"
        }
      }
    },
    "phone": "+236"
  },
  "ca": {
    "flag": "https://flagcdn.com/ca.svg",
    "name": {
      "native": {
        "en": "Canada",
        "fr": "Canada"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Canada"
        }
      },
      "fr": {
        "native": {
          "fr": "Canada"
        }
      }
    },
    "phone": "+1"
  },
  "cc": {
    "flag": "https://flagcdn.com/cc.svg",
    "name": {
      "native": {
        "en": "Cocos (Keeling) Islands"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Cocos (Keeling) Islands"
        }
      }
    },
    "phone": "+61"
  },
  "ch": {
    "flag": "https://flagcdn.com/ch.svg",
    "name": {
      "native": {
        "fr": "Suisse",
        "gsw": "Schweiz",
        "it": "Svizzera",
        "roh": "Svizra"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Suisse"
        }
      },
      "gsw": {
        "native": {
          "gsw": "Schweiz"
        }
      },
      "it": {
        "native": {
          "it": "Svizzera"
        }
      },
      "roh": {
        "native": {
          "roh": "Svizra"
        }
      }
    },
    "phone": "+41"
  },
  "cl": {
    "flag": "https://flagcdn.com/cl.svg",
    "name": {
      "native": {
        "es": "Chile"
      }
    },
    "lang": {
      "es": {
        "native": {
          "es": "Chile"
        }
      }
    },
    "phone": "+56"
  },
  "cn": {
    "flag": "https://flagcdn.com/cn.svg",
    "name": {
      "native": {
        "zh": "中国"
      }
    },
    "lang": {
      "zh": {
        "native": {
          "zh": "中国"
        }
      }
    },
    "phone": "+86"
  },
  "ci": {
    "flag": "https://flagcdn.com/ci.svg",
    "name": {
      "native": {
        "fr": "Côte d'Ivoire"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Côte d'Ivoire"
        }
      }
    },
    "phone": "+225"
  },
  "cm": {
    "flag": "https://flagcdn.com/cm.svg",
    "name": {
      "native": {
        "en": "Cameroon",
        "fr": "Cameroun"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Cameroon"
        }
      },
      "fr": {
        "native": {
          "fr": "Cameroun"
        }
      }
    },
    "phone": "+237"
  },
  "cd": {
    "flag": "https://flagcdn.com/cd.svg",
    "name": {
      "native": {
        "fr": "RD Congo",
        "kon": "Repubilika ya Kongo Demokratiki",
        "lin": "Republiki ya Kongó Demokratiki",
        "lua": "Ditunga dia Kongu wa Mungalaata",
        "sw": "Jamhuri ya Kidemokrasia ya Kongo"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "RD Congo"
        }
      },
      "kon": {
        "native": {
          "kon": "Repubilika ya Kongo Demokratiki"
        }
      },
      "lin": {
        "native": {
          "lin": "Republiki ya Kongó Demokratiki"
        }
      },
      "lua": {
        "native": {
          "lua": "Ditunga dia Kongu wa Mungalaata"
        }
      },
      "sw": {
        "native": {
          "sw": "Jamhuri ya Kidemokrasia ya Kongo"
        }
      }
    },
    "phone": "+243"
  },
  "cg": {
    "flag": "https://flagcdn.com/cg.svg",
    "name": {
      "native": {
        "fr": "République du Congo",
        "kon": "Repubilika ya Kongo",
        "lin": "Republíki ya Kongó"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "République du Congo"
        }
      },
      "kon": {
        "native": {
          "kon": "Repubilika ya Kongo"
        }
      },
      "lin": {
        "native": {
          "lin": "Republíki ya Kongó"
        }
      }
    },
    "phone": "+242"
  },
  "ck": {
    "flag": "https://flagcdn.com/ck.svg",
    "name": {
      "native": {
        "en": "Cook Islands",
        "rar": "Kūki 'Āirani"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Cook Islands"
        }
      },
      "rar": {
        "native": {
          "rar": "Kūki 'Āirani"
        }
      }
    },
    "phone": "+682"
  },
  "co": {
    "flag": "https://flagcdn.com/co.svg",
    "name": {
      "native": {
        "es": "Colombia"
      }
    },
    "lang": {
      "es": {
        "native": {
          "es": "Colombia"
        }
      }
    },
    "phone": "+57"
  },
  "km": {
    "flag": "https://flagcdn.com/km.svg",
    "name": {
      "native": {
        "ar": "جزر القمر",
        "fr": "Comores",
        "zdj": "Komori"
      }
    },
    "lang": {
      "ar": {
        "native": {
          "ar": "جزر القمر"
        }
      },
      "fr": {
        "native": {
          "fr": "Comores"
        }
      },
      "zdj": {
        "native": {
          "zdj": "Komori"
        }
      }
    },
    "phone": "+269"
  },
  "cv": {
    "flag": "https://flagcdn.com/cv.svg",
    "name": {
      "native": {
        "pt": "Cabo Verde"
      }
    },
    "lang": {
      "pt": {
        "native": {
          "pt": "Cabo Verde"
        }
      }
    },
    "phone": "+238"
  },
  "cr": {
    "flag": "https://flagcdn.com/cr.svg",
    "name": {
      "native": {
        "es": "Costa Rica"
      }
    },
    "lang": {
      "es": {
        "native": {
          "es": "Costa Rica"
        }
      }
    },
    "phone": "+506"
  },
  "cu": {
    "flag": "https://flagcdn.com/cu.svg",
    "name": {
      "native": {
        "es": "Cuba"
      }
    },
    "lang": {
      "es": {
        "native": {
          "es": "Cuba"
        }
      }
    },
    "phone": "+53"
  },
  "cw": {
    "flag": "https://flagcdn.com/cw.svg",
    "name": {
      "native": {
        "en": "Curaçao",
        "nl": "Curaçao",
        "pap": "Pais Kòrsou"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Curaçao"
        }
      },
      "nl": {
        "native": {
          "nl": "Curaçao"
        }
      },
      "pap": {
        "native": {
          "pap": "Pais Kòrsou"
        }
      }
    },
    "phone": "+599"
  },
  "cx": {
    "flag": "https://flagcdn.com/cx.svg",
    "name": {
      "native": {
        "en": "Christmas Island"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Christmas Island"
        }
      }
    },
    "phone": "+61"
  },
  "ky": {
    "flag": "https://flagcdn.com/ky.svg",
    "name": {
      "native": {
        "en": "Cayman Islands"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Cayman Islands"
        }
      }
    },
    "phone": "+1345"
  },
  "cy": {
    "flag": "https://flagcdn.com/cy.svg",
    "name": {
      "native": {
        "el": "Κύπρος",
        "tr": "Kıbrıs"
      }
    },
    "lang": {
      "el": {
        "native": {
          "el": "Κύπρος"
        }
      },
      "tr": {
        "native": {
          "tr": "Kıbrıs"
        }
      }
    },
    "phone": "+357"
  },
  "cz": {
    "flag": "https://flagcdn.com/cz.svg",
    "name": {
      "native": {
        "cs": "Česko",
        "sk": "Česko"
      }
    },
    "lang": {
      "cs": {
        "native": {
          "cs": "Česko"
        }
      },
      "sk": {
        "native": {
          "sk": "Česko"
        }
      }
    },
    "phone": "+420"
  },
  "de": {
    "flag": "https://flagcdn.com/de.svg",
    "name": {
      "native": {
        "de": "Deutschland"
      }
    },
    "lang": {
      "de": {
        "native": {
          "de": "Deutschland"
        }
      }
    },
    "phone": "+49"
  },
  "dj": {
    "flag": "https://flagcdn.com/dj.svg",
    "name": {
      "native": {
        "ar": "جيبوتي",
        "fr": "Djibouti"
      }
    },
    "lang": {
      "ar": {
        "native": {
          "ar": "جيبوتي"
        }
      },
      "fr": {
        "native": {
          "fr": "Djibouti"
        }
      }
    },
    "phone": "+253"
  },
  "dm": {
    "flag": "https://flagcdn.com/dm.svg",
    "name": {
      "native": {
        "en": "Dominica"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Dominica"
        }
      }
    },
    "phone": "+1767"
  },
  "dk": {
    "flag": "https://flagcdn.com/dk.svg",
    "name": {
      "native": {
        "da": "Danmark"
      }
    },
    "lang": {
      "da": {
        "native": {
          "da": "Danmark"
        }
      }
    },
    "phone": "+45"
  },
  "do": {
    "flag": "https://flagcdn.com/do.svg",
    "name": {
      "native": {
        "es": "República Dominicana"
      }
    },
    "lang": {
      "es": {
        "native": {
          "es": "República Dominicana"
        }
      }
    },
    "phone": "+1"
  },
  "dz": {
    "flag": "https://flagcdn.com/dz.svg",
    "name": {
      "native": {
        "ar": "الجزائر"
      }
    },
    "lang": {
      "ar": {
        "native": {
          "ar": "الجزائر"
        }
      }
    },
    "phone": "+213"
  },
  "ec": {
    "flag": "https://flagcdn.com/ec.svg",
    "name": {
      "native": {
        "es": "Ecuador"
      }
    },
    "lang": {
      "es": {
        "native": {
          "es": "Ecuador"
        }
      }
    },
    "phone": "+593"
  },
  "eg": {
    "flag": "https://flagcdn.com/eg.svg",
    "name": {
      "native": {
        "ar": "مصر"
      }
    },
    "lang": {
      "ar": {
        "native": {
          "ar": "مصر"
        }
      }
    },
    "phone": "+20"
  },
  "er": {
    "flag": "https://flagcdn.com/er.svg",
    "name": {
      "native": {
        "ar": "إريتريا",
        "en": "Eritrea",
        "tir": "ኤርትራ"
      }
    },
    "lang": {
      "ar": {
        "native": {
          "ar": "إريتريا"
        }
      },
      "en": {
        "native": {
          "en": "Eritrea"
        }
      },
      "tir": {
        "native": {
          "tir": "ኤርትራ"
        }
      }
    },
    "phone": "+291"
  },
  "eh": {
    "flag": "https://flagcdn.com/eh.svg",
    "name": {
      "native": {
        "ber": "Western Sahara",
        "mey": "الصحراء الغربية",
        "es": "Sahara Occidental"
      }
    },
    "lang": {
      "ber": {
        "native": {
          "ber": "Western Sahara"
        }
      },
      "mey": {
        "native": {
          "mey": "الصحراء الغربية"
        }
      },
      "es": {
        "native": {
          "es": "Sahara Occidental"
        }
      }
    },
    "phone": "+2"
  },
  "es": {
    "flag": "https://flagcdn.com/es.svg",
    "name": {
      "native": {
        "es": "España"
      }
    },
    "lang": {
      "es": {
        "native": {
          "es": "España"
        }
      }
    },
    "phone": "+34"
  },
  "ee": {
    "flag": "https://flagcdn.com/ee.svg",
    "name": {
      "native": {
        "et": "Eesti"
      }
    },
    "lang": {
      "et": {
        "native": {
          "et": "Eesti"
        }
      }
    },
    "phone": "+372"
  },
  "et": {
    "flag": "https://flagcdn.com/et.svg",
    "name": {
      "native": {
        "am": "ኢትዮጵያ"
      }
    },
    "lang": {
      "am": {
        "native": {
          "am": "ኢትዮጵያ"
        }
      }
    },
    "phone": "+251"
  },
  "fi": {
    "flag": "https://flagcdn.com/fi.svg",
    "name": {
      "native": {
        "fi": "Suomi",
        "sv": "Finland"
      }
    },
    "lang": {
      "fi": {
        "native": {
          "fi": "Suomi"
        }
      },
      "sv": {
        "native": {
          "sv": "Finland"
        }
      }
    },
    "phone": "+358"
  },
  "fj": {
    "flag": "https://flagcdn.com/fj.svg",
    "name": {
      "native": {
        "en": "Fiji",
        "fij": "Viti",
        "hif": "फिजी"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Fiji"
        }
      },
      "fij": {
        "native": {
          "fij": "Viti"
        }
      },
      "hif": {
        "native": {
          "hif": "फिजी"
        }
      }
    },
    "phone": "+679"
  },
  "fk": {
    "flag": "https://flagcdn.com/fk.svg",
    "name": {
      "native": {
        "en": "Falkland Islands"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Falkland Islands"
        }
      }
    },
    "phone": "+500"
  },
  "fr": {
    "flag": "https://flagcdn.com/fr.svg",
    "name": {
      "native": {
        "fr": "France"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "France"
        }
      }
    },
    "phone": "+33"
  },
  "fo": {
    "flag": "https://flagcdn.com/fo.svg",
    "name": {
      "native": {
        "da": "Færøerne",
        "fao": "Føroyar"
      }
    },
    "lang": {
      "da": {
        "native": {
          "da": "Færøerne"
        }
      },
      "fao": {
        "native": {
          "fao": "Føroyar"
        }
      }
    },
    "phone": "+298"
  },
  "fm": {
    "flag": "https://flagcdn.com/fm.svg",
    "name": {
      "native": {
        "en": "Micronesia"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Micronesia"
        }
      }
    },
    "phone": "+691"
  },
  "ga": {
    "flag": "https://flagcdn.com/ga.svg",
    "name": {
      "native": {
        "fr": "Gabon"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Gabon"
        }
      }
    },
    "phone": "+241"
  },
  "gb": {
    "flag": "https://flagcdn.com/gb.svg",
    "name": {
      "native": {
        "en": "United Kingdom"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "United Kingdom"
        }
      }
    },
    "phone": "+44"
  },
  "ge": {
    "flag": "https://flagcdn.com/ge.svg",
    "name": {
      "native": {
        "ka": "საქართველო"
      }
    },
    "lang": {
      "ka": {
        "native": {
          "ka": "საქართველო"
        }
      }
    },
    "phone": "+995"
  },
  "gg": {
    "flag": "https://flagcdn.com/gg.svg",
    "name": {
      "native": {
        "en": "Guernsey",
        "fr": "Guernesey",
        "nfr": "Dgèrnésiais"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Guernsey"
        }
      },
      "fr": {
        "native": {
          "fr": "Guernesey"
        }
      },
      "nfr": {
        "native": {
          "nfr": "Dgèrnésiais"
        }
      }
    },
    "phone": "+44"
  },
  "gh": {
    "flag": "https://flagcdn.com/gh.svg",
    "name": {
      "native": {
        "en": "Ghana"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Ghana"
        }
      }
    },
    "phone": "+233"
  },
  "gi": {
    "flag": "https://flagcdn.com/gi.svg",
    "name": {
      "native": {
        "en": "Gibraltar"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Gibraltar"
        }
      }
    },
    "phone": "+350"
  },
  "gn": {
    "flag": "https://flagcdn.com/gn.svg",
    "name": {
      "native": {
        "fr": "Guinée"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Guinée"
        }
      }
    },
    "phone": "+224"
  },
  "gp": {
    "flag": "https://flagcdn.com/gp.svg",
    "name": {
      "native": {
        "fr": "Guadeloupe"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Guadeloupe"
        }
      }
    },
    "phone": "+590"
  },
  "gm": {
    "flag": "https://flagcdn.com/gm.svg",
    "name": {
      "native": {
        "en": "Gambia"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Gambia"
        }
      }
    },
    "phone": "+220"
  },
  "gw": {
    "flag": "https://flagcdn.com/gw.svg",
    "name": {
      "native": {
        "pt": "Guiné-Bissau",
        "pov": "Guiné-Bissau"
      }
    },
    "lang": {
      "pt": {
        "native": {
          "pt": "Guiné-Bissau"
        }
      },
      "pov": {
        "native": {
          "pov": "Guiné-Bissau"
        }
      }
    },
    "phone": "+245"
  },
  "gq": {
    "flag": "https://flagcdn.com/gq.svg",
    "name": {
      "native": {
        "fr": "Guinée équatoriale",
        "pt": "Guiné Equatorial",
        "es": "Guinea Ecuatorial"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Guinée équatoriale"
        }
      },
      "pt": {
        "native": {
          "pt": "Guiné Equatorial"
        }
      },
      "es": {
        "native": {
          "es": "Guinea Ecuatorial"
        }
      }
    },
    "phone": "+240"
  },
  "gr": {
    "flag": "https://flagcdn.com/gr.svg",
    "name": {
      "native": {
        "el": "Ελλάδα"
      }
    },
    "lang": {
      "el": {
        "native": {
          "el": "Ελλάδα"
        }
      }
    },
    "phone": "+30"
  },
  "gd": {
    "flag": "https://flagcdn.com/gd.svg",
    "name": {
      "native": {
        "en": "Grenada"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Grenada"
        }
      }
    },
    "phone": "+1473"
  },
  "gl": {
    "flag": "https://flagcdn.com/gl.svg",
    "name": {
      "native": {
        "kal": "Kalaallit Nunaat"
      }
    },
    "lang": {
      "kal": {
        "native": {
          "kal": "Kalaallit Nunaat"
        }
      }
    },
    "phone": "+299"
  },
  "gt": {
    "flag": "https://flagcdn.com/gt.svg",
    "name": {
      "native": {
        "es": "Guatemala"
      }
    },
    "lang": {
      "es": {
        "native": {
          "es": "Guatemala"
        }
      }
    },
    "phone": "+502"
  },
  "gf": {
    "flag": "https://flagcdn.com/gf.svg",
    "name": {
      "native": {
        "fr": "Guyane française"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Guyane française"
        }
      }
    },
    "phone": "+594"
  },
  "gu": {
    "flag": "https://flagcdn.com/gu.svg",
    "name": {
      "native": {
        "cha": "Guåhån",
        "en": "Guam",
        "es": "Guam"
      }
    },
    "lang": {
      "cha": {
        "native": {
          "cha": "Guåhån"
        }
      },
      "en": {
        "native": {
          "en": "Guam"
        }
      },
      "es": {
        "native": {
          "es": "Guam"
        }
      }
    },
    "phone": "+1671"
  },
  "gy": {
    "flag": "https://flagcdn.com/gy.svg",
    "name": {
      "native": {
        "en": "Guyana"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Guyana"
        }
      }
    },
    "phone": "+592"
  },
  "hk": {
    "flag": "https://flagcdn.com/hk.svg",
    "name": {
      "native": {
        "en": "Hong Kong",
        "zh": "香港"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Hong Kong"
        }
      },
      "zh": {
        "native": {
          "zh": "香港"
        }
      }
    },
    "phone": "+852"
  },
  "hm": {
    "flag": "https://flagcdn.com/hm.svg",
    "name": {
      "native": {
        "en": "Heard Island and McDonald Islands"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Heard Island and McDonald Islands"
        }
      }
    },
    "phone": ""
  },
  "hn": {
    "flag": "https://flagcdn.com/hn.svg",
    "name": {
      "native": {
        "es": "Honduras"
      }
    },
    "lang": {
      "es": {
        "native": {
          "es": "Honduras"
        }
      }
    },
    "phone": "+504"
  },
  "hr": {
    "flag": "https://flagcdn.com/hr.svg",
    "name": {
      "native": {
        "hr": "Hrvatska"
      }
    },
    "lang": {
      "hr": {
        "native": {
          "hr": "Hrvatska"
        }
      }
    },
    "phone": "+385"
  },
  "ht": {
    "flag": "https://flagcdn.com/ht.svg",
    "name": {
      "native": {
        "fr": "Haïti",
        "hat": "Ayiti"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Haïti"
        }
      },
      "hat": {
        "native": {
          "hat": "Ayiti"
        }
      }
    },
    "phone": "+509"
  },
  "hu": {
    "flag": "https://flagcdn.com/hu.svg",
    "name": {
      "native": {
        "hu": "Magyarország"
      }
    },
    "lang": {
      "hu": {
        "native": {
          "hu": "Magyarország"
        }
      }
    },
    "phone": "+36"
  },
  "id": {
    "flag": "https://flagcdn.com/id.svg",
    "name": {
      "native": {
        "id": "Indonesia"
      }
    },
    "lang": {
      "id": {
        "native": {
          "id": "Indonesia"
        }
      }
    },
    "phone": "+62"
  },
  "im": {
    "flag": "https://flagcdn.com/im.svg",
    "name": {
      "native": {
        "en": "Isle of Man",
        "glv": "Mannin"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Isle of Man"
        }
      },
      "glv": {
        "native": {
          "glv": "Mannin"
        }
      }
    },
    "phone": "+44"
  },
  "in": {
    "flag": "https://flagcdn.com/in.svg",
    "name": {
      "native": {
        "en": "India",
        "hi": "भारत",
        "ta": "இந்தியா"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "India"
        }
      },
      "hi": {
        "native": {
          "hi": "भारत"
        }
      },
      "ta": {
        "native": {
          "ta": "இந்தியா"
        }
      }
    },
    "phone": "+91"
  },
  "io": {
    "flag": "https://flagcdn.com/io.svg",
    "name": {
      "native": {
        "en": "British Indian Ocean Territory"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "British Indian Ocean Territory"
        }
      }
    },
    "phone": "+246"
  },
  "ie": {
    "flag": "https://flagcdn.com/ie.svg",
    "name": {
      "native": {
        "en": "Ireland",
        "ga": "Éire"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Ireland"
        }
      },
      "ga": {
        "native": {
          "ga": "Éire"
        }
      }
    },
    "phone": "+353"
  },
  "ir": {
    "flag": "https://flagcdn.com/ir.svg",
    "name": {
      "native": {
        "fa": "ایران"
      }
    },
    "lang": {
      "fa": {
        "native": {
          "fa": "ایران"
        }
      }
    },
    "phone": "+98"
  },
  "iq": {
    "flag": "https://flagcdn.com/iq.svg",
    "name": {
      "native": {
        "ar": "العراق",
        "arc": "ܩܘܼܛܢܵܐ",
        "ckb": "کۆماری"
      }
    },
    "lang": {
      "ar": {
        "native": {
          "ar": "العراق"
        }
      },
      "arc": {
        "native": {
          "arc": "ܩܘܼܛܢܵܐ"
        }
      },
      "ckb": {
        "native": {
          "ckb": "کۆماری"
        }
      }
    },
    "phone": "+964"
  },
  "is": {
    "flag": "https://flagcdn.com/is.svg",
    "name": {
      "native": {
        "is": "Ísland"
      }
    },
    "lang": {
      "is": {
        "native": {
          "is": "Ísland"
        }
      }
    },
    "phone": "+354"
  },
  "il": {
    "flag": "https://flagcdn.com/il.svg",
    "name": {
      "native": {
        "ar": "إسرائيل",
        "he": "ישראל"
      }
    },
    "lang": {
      "ar": {
        "native": {
          "ar": "إسرائيل"
        }
      },
      "he": {
        "native": {
          "he": "ישראל"
        }
      }
    },
    "phone": "+972"
  },
  "it": {
    "flag": "https://flagcdn.com/it.svg",
    "name": {
      "native": {
        "it": "Italia"
      }
    },
    "lang": {
      "it": {
        "native": {
          "it": "Italia"
        }
      }
    },
    "phone": "+39"
  },
  "jm": {
    "flag": "https://flagcdn.com/jm.svg",
    "name": {
      "native": {
        "en": "Jamaica",
        "jam": "Jamaica"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Jamaica"
        }
      },
      "jam": {
        "native": {
          "jam": "Jamaica"
        }
      }
    },
    "phone": "+1876"
  },
  "je": {
    "flag": "https://flagcdn.com/je.svg",
    "name": {
      "native": {
        "en": "Jersey",
        "fr": "Jersey",
        "nrf": "Jèrri"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Jersey"
        }
      },
      "fr": {
        "native": {
          "fr": "Jersey"
        }
      },
      "nrf": {
        "native": {
          "nrf": "Jèrri"
        }
      }
    },
    "phone": "+44"
  },
  "jo": {
    "flag": "https://flagcdn.com/jo.svg",
    "name": {
      "native": {
        "ar": "الأردن"
      }
    },
    "lang": {
      "ar": {
        "native": {
          "ar": "الأردن"
        }
      }
    },
    "phone": "+962"
  },
  "jp": {
    "flag": "https://flagcdn.com/jp.svg",
    "name": {
      "native": {
        "ja": "日本"
      }
    },
    "lang": {
      "ja": {
        "native": {
          "ja": "日本"
        }
      }
    },
    "phone": "+81"
  },
  "kz": {
    "flag": "https://flagcdn.com/kz.svg",
    "name": {
      "native": {
        "kk": "Қазақстан",
        "ru": "Казахстан"
      }
    },
    "lang": {
      "kk": {
        "native": {
          "kk": "Қазақстан"
        }
      },
      "ru": {
        "native": {
          "ru": "Казахстан"
        }
      }
    },
    "phone": "+7"
  },
  "ke": {
    "flag": "https://flagcdn.com/ke.svg",
    "name": {
      "native": {
        "en": "Kenya",
        "sw": "Kenya"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Kenya"
        }
      },
      "sw": {
        "native": {
          "sw": "Kenya"
        }
      }
    },
    "phone": "+254"
  },
  "kg": {
    "flag": "https://flagcdn.com/kg.svg",
    "name": {
      "native": {
        "ky": "Кыргызстан",
        "ru": "Киргизия"
      }
    },
    "lang": {
      "ky": {
        "native": {
          "ky": "Кыргызстан"
        }
      },
      "ru": {
        "native": {
          "ru": "Киргизия"
        }
      }
    },
    "phone": "+996"
  },
  "kh": {
    "flag": "https://flagcdn.com/kh.svg",
    "name": {
      "native": {
        "km": "Kâmpŭchéa"
      }
    },
    "lang": {
      "km": {
        "native": {
          "km": "Kâmpŭchéa"
        }
      }
    },
    "phone": "+855"
  },
  "ki": {
    "flag": "https://flagcdn.com/ki.svg",
    "name": {
      "native": {
        "en": "Kiribati",
        "gil": "Kiribati"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Kiribati"
        }
      },
      "gil": {
        "native": {
          "gil": "Kiribati"
        }
      }
    },
    "phone": "+686"
  },
  "kn": {
    "flag": "https://flagcdn.com/kn.svg",
    "name": {
      "native": {
        "en": "Saint Kitts and Nevis"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Saint Kitts and Nevis"
        }
      }
    },
    "phone": "+1869"
  },
  "kr": {
    "flag": "https://flagcdn.com/kr.svg",
    "name": {
      "native": {
        "ko": "한국"
      }
    },
    "lang": {
      "ko": {
        "native": {
          "ko": "한국"
        }
      }
    },
    "phone": "+82"
  },
  "xk": {
    "flag": "https://flagcdn.com/xk.svg",
    "name": {
      "native": {
        "sq": "Kosova",
        "sr": "Косово"
      }
    },
    "lang": {
      "sq": {
        "native": {
          "sq": "Kosova"
        }
      },
      "sr": {
        "native": {
          "sr": "Косово"
        }
      }
    },
    "phone": "+383"
  },
  "kw": {
    "flag": "https://flagcdn.com/kw.svg",
    "name": {
      "native": {
        "ar": "الكويت"
      }
    },
    "lang": {
      "ar": {
        "native": {
          "ar": "الكويت"
        }
      }
    },
    "phone": "+965"
  },
  "la": {
    "flag": "https://flagcdn.com/la.svg",
    "name": {
      "native": {
        "lo": "ສປປລາວ"
      }
    },
    "lang": {
      "lo": {
        "native": {
          "lo": "ສປປລາວ"
        }
      }
    },
    "phone": "+856"
  },
  "lb": {
    "flag": "https://flagcdn.com/lb.svg",
    "name": {
      "native": {
        "ar": "لبنان",
        "fr": "Liban"
      }
    },
    "lang": {
      "ar": {
        "native": {
          "ar": "لبنان"
        }
      },
      "fr": {
        "native": {
          "fr": "Liban"
        }
      }
    },
    "phone": "+961"
  },
  "lr": {
    "flag": "https://flagcdn.com/lr.svg",
    "name": {
      "native": {
        "en": "Liberia"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Liberia"
        }
      }
    },
    "phone": "+231"
  },
  "ly": {
    "flag": "https://flagcdn.com/ly.svg",
    "name": {
      "native": {
        "ar": "ليبيا"
      }
    },
    "lang": {
      "ar": {
        "native": {
          "ar": "ليبيا"
        }
      }
    },
    "phone": "+218"
  },
  "lc": {
    "flag": "https://flagcdn.com/lc.svg",
    "name": {
      "native": {
        "en": "Saint Lucia"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Saint Lucia"
        }
      }
    },
    "phone": "+1758"
  },
  "li": {
    "flag": "https://flagcdn.com/li.svg",
    "name": {
      "native": {
        "de": "Liechtenstein"
      }
    },
    "lang": {
      "de": {
        "native": {
          "de": "Liechtenstein"
        }
      }
    },
    "phone": "+423"
  },
  "lk": {
    "flag": "https://flagcdn.com/lk.svg",
    "name": {
      "native": {
        "si": "ශ්‍රී ලංකාව",
        "ta": "இலங்கை"
      }
    },
    "lang": {
      "si": {
        "native": {
          "si": "ශ්‍රී ලංකාව"
        }
      },
      "ta": {
        "native": {
          "ta": "இலங்கை"
        }
      }
    },
    "phone": "+94"
  },
  "ls": {
    "flag": "https://flagcdn.com/ls.svg",
    "name": {
      "native": {
        "en": "Lesotho",
        "sot": "Lesotho"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Lesotho"
        }
      },
      "sot": {
        "native": {
          "sot": "Lesotho"
        }
      }
    },
    "phone": "+266"
  },
  "lt": {
    "flag": "https://flagcdn.com/lt.svg",
    "name": {
      "native": {
        "lt": "Lietuva"
      }
    },
    "lang": {
      "lt": {
        "native": {
          "lt": "Lietuva"
        }
      }
    },
    "phone": "+370"
  },
  "lu": {
    "flag": "https://flagcdn.com/lu.svg",
    "name": {
      "native": {
        "de": "Luxemburg",
        "fr": "Luxembourg",
        "ltz": "Lëtzebuerg"
      }
    },
    "lang": {
      "de": {
        "native": {
          "de": "Luxemburg"
        }
      },
      "fr": {
        "native": {
          "fr": "Luxembourg"
        }
      },
      "ltz": {
        "native": {
          "ltz": "Lëtzebuerg"
        }
      }
    },
    "phone": "+352"
  },
  "lv": {
    "flag": "https://flagcdn.com/lv.svg",
    "name": {
      "native": {
        "lv": "Latvija"
      }
    },
    "lang": {
      "lv": {
        "native": {
          "lv": "Latvija"
        }
      }
    },
    "phone": "+371"
  },
  "mo": {
    "flag": "https://flagcdn.com/mo.svg",
    "name": {
      "native": {
        "pt": "Macau",
        "zh": "澳门"
      }
    },
    "lang": {
      "pt": {
        "native": {
          "pt": "Macau"
        }
      },
      "zh": {
        "native": {
          "zh": "澳门"
        }
      }
    },
    "phone": "+853"
  },
  "mf": {
    "flag": "https://flagcdn.com/mf.svg",
    "name": {
      "native": {
        "fr": "Saint-Martin"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Saint-Martin"
        }
      }
    },
    "phone": "+590"
  },
  "ma": {
    "flag": "https://flagcdn.com/ma.svg",
    "name": {
      "native": {
        "ar": "المغرب",
        "ber": "ⵍⵎⴰⵖⵔⵉⴱ"
      }
    },
    "lang": {
      "ar": {
        "native": {
          "ar": "المغرب"
        }
      },
      "ber": {
        "native": {
          "ber": "ⵍⵎⴰⵖⵔⵉⴱ"
        }
      }
    },
    "phone": "+212"
  },
  "mc": {
    "flag": "https://flagcdn.com/mc.svg",
    "name": {
      "native": {
        "fr": "Monaco"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Monaco"
        }
      }
    },
    "phone": "+377"
  },
  "md": {
    "flag": "https://flagcdn.com/md.svg",
    "name": {
      "native": {
        "ro": "Moldova"
      }
    },
    "lang": {
      "ro": {
        "native": {
          "ro": "Moldova"
        }
      }
    },
    "phone": "+373"
  },
  "mg": {
    "flag": "https://flagcdn.com/mg.svg",
    "name": {
      "native": {
        "fr": "Madagascar",
        "mlg": "Madagasikara"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Madagascar"
        }
      },
      "mlg": {
        "native": {
          "mlg": "Madagasikara"
        }
      }
    },
    "phone": "+261"
  },
  "mv": {
    "flag": "https://flagcdn.com/mv.svg",
    "name": {
      "native": {
        "div": "ދިވެހިރާއްޖޭގެ"
      }
    },
    "lang": {
      "div": {
        "native": {
          "div": "ދިވެހިރާއްޖޭގެ"
        }
      }
    },
    "phone": "+960"
  },
  "mx": {
    "flag": "https://flagcdn.com/mx.svg",
    "name": {
      "native": {
        "es": "México"
      }
    },
    "lang": {
      "es": {
        "native": {
          "es": "México"
        }
      }
    },
    "phone": "+52"
  },
  "mh": {
    "flag": "https://flagcdn.com/mh.svg",
    "name": {
      "native": {
        "en": "Marshall Islands",
        "mah": "M̧ajeļ"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Marshall Islands"
        }
      },
      "mah": {
        "native": {
          "mah": "M̧ajeļ"
        }
      }
    },
    "phone": "+692"
  },
  "mk": {
    "flag": "https://flagcdn.com/mk.svg",
    "name": {
      "native": {
        "mk": "Македонија"
      }
    },
    "lang": {
      "mk": {
        "native": {
          "mk": "Македонија"
        }
      }
    },
    "phone": "+389"
  },
  "ml": {
    "flag": "https://flagcdn.com/ml.svg",
    "name": {
      "native": {
        "fr": "Mali"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Mali"
        }
      }
    },
    "phone": "+223"
  },
  "mt": {
    "flag": "https://flagcdn.com/mt.svg",
    "name": {
      "native": {
        "en": "Malta",
        "mlt": "Malta"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Malta"
        }
      },
      "mlt": {
        "native": {
          "mlt": "Malta"
        }
      }
    },
    "phone": "+356"
  },
  "mm": {
    "flag": "https://flagcdn.com/mm.svg",
    "name": {
      "native": {
        "my": "မြန်မာ"
      }
    },
    "lang": {
      "my": {
        "native": {
          "my": "မြန်မာ"
        }
      }
    },
    "phone": "+95"
  },
  "me": {
    "flag": "https://flagcdn.com/me.svg",
    "name": {
      "native": {
        "cnr": "Црна Гора"
      }
    },
    "lang": {
      "cnr": {
        "native": {
          "cnr": "Црна Гора"
        }
      }
    },
    "phone": "+382"
  },
  "mn": {
    "flag": "https://flagcdn.com/mn.svg",
    "name": {
      "native": {
        "mn": "Монгол улс"
      }
    },
    "lang": {
      "mn": {
        "native": {
          "mn": "Монгол улс"
        }
      }
    },
    "phone": "+976"
  },
  "mp": {
    "flag": "https://flagcdn.com/mp.svg",
    "name": {
      "native": {
        "cal": "Northern Mariana Islands",
        "cha": "Na Islas Mariånas",
        "en": "Northern Mariana Islands"
      }
    },
    "lang": {
      "cal": {
        "native": {
          "cal": "Northern Mariana Islands"
        }
      },
      "cha": {
        "native": {
          "cha": "Na Islas Mariånas"
        }
      },
      "en": {
        "native": {
          "en": "Northern Mariana Islands"
        }
      }
    },
    "phone": "+1670"
  },
  "mz": {
    "flag": "https://flagcdn.com/mz.svg",
    "name": {
      "native": {
        "pt": "Moçambique"
      }
    },
    "lang": {
      "pt": {
        "native": {
          "pt": "Moçambique"
        }
      }
    },
    "phone": "+258"
  },
  "mr": {
    "flag": "https://flagcdn.com/mr.svg",
    "name": {
      "native": {
        "ar": "موريتانيا"
      }
    },
    "lang": {
      "ar": {
        "native": {
          "ar": "موريتانيا"
        }
      }
    },
    "phone": "+222"
  },
  "ms": {
    "flag": "https://flagcdn.com/ms.svg",
    "name": {
      "native": {
        "en": "Montserrat"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Montserrat"
        }
      }
    },
    "phone": "+1664"
  },
  "mq": {
    "flag": "https://flagcdn.com/mq.svg",
    "name": {
      "native": {
        "fr": "Martinique"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Martinique"
        }
      }
    },
    "phone": "+596"
  },
  "mu": {
    "flag": "https://flagcdn.com/mu.svg",
    "name": {
      "native": {
        "en": "Mauritius",
        "fr": "Maurice",
        "mfe": "Moris"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Mauritius"
        }
      },
      "fr": {
        "native": {
          "fr": "Maurice"
        }
      },
      "mfe": {
        "native": {
          "mfe": "Moris"
        }
      }
    },
    "phone": "+230"
  },
  "mw": {
    "flag": "https://flagcdn.com/mw.svg",
    "name": {
      "native": {
        "en": "Malawi",
        "nya": "Malaŵi"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Malawi"
        }
      },
      "nya": {
        "native": {
          "nya": "Malaŵi"
        }
      }
    },
    "phone": "+265"
  },
  "my": {
    "flag": "https://flagcdn.com/my.svg",
    "name": {
      "native": {
        "en": "Malaysia",
        "ms": "مليسيا"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Malaysia"
        }
      },
      "ms": {
        "native": {
          "ms": "مليسيا"
        }
      }
    },
    "phone": "+60"
  },
  "yt": {
    "flag": "https://flagcdn.com/yt.svg",
    "name": {
      "native": {
        "fr": "Mayotte"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Mayotte"
        }
      }
    },
    "phone": "+262"
  },
  "na": {
    "flag": "https://flagcdn.com/na.svg",
    "name": {
      "native": {
        "af": "Namibië",
        "de": "Namibia",
        "en": "Namibia",
        "her": "Namibia",
        "hgm": "Namibia",
        "kwn": "Namibia",
        "loz": "Namibia",
        "ndo": "Namibia",
        "tsn": "Namibia"
      }
    },
    "lang": {
      "af": {
        "native": {
          "af": "Namibië"
        }
      },
      "de": {
        "native": {
          "de": "Namibia"
        }
      },
      "en": {
        "native": {
          "en": "Namibia"
        }
      },
      "her": {
        "native": {
          "her": "Namibia"
        }
      },
      "hgm": {
        "native": {
          "hgm": "Namibia"
        }
      },
      "kwn": {
        "native": {
          "kwn": "Namibia"
        }
      },
      "loz": {
        "native": {
          "loz": "Namibia"
        }
      },
      "ndo": {
        "native": {
          "ndo": "Namibia"
        }
      },
      "tsn": {
        "native": {
          "tsn": "Namibia"
        }
      }
    },
    "phone": "+264"
  },
  "nc": {
    "flag": "https://flagcdn.com/nc.svg",
    "name": {
      "native": {
        "fr": "Nouvelle-Calédonie"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Nouvelle-Calédonie"
        }
      }
    },
    "phone": "+687"
  },
  "ne": {
    "flag": "https://flagcdn.com/ne.svg",
    "name": {
      "native": {
        "fr": "Niger"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Niger"
        }
      }
    },
    "phone": "+227"
  },
  "nf": {
    "flag": "https://flagcdn.com/nf.svg",
    "name": {
      "native": {
        "en": "Norfolk Island",
        "pih": "Norf'k Ailen"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Norfolk Island"
        }
      },
      "pih": {
        "native": {
          "pih": "Norf'k Ailen"
        }
      }
    },
    "phone": "+672"
  },
  "ng": {
    "flag": "https://flagcdn.com/ng.svg",
    "name": {
      "native": {
        "en": "Nigeria"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Nigeria"
        }
      }
    },
    "phone": "+234"
  },
  "ni": {
    "flag": "https://flagcdn.com/ni.svg",
    "name": {
      "native": {
        "es": "Nicaragua"
      }
    },
    "lang": {
      "es": {
        "native": {
          "es": "Nicaragua"
        }
      }
    },
    "phone": "+505"
  },
  "nu": {
    "flag": "https://flagcdn.com/nu.svg",
    "name": {
      "native": {
        "en": "Niue",
        "niu": "Niuē"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Niue"
        }
      },
      "niu": {
        "native": {
          "niu": "Niuē"
        }
      }
    },
    "phone": "+683"
  },
  "nl": {
    "flag": "https://flagcdn.com/nl.svg",
    "name": {
      "native": {
        "nl": "Nederland"
      }
    },
    "lang": {
      "nl": {
        "native": {
          "nl": "Nederland"
        }
      }
    },
    "phone": "+31"
  },
  "no": {
    "flag": "https://flagcdn.com/no.svg",
    "name": {
      "native": {
        "nno": "Noreg",
        "nob": "Norge",
        "smi": "Norgga"
      }
    },
    "lang": {
      "nno": {
        "native": {
          "nno": "Noreg"
        }
      },
      "nob": {
        "native": {
          "nob": "Norge"
        }
      },
      "smi": {
        "native": {
          "smi": "Norgga"
        }
      }
    },
    "phone": "+47"
  },
  "np": {
    "flag": "https://flagcdn.com/np.svg",
    "name": {
      "native": {
        "ne": "नेपाल"
      }
    },
    "lang": {
      "ne": {
        "native": {
          "ne": "नेपाल"
        }
      }
    },
    "phone": "+977"
  },
  "nr": {
    "flag": "https://flagcdn.com/nr.svg",
    "name": {
      "native": {
        "en": "Nauru",
        "nau": "Nauru"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Nauru"
        }
      },
      "nau": {
        "native": {
          "nau": "Nauru"
        }
      }
    },
    "phone": "+674"
  },
  "nz": {
    "flag": "https://flagcdn.com/nz.svg",
    "name": {
      "native": {
        "en": "New Zealand",
        "mri": "Aotearoa",
        "nzs": "New Zealand"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "New Zealand"
        }
      },
      "mri": {
        "native": {
          "mri": "Aotearoa"
        }
      },
      "nzs": {
        "native": {
          "nzs": "New Zealand"
        }
      }
    },
    "phone": "+64"
  },
  "om": {
    "flag": "https://flagcdn.com/om.svg",
    "name": {
      "native": {
        "ar": "عمان"
      }
    },
    "lang": {
      "ar": {
        "native": {
          "ar": "عمان"
        }
      }
    },
    "phone": "+968"
  },
  "pk": {
    "flag": "https://flagcdn.com/pk.svg",
    "name": {
      "native": {
        "en": "Pakistan",
        "ur": "پاكستان"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Pakistan"
        }
      },
      "ur": {
        "native": {
          "ur": "پاكستان"
        }
      }
    },
    "phone": "+92"
  },
  "pa": {
    "flag": "https://flagcdn.com/pa.svg",
    "name": {
      "native": {
        "es": "Panamá"
      }
    },
    "lang": {
      "es": {
        "native": {
          "es": "Panamá"
        }
      }
    },
    "phone": "+507"
  },
  "pn": {
    "flag": "https://flagcdn.com/pn.svg",
    "name": {
      "native": {
        "en": "Pitcairn Islands"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Pitcairn Islands"
        }
      }
    },
    "phone": "+64"
  },
  "pe": {
    "flag": "https://flagcdn.com/pe.svg",
    "name": {
      "native": {
        "aym": "Piruw",
        "que": "Piruw",
        "es": "Perú"
      }
    },
    "lang": {
      "aym": {
        "native": {
          "aym": "Piruw"
        }
      },
      "que": {
        "native": {
          "que": "Piruw"
        }
      },
      "es": {
        "native": {
          "es": "Perú"
        }
      }
    },
    "phone": "+51"
  },
  "ph": {
    "flag": "https://flagcdn.com/ph.svg",
    "name": {
      "native": {
        "en": "Philippines",
        "fil": "Pilipinas"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Philippines"
        }
      },
      "fil": {
        "native": {
          "fil": "Pilipinas"
        }
      }
    },
    "phone": "+63"
  },
  "pw": {
    "flag": "https://flagcdn.com/pw.svg",
    "name": {
      "native": {
        "en": "Palau",
        "pau": "Belau"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Palau"
        }
      },
      "pau": {
        "native": {
          "pau": "Belau"
        }
      }
    },
    "phone": "+680"
  },
  "pg": {
    "flag": "https://flagcdn.com/pg.svg",
    "name": {
      "native": {
        "en": "Papua New Guinea",
        "hmo": "Papua Niu Gini",
        "tpi": "Papua Niugini"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Papua New Guinea"
        }
      },
      "hmo": {
        "native": {
          "hmo": "Papua Niu Gini"
        }
      },
      "tpi": {
        "native": {
          "tpi": "Papua Niugini"
        }
      }
    },
    "phone": "+675"
  },
  "pl": {
    "flag": "https://flagcdn.com/pl.svg",
    "name": {
      "native": {
        "pl": "Polska"
      }
    },
    "lang": {
      "pl": {
        "native": {
          "pl": "Polska"
        }
      }
    },
    "phone": "+48"
  },
  "pr": {
    "flag": "https://flagcdn.com/pr.svg",
    "name": {
      "native": {
        "en": "Puerto Rico",
        "es": "Puerto Rico"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Puerto Rico"
        }
      },
      "es": {
        "native": {
          "es": "Puerto Rico"
        }
      }
    },
    "phone": "+1"
  },
  "kp": {
    "flag": "https://flagcdn.com/kp.svg",
    "name": {
      "native": {
        "ko": "조선"
      }
    },
    "lang": {
      "ko": {
        "native": {
          "ko": "조선"
        }
      }
    },
    "phone": "+850"
  },
  "pt": {
    "flag": "https://flagcdn.com/pt.svg",
    "name": {
      "native": {
        "pt": "Portugal"
      }
    },
    "lang": {
      "pt": {
        "native": {
          "pt": "Portugal"
        }
      }
    },
    "phone": "+351"
  },
  "py": {
    "flag": "https://flagcdn.com/py.svg",
    "name": {
      "native": {
        "grn": "Paraguái",
        "es": "Paraguay"
      }
    },
    "lang": {
      "grn": {
        "native": {
          "grn": "Paraguái"
        }
      },
      "es": {
        "native": {
          "es": "Paraguay"
        }
      }
    },
    "phone": "+595"
  },
  "ps": {
    "flag": "https://flagcdn.com/ps.svg",
    "name": {
      "native": {
        "ar": "فلسطين"
      }
    },
    "lang": {
      "ar": {
        "native": {
          "ar": "فلسطين"
        }
      }
    },
    "phone": "+970"
  },
  "pf": {
    "flag": "https://flagcdn.com/pf.svg",
    "name": {
      "native": {
        "fr": "Polynésie française"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Polynésie française"
        }
      }
    },
    "phone": "+689"
  },
  "qa": {
    "flag": "https://flagcdn.com/qa.svg",
    "name": {
      "native": {
        "ar": "قطر"
      }
    },
    "lang": {
      "ar": {
        "native": {
          "ar": "قطر"
        }
      }
    },
    "phone": "+974"
  },
  "re": {
    "flag": "https://flagcdn.com/re.svg",
    "name": {
      "native": {
        "fr": "La Réunion"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "La Réunion"
        }
      }
    },
    "phone": "+262"
  },
  "ro": {
    "flag": "https://flagcdn.com/ro.svg",
    "name": {
      "native": {
        "ro": "România"
      }
    },
    "lang": {
      "ro": {
        "native": {
          "ro": "România"
        }
      }
    },
    "phone": "+40"
  },
  "ru": {
    "flag": "https://flagcdn.com/ru.svg",
    "name": {
      "native": {
        "ru": "Россия"
      }
    },
    "lang": {
      "ru": {
        "native": {
          "ru": "Россия"
        }
      }
    },
    "phone": "+7"
  },
  "rw": {
    "flag": "https://flagcdn.com/rw.svg",
    "name": {
      "native": {
        "en": "Rwanda",
        "fr": "Rwanda",
        "kin": "Rwanda"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Rwanda"
        }
      },
      "fr": {
        "native": {
          "fr": "Rwanda"
        }
      },
      "kin": {
        "native": {
          "kin": "Rwanda"
        }
      }
    },
    "phone": "+250"
  },
  "sa": {
    "flag": "https://flagcdn.com/sa.svg",
    "name": {
      "native": {
        "ar": "السعودية"
      }
    },
    "lang": {
      "ar": {
        "native": {
          "ar": "السعودية"
        }
      }
    },
    "phone": "+966"
  },
  "sd": {
    "flag": "https://flagcdn.com/sd.svg",
    "name": {
      "native": {
        "ar": "السودان",
        "en": "Sudan"
      }
    },
    "lang": {
      "ar": {
        "native": {
          "ar": "السودان"
        }
      },
      "en": {
        "native": {
          "en": "Sudan"
        }
      }
    },
    "phone": "+249"
  },
  "sn": {
    "flag": "https://flagcdn.com/sn.svg",
    "name": {
      "native": {
        "fr": "Sénégal"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Sénégal"
        }
      }
    },
    "phone": "+221"
  },
  "sg": {
    "flag": "https://flagcdn.com/sg.svg",
    "name": {
      "native": {
        "en": "Singapore",
        "ms": "Singapura",
        "ta": "சிங்கப்பூர்",
        "zh": "新加坡"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Singapore"
        }
      },
      "ms": {
        "native": {
          "ms": "Singapura"
        }
      },
      "ta": {
        "native": {
          "ta": "சிங்கப்பூர்"
        }
      },
      "zh": {
        "native": {
          "zh": "新加坡"
        }
      }
    },
    "phone": "+65"
  },
  "gs": {
    "flag": "https://flagcdn.com/gs.svg",
    "name": {
      "native": {
        "en": "South Georgia"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "South Georgia"
        }
      }
    },
    "phone": "+500"
  },
  "sj": {
    "flag": "https://flagcdn.com/sj.svg",
    "name": {
      "native": {
        "no": "Svalbard og Jan Mayen"
      }
    },
    "lang": {
      "no": {
        "native": {
          "no": "Svalbard og Jan Mayen"
        }
      }
    },
    "phone": "+4779"
  },
  "sb": {
    "flag": "https://flagcdn.com/sb.svg",
    "name": {
      "native": {
        "en": "Solomon Islands"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Solomon Islands"
        }
      }
    },
    "phone": "+677"
  },
  "sl": {
    "flag": "https://flagcdn.com/sl.svg",
    "name": {
      "native": {
        "en": "Sierra Leone"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Sierra Leone"
        }
      }
    },
    "phone": "+232"
  },
  "sv": {
    "flag": "https://flagcdn.com/sv.svg",
    "name": {
      "native": {
        "es": "El Salvador"
      }
    },
    "lang": {
      "es": {
        "native": {
          "es": "El Salvador"
        }
      }
    },
    "phone": "+503"
  },
  "sm": {
    "flag": "https://flagcdn.com/sm.svg",
    "name": {
      "native": {
        "it": "San Marino"
      }
    },
    "lang": {
      "it": {
        "native": {
          "it": "San Marino"
        }
      }
    },
    "phone": "+378"
  },
  "so": {
    "flag": "https://flagcdn.com/so.svg",
    "name": {
      "native": {
        "ar": "الصومال",
        "som": "Soomaaliya"
      }
    },
    "lang": {
      "ar": {
        "native": {
          "ar": "الصومال"
        }
      },
      "som": {
        "native": {
          "som": "Soomaaliya"
        }
      }
    },
    "phone": "+252"
  },
  "pm": {
    "flag": "https://flagcdn.com/pm.svg",
    "name": {
      "native": {
        "fr": "Saint-Pierre-et-Miquelon"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Saint-Pierre-et-Miquelon"
        }
      }
    },
    "phone": "+508"
  },
  "rs": {
    "flag": "https://flagcdn.com/rs.svg",
    "name": {
      "native": {
        "sr": "Србија"
      }
    },
    "lang": {
      "sr": {
        "native": {
          "sr": "Србија"
        }
      }
    },
    "phone": "+381"
  },
  "ss": {
    "flag": "https://flagcdn.com/ss.svg",
    "name": {
      "native": {
        "en": "South Sudan"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "South Sudan"
        }
      }
    },
    "phone": "+211"
  },
  "st": {
    "flag": "https://flagcdn.com/st.svg",
    "name": {
      "native": {
        "pt": "São Tomé e Príncipe"
      }
    },
    "lang": {
      "pt": {
        "native": {
          "pt": "São Tomé e Príncipe"
        }
      }
    },
    "phone": "+239"
  },
  "sr": {
    "flag": "https://flagcdn.com/sr.svg",
    "name": {
      "native": {
        "nl": "Suriname"
      }
    },
    "lang": {
      "nl": {
        "native": {
          "nl": "Suriname"
        }
      }
    },
    "phone": "+597"
  },
  "sk": {
    "flag": "https://flagcdn.com/sk.svg",
    "name": {
      "native": {
        "sk": "Slovensko"
      }
    },
    "lang": {
      "sk": {
        "native": {
          "sk": "Slovensko"
        }
      }
    },
    "phone": "+421"
  },
  "si": {
    "flag": "https://flagcdn.com/si.svg",
    "name": {
      "native": {
        "sl": "Slovenija"
      }
    },
    "lang": {
      "sl": {
        "native": {
          "sl": "Slovenija"
        }
      }
    },
    "phone": "+386"
  },
  "se": {
    "flag": "https://flagcdn.com/se.svg",
    "name": {
      "native": {
        "sv": "Sverige"
      }
    },
    "lang": {
      "sv": {
        "native": {
          "sv": "Sverige"
        }
      }
    },
    "phone": "+46"
  },
  "sz": {
    "flag": "https://flagcdn.com/sz.svg",
    "name": {
      "native": {
        "en": "Eswatini",
        "ssw": "eSwatini"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Eswatini"
        }
      },
      "ssw": {
        "native": {
          "ssw": "eSwatini"
        }
      }
    },
    "phone": "+268"
  },
  "sx": {
    "flag": "https://flagcdn.com/sx.svg",
    "name": {
      "native": {
        "en": "Sint Maarten",
        "fr": "Saint-Martin",
        "nl": "Sint Maarten"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Sint Maarten"
        }
      },
      "fr": {
        "native": {
          "fr": "Saint-Martin"
        }
      },
      "nl": {
        "native": {
          "nl": "Sint Maarten"
        }
      }
    },
    "phone": "+1721"
  },
  "sc": {
    "flag": "https://flagcdn.com/sc.svg",
    "name": {
      "native": {
        "crs": "Sesel",
        "en": "Seychelles",
        "fr": "Seychelles"
      }
    },
    "lang": {
      "crs": {
        "native": {
          "crs": "Sesel"
        }
      },
      "en": {
        "native": {
          "en": "Seychelles"
        }
      },
      "fr": {
        "native": {
          "fr": "Seychelles"
        }
      }
    },
    "phone": "+248"
  },
  "sy": {
    "flag": "https://flagcdn.com/sy.svg",
    "name": {
      "native": {
        "ar": "سوريا"
      }
    },
    "lang": {
      "ar": {
        "native": {
          "ar": "سوريا"
        }
      }
    },
    "phone": "+963"
  },
  "tc": {
    "flag": "https://flagcdn.com/tc.svg",
    "name": {
      "native": {
        "en": "Turks and Caicos Islands"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Turks and Caicos Islands"
        }
      }
    },
    "phone": "+1649"
  },
  "td": {
    "flag": "https://flagcdn.com/td.svg",
    "name": {
      "native": {
        "ar": "تشاد",
        "fr": "Tchad"
      }
    },
    "lang": {
      "ar": {
        "native": {
          "ar": "تشاد"
        }
      },
      "fr": {
        "native": {
          "fr": "Tchad"
        }
      }
    },
    "phone": "+235"
  },
  "tg": {
    "flag": "https://flagcdn.com/tg.svg",
    "name": {
      "native": {
        "fr": "Togo"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Togo"
        }
      }
    },
    "phone": "+228"
  },
  "th": {
    "flag": "https://flagcdn.com/th.svg",
    "name": {
      "native": {
        "th": "ประเทศไทย"
      }
    },
    "lang": {
      "th": {
        "native": {
          "th": "ประเทศไทย"
        }
      }
    },
    "phone": "+66"
  },
  "tj": {
    "flag": "https://flagcdn.com/tj.svg",
    "name": {
      "native": {
        "ru": "Таджикистан",
        "tgk": "Тоҷикистон"
      }
    },
    "lang": {
      "ru": {
        "native": {
          "ru": "Таджикистан"
        }
      },
      "tgk": {
        "native": {
          "tgk": "Тоҷикистон"
        }
      }
    },
    "phone": "+992"
  },
  "tk": {
    "flag": "https://flagcdn.com/tk.svg",
    "name": {
      "native": {
        "en": "Tokelau",
        "smo": "Tokelau",
        "tkl": "Tokelau"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Tokelau"
        }
      },
      "smo": {
        "native": {
          "smo": "Tokelau"
        }
      },
      "tkl": {
        "native": {
          "tkl": "Tokelau"
        }
      }
    },
    "phone": "+690"
  },
  "tm": {
    "flag": "https://flagcdn.com/tm.svg",
    "name": {
      "native": {
        "ru": "Туркмения",
        "tuk": "Türkmenistan"
      }
    },
    "lang": {
      "ru": {
        "native": {
          "ru": "Туркмения"
        }
      },
      "tuk": {
        "native": {
          "tuk": "Türkmenistan"
        }
      }
    },
    "phone": "+993"
  },
  "tl": {
    "flag": "https://flagcdn.com/tl.svg",
    "name": {
      "native": {
        "pt": "Timor-Leste",
        "tet": "Timór-Leste"
      }
    },
    "lang": {
      "pt": {
        "native": {
          "pt": "Timor-Leste"
        }
      },
      "tet": {
        "native": {
          "tet": "Timór-Leste"
        }
      }
    },
    "phone": "+670"
  },
  "to": {
    "flag": "https://flagcdn.com/to.svg",
    "name": {
      "native": {
        "en": "Tonga",
        "ton": "Tonga"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Tonga"
        }
      },
      "ton": {
        "native": {
          "ton": "Tonga"
        }
      }
    },
    "phone": "+676"
  },
  "tt": {
    "flag": "https://flagcdn.com/tt.svg",
    "name": {
      "native": {
        "en": "Trinidad and Tobago"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Trinidad and Tobago"
        }
      }
    },
    "phone": "+1868"
  },
  "tn": {
    "flag": "https://flagcdn.com/tn.svg",
    "name": {
      "native": {
        "ar": "تونس"
      }
    },
    "lang": {
      "ar": {
        "native": {
          "ar": "تونس"
        }
      }
    },
    "phone": "+216"
  },
  "tr": {
    "flag": "https://flagcdn.com/tr.svg",
    "name": {
      "native": {
        "tr": "Türkiye"
      }
    },
    "lang": {
      "tr": {
        "native": {
          "tr": "Türkiye"
        }
      }
    },
    "phone": "+90"
  },
  "tv": {
    "flag": "https://flagcdn.com/tv.svg",
    "name": {
      "native": {
        "en": "Tuvalu",
        "tvl": "Tuvalu"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Tuvalu"
        }
      },
      "tvl": {
        "native": {
          "tvl": "Tuvalu"
        }
      }
    },
    "phone": "+688"
  },
  "tw": {
    "flag": "https://flagcdn.com/tw.svg",
    "name": {
      "native": {
        "zh": "台灣"
      }
    },
    "lang": {
      "zh": {
        "native": {
          "zh": "台灣"
        }
      }
    },
    "phone": "+886"
  },
  "tz": {
    "flag": "https://flagcdn.com/tz.svg",
    "name": {
      "native": {
        "en": "Tanzania",
        "sw": "Tanzania"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Tanzania"
        }
      },
      "sw": {
        "native": {
          "sw": "Tanzania"
        }
      }
    },
    "phone": "+255"
  },
  "ug": {
    "flag": "https://flagcdn.com/ug.svg",
    "name": {
      "native": {
        "en": "Uganda",
        "sw": "Uganda"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Uganda"
        }
      },
      "sw": {
        "native": {
          "sw": "Uganda"
        }
      }
    },
    "phone": "+256"
  },
  "ua": {
    "flag": "https://flagcdn.com/ua.svg",
    "name": {
      "native": {
        "uk": "Україна"
      }
    },
    "lang": {
      "uk": {
        "native": {
          "uk": "Україна"
        }
      }
    },
    "phone": "+380"
  },
  "um": {
    "flag": "https://flagcdn.com/um.svg",
    "name": {
      "native": {
        "en": "United States Minor Outlying Islands"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "United States Minor Outlying Islands"
        }
      }
    },
    "phone": "+268"
  },
  "uy": {
    "flag": "https://flagcdn.com/uy.svg",
    "name": {
      "native": {
        "es": "Uruguay"
      }
    },
    "lang": {
      "es": {
        "native": {
          "es": "Uruguay"
        }
      }
    },
    "phone": "+598"
  },
  "us": {
    "flag": "https://flagcdn.com/us.svg",
    "name": {
      "native": {
        "en": "United States"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "United States"
        }
      }
    },
    "phone": "+1"
  },
  "uz": {
    "flag": "https://flagcdn.com/uz.svg",
    "name": {
      "native": {
        "ru": "Узбекистан",
        "uz": "O‘zbekiston"
      }
    },
    "lang": {
      "ru": {
        "native": {
          "ru": "Узбекистан"
        }
      },
      "uz": {
        "native": {
          "uz": "O‘zbekiston"
        }
      }
    },
    "phone": "+998"
  },
  "va": {
    "flag": "https://flagcdn.com/va.svg",
    "name": {
      "native": {
        "it": "Vaticano",
        "lat": "Vaticanæ"
      }
    },
    "lang": {
      "it": {
        "native": {
          "it": "Vaticano"
        }
      },
      "lat": {
        "native": {
          "lat": "Vaticanæ"
        }
      }
    },
    "phone": "+3"
  },
  "vc": {
    "flag": "https://flagcdn.com/vc.svg",
    "name": {
      "native": {
        "en": "Saint Vincent and the Grenadines"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Saint Vincent and the Grenadines"
        }
      }
    },
    "phone": "+1784"
  },
  "ve": {
    "flag": "https://flagcdn.com/ve.svg",
    "name": {
      "native": {
        "es": "Venezuela"
      }
    },
    "lang": {
      "es": {
        "native": {
          "es": "Venezuela"
        }
      }
    },
    "phone": "+58"
  },
  "vg": {
    "flag": "https://flagcdn.com/vg.svg",
    "name": {
      "native": {
        "en": "British Virgin Islands"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "British Virgin Islands"
        }
      }
    },
    "phone": "+1284"
  },
  "vi": {
    "flag": "https://flagcdn.com/vi.svg",
    "name": {
      "native": {
        "en": "United States Virgin Islands"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "United States Virgin Islands"
        }
      }
    },
    "phone": "+1340"
  },
  "vn": {
    "flag": "https://flagcdn.com/vn.svg",
    "name": {
      "native": {
        "vi": "Việt Nam"
      }
    },
    "lang": {
      "vi": {
        "native": {
          "vi": "Tiếng Việt"
        }
      }
    },
    "phone": "+84"
  },
  "vu": {
    "flag": "https://flagcdn.com/vu.svg",
    "name": {
      "native": {
        "bis": "Vanuatu",
        "en": "Vanuatu",
        "fr": "Vanuatu"
      }
    },
    "lang": {
      "bis": {
        "native": {
          "bis": "Vanuatu"
        }
      },
      "en": {
        "native": {
          "en": "Vanuatu"
        }
      },
      "fr": {
        "native": {
          "fr": "Vanuatu"
        }
      }
    },
    "phone": "+678"
  },
  "wf": {
    "flag": "https://flagcdn.com/wf.svg",
    "name": {
      "native": {
        "fr": "Wallis et Futuna"
      }
    },
    "lang": {
      "fr": {
        "native": {
          "fr": "Wallis et Futuna"
        }
      }
    },
    "phone": "+681"
  },
  "ws": {
    "flag": "https://flagcdn.com/ws.svg",
    "name": {
      "native": {
        "en": "Samoa",
        "smo": "Sāmoa"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Samoa"
        }
      },
      "smo": {
        "native": {
          "smo": "Sāmoa"
        }
      }
    },
    "phone": "+685"
  },
  "ye": {
    "flag": "https://flagcdn.com/ye.svg",
    "name": {
      "native": {
        "ar": "اليمن"
      }
    },
    "lang": {
      "ar": {
        "native": {
          "ar": "اليمن"
        }
      }
    },
    "phone": "+967"
  },
  "za": {
    "flag": "https://flagcdn.com/za.svg",
    "name": {
      "native": {
        "af": "South Africa",
        "en": "South Africa",
        "nbl": "Sewula Afrika",
        "nso": "Afrika-Borwa",
        "sot": "Afrika Borwa",
        "ssw": "Ningizimu Afrika",
        "tsn": "Aforika Borwa",
        "tso": "Afrika Dzonga",
        "ven": "Afurika Tshipembe",
        "xho": "Mzantsi Afrika",
        "zu": "Ningizimu Afrika"
      }
    },
    "lang": {
      "af": {
        "native": {
          "af": "South Africa"
        }
      },
      "en": {
        "native": {
          "en": "South Africa"
        }
      },
      "nbl": {
        "native": {
          "nbl": "Sewula Afrika"
        }
      },
      "nso": {
        "native": {
          "nso": "Afrika-Borwa"
        }
      },
      "sot": {
        "native": {
          "sot": "Afrika Borwa"
        }
      },
      "ssw": {
        "native": {
          "ssw": "Ningizimu Afrika"
        }
      },
      "tsn": {
        "native": {
          "tsn": "Aforika Borwa"
        }
      },
      "tso": {
        "native": {
          "tso": "Afrika Dzonga"
        }
      },
      "ven": {
        "native": {
          "ven": "Afurika Tshipembe"
        }
      },
      "xho": {
        "native": {
          "xho": "Mzantsi Afrika"
        }
      },
      "zu": {
        "native": {
          "zu": "Ningizimu Afrika"
        }
      }
    },
    "phone": "+27"
  },
  "zm": {
    "flag": "https://flagcdn.com/zm.svg",
    "name": {
      "native": {
        "en": "Zambia"
      }
    },
    "lang": {
      "en": {
        "native": {
          "en": "Zambia"
        }
      }
    },
    "phone": "+260"
  },
  "zw": {
    "flag": "https://flagcdn.com/zw.svg",
    "name": {
      "native": {
        "bwg": "Zimbabwe",
        "en": "Zimbabwe",
        "kck": "Zimbabwe",
        "khi": "Zimbabwe",
        "ndc": "Zimbabwe",
        "nde": "Zimbabwe",
        "nya": "Zimbabwe",
        "sna": "Zimbabwe",
        "sot": "Zimbabwe",
        "toi": "Zimbabwe",
        "tsn": "Zimbabwe",
        "tso": "Zimbabwe",
        "ven": "Zimbabwe",
        "xho": "Zimbabwe",
        "zib": "Zimbabwe"
      }
    },
    "lang": {
      "bwg": {
        "native": {
          "bwg": "Zimbabwe"
        }
      },
      "en": {
        "native": {
          "en": "Zimbabwe"
        }
      },
      "kck": {
        "native": {
          "kck": "Zimbabwe"
        }
      },
      "khi": {
        "native": {
          "khi": "Zimbabwe"
        }
      },
      "ndc": {
        "native": {
          "ndc": "Zimbabwe"
        }
      },
      "nde": {
        "native": {
          "nde": "Zimbabwe"
        }
      },
      "nya": {
        "native": {
          "nya": "Zimbabwe"
        }
      },
      "sna": {
        "native": {
          "sna": "Zimbabwe"
        }
      },
      "sot": {
        "native": {
          "sot": "Zimbabwe"
        }
      },
      "toi": {
        "native": {
          "toi": "Zimbabwe"
        }
      },
      "tsn": {
        "native": {
          "tsn": "Zimbabwe"
        }
      },
      "tso": {
        "native": {
          "tso": "Zimbabwe"
        }
      },
      "ven": {
        "native": {
          "ven": "Zimbabwe"
        }
      },
      "xho": {
        "native": {
          "xho": "Zimbabwe"
        }
      },
      "zib": {
        "native": {
          "zib": "Zimbabwe"
        }
      }
    },
    "phone": "+263"
  }
};

export default countries;
