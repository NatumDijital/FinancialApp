import { Animated, Image, SafeAreaView, StyleSheet, Dimensions } from 'react-native';

import PagerView from 'react-native-pager-view';

import { RootStackScreenProps } from '../types';

import FirstOnBoardingPage from '../components/OnBoarding/FirstOnBoardingPage';
import SecondOnBoardingPage from '../components/OnBoarding/SecondOnBoardingPage';
import ThirdOnBoardingPage from '../components/OnBoarding/ThirdOnBoardingPage';

import StockModel from '../models/StockModel';
import styles from '../constants/styles';
import StockService from '../services/stocks.service';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { StockContext } from '../context/stockContext';


const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

export default function OnboardingScreen({ navigation }: RootStackScreenProps<'Onboarding'>) {
  
  const data = useContext(StockContext);
  
  // const [data, setData] = useState<StockModel[]>([]);

  // useEffect(() => { 
  //   async function getStockData() {
  //     const d = await StockService.getStockList();
  //     setData(d);
  //   };
  //   getStockData();
  // }, [])

  
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/images/onboarding-background-image.png')} style={styles.backgroundImage} />
      <PagerView
        style={styles.viewPager}
        initialPage={0}
        showPageIndicator={true}
      >
        <FirstOnBoardingPage key="1"></FirstOnBoardingPage>
        
        <SecondOnBoardingPage key="2" data={data.getData}></SecondOnBoardingPage>

        <ThirdOnBoardingPage key="3"></ThirdOnBoardingPage>
      </PagerView>
    </SafeAreaView>
  );
}






