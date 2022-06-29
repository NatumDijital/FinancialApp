import { StatusBar } from 'expo-status-bar';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from './i18n/en.json';

i18n.translations = {
  en: en,
};
i18n.locale = Localization.locale;
i18n.fallbacks = true;

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  
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
