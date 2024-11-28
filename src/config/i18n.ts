import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // English translations
    }
  },
  fr: {
    translation: {
      // French translations
    }
  },
  ar: {
    translation: {
      // Arabic translations
    }
  },
  it: {
    translation: {
      // Italian translations
    }
  },
  de: {
    translation: {
      // German translations
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;