import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import es from '../public/static/locales/es/common.json'
import en from '../public/static/locales/en/common.json'

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  resources: {
    es: { common: es },
    en: { common: en },
  },
  ns: ['common'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
