import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import EditScreenInfo from '../components/EditScreenInfo';
import I18n from 'i18n-js';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{I18n.t('TAB_TWO.TAB_TWO.TAB')}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
