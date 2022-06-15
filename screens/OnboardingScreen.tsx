import { Animated, ImageBackground, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, Pressable } from 'react-native';
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
        <View style={styles.page} key="1" >
          <ImageBackground source={require('../assets/images/onboarding-background-image.png')} style={styles.backgroundImage}>
            <View style={styles.firstPageContainer}>
              <Text style={styles.boldText}>Everthing you need to invest.</Text>
              <Text style={styles.text}>A finance news experience that is noiseless, focused and far from the chaos of social media and classical news.</Text>
            </View>
          </ImageBackground>
        </View>


        <View style={styles.page} key="2">
          <ImageBackground source={require('../assets/images/onboarding-background-image.png')} style={styles.backgroundImage}>
            <Text style={styles.skipText}>Skip</Text>
            <View style={styles.secondPageContainer}>
              <Text style={styles.boldText}>Which stocks are you interested in?</Text>
              <Text style={styles.text}>Select all that apply. If you cant find your stock please search at below.</Text>
            </View>
            <View style={styles.secondPageContainer}>
              <TouchableOpacity style={styles.buttons}>
                <Text >AAPL</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>


        <View style={styles.page} key="3">
          <ImageBackground source={require('../assets/images/onboarding-background-image.png')} style={styles.backgroundImage}>
            <Text>Third page</Text>
          </ImageBackground>
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'center',
    backgroundColor: Colors.background,
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height //for full screen
  },
  boldText: {
    fontWeight: '700',
    fontSize: 34,
    color: Colors.Text.white,
  },
  text: {
    fontWeight: '400',
    fontSize: 16,
    color: Colors.Text.white
  },
  firstPageContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 400,
    marginHorizontal: 43,
    alignItems: 'flex-end',
    flex: 1,
    marginBottom: 170,
    alignContent: 'stretch'
  },
  skipText: {
    fontWeight: '600',
    fontSize: 18,
    color: Colors.Text.white,
    textAlign: 'right',
    margin: 12
  },
  secondPageContainer: {
    backgroundColor: 'transparent',
    alignContent: 'center',
    margin: 27.5,
    flex: 1
  },
  buttons: {
    borderRadius: 20,
    height: 45,
    width: 99,
    backgroundColor: Colors.Text.white,
    textAlign: 'center',
    padding: 12
  }
});
