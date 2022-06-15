import { Animated, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import PagerView from 'react-native-pager-view';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootStackScreenProps } from '../types';

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

export default function OnboardingScreen({ navigation }: RootStackScreenProps<'Onboarding'>) {
  return (
    <SafeAreaView style={styles.container}>
      <PagerView
        style={styles.viewPager}
        initialPage={0}
        showPageIndicator={true}
      >
        <View style={styles.page} key="1">
          <Text>First page</Text>
          <Text>Swipe ➡️</Text>
        </View>
        <View style={styles.page} key="2">
          <Text>Second page</Text>
        </View>
        <View style={styles.page} key="3">
          <Text>Third page</Text>
        </View>
      </PagerView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  viewPager: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  page: {
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
