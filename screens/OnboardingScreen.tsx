import { Animated, Image, SafeAreaView, StyleSheet, Dimensions } from 'react-native';

import PagerView from 'react-native-pager-view';

import { RootStackScreenProps } from '../types';

import FirstOnBoardingPage from '../components/OnBoarding/FirstOnBoardingPage';
import SecondOnBoardingPage from '../components/OnBoarding/SecondOnBoardingPage';
import ThirdOnBoardingPage from '../components/OnBoarding/ThirdOnBoardingPage';

import StockModel from '../constants/Stocks';
import styles from '../constants/styles';


const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

export default function OnboardingScreen({ navigation }: RootStackScreenProps<'Onboarding'>) {
  const data: StockModel[] = [
    {
      title: 'APPL',
      isSelected: false,
    },
    {
      title: 'MSFT',
      isSelected: false,
    }, {
      title: 'GOOG',
      isSelected: false,
    }, {
      title: 'GOOGL',
      isSelected: false,
    }, {
      title: 'TSLA',
      isSelected: false,
    }, {
      title: 'META',
      isSelected: false,
    }, {
      title: 'V',
      isSelected: false,
    }, {
      title: 'JPM',
      isSelected: false,
    }, {
      title: 'XOM',
      isSelected: false,
    }, {
      title: 'WMT',
      isSelected: false,
    }
  ]
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/images/onboarding-background-image.png')} style={styles.backgroundImage} />
      <PagerView
        style={styles.viewPager}
        initialPage={0}
        showPageIndicator={true}
      >
        <FirstOnBoardingPage key="1"></FirstOnBoardingPage>
        <SecondOnBoardingPage key="2" data={data}></SecondOnBoardingPage>
        <ThirdOnBoardingPage key="3"></ThirdOnBoardingPage>
      </PagerView>
    </SafeAreaView>
  );
}






