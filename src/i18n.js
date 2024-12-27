import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // لتحميل ملفات JSON
  .use(initReactI18next) // دمج i18n مع React
  .init({
    lng: 'en', // اللغة الافتراضية
    fallbackLng: 'en', // اللغة الاحتياطية
    debug: true,
    interpolation: {
      escapeValue: false, // لإلغاء الهروب في النصوص
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json' // مسار ملفات الترجمة
    }
  });

export default i18n;
