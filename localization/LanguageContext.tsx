// import React, { useContext, useEffect, useState } from "react";
// import translations from "./languages";
// import * as RNLocalize from 'react-native-localize';


// const LanguageContext = React.createContext({});

// const languageObj = {
//   'tr': translations.tr,
//   'en': translations.en,
// }

// export const LanguageContextProvider: React.FC = ({ children }) => {

//   const [selectedLanguage, setSelectedLanguage] = useState('en');

//   useEffect(() => {
//     console.log(RNLocalize.getLocales)
//     const CurrentLanguage = RNLocalize.findBestAvailableLanguage(Object.keys(languageObj));
//     setSelectedLanguage(CurrentLanguage?.languageTag || 'en')
//   }, []);

//   const value = {
//     ...languageObj[selectedLanguage as 'en'|| 'tr']
//   };


//   return (
//     <LanguageContext.Provider value={value}>
//       {children}
//     </LanguageContext.Provider>
//   )

// };


// // export const useTranslation = () => useContext(LanguageContext)


import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import { I18nManager } from 'react-native';
import translations from './languages';


const locales = RNLocalize.getLocales();
I18n.locale = locales[0].languageTag;
export const isRtl = locales[0].isRTL;
I18nManager.forceRTL(isRtl);
I18n.fallbacks = true;
I18n.translations = {
  translations
};
export default I18n;