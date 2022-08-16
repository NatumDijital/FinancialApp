import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { RootStackScreenProps } from '../types';

import Colors from '../constants/Colors';
import * as Progress from 'react-native-progress';


export default function LoadingScreen({ navigation }: RootStackScreenProps<'Loading'>) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.space}>
        <Text style={styles.text}>Loading...</Text>
      </View>
      <View style={styles.space}>
        <Progress.Bar progress={0.3} width={200} indeterminate={true} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center'
  },
  space: {
    padding: 12
  },
  text: {
    color: Colors.Text.white,
    fontWeight: 'bold',
    fontSize: 16
  }
})







