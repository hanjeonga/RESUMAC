import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./public/locales/en/common.json";
import koTranslation from "./public/locales/ko/common.json";

const resources = {
  en: { translation: enTranslation },
  ko: { translation: koTranslation },
} as const;

const initializeI18n = () => {
  i18next.use(initReactI18next).init({
    resources,
    lng: "ko",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
};

if (typeof window !== "undefined") {
  initializeI18n();
}

export default i18next;
