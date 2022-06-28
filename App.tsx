import { StatusBar } from 'expo-status-bar';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import * as RNLocalize from "react-native-localize";
import { I18nManager } from 'react-native';
import i18n from 'i18n-js';
const memoize = require('memoize');

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  
  setI18nConfig();
  
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <StatusBar 
          translucent={true} 
          backgroundColor="#fff"
          style='light'
        />
        <Navigation colorScheme={colorScheme} />
      </SafeAreaProvider>
    );
  }
}

const translationGetters = {
  en: () => require("./i18n/en.json"),
  tr: () => require("./i18n/tr.json"),
};

const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);


const setI18nConfig = () => {

  // fallback if no available language fits
  const fallback = { languageTag: "en", isRTL: false };

  const { languageTag, isRTL } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);

  // set i18n-js config
  i18n.translations = {
    [languageTag]: translationGetters[languageTag](),
  };

  i18n.locale = languageTag;
};