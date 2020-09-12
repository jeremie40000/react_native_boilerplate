import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// @ts-ignore
import translationEN from '../../public/assets/translations/en'; // Translation file for English translations
// @ts-ignore
import translationFR from '../../public/assets/translations/fr'; // Translation file for French translations

// Translations
const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
