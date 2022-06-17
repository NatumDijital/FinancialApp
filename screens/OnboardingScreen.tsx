import { Animated, Image, SafeAreaView, StyleSheet, Dimensions, FlatList, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import PagerView from 'react-native-pager-view';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootStackScreenProps } from '../types';
import FlatListPart from '../components/OnBoarding/FlatList'


const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

function FirstOnBoardingPage() {
  return (
    <View style={[styles.page, firstPageStyle.container]}>
      <View style={firstPageStyle.textArea}>
        <Text style={styles.boldText}>Everthing you need to invest.</Text>
        <Text style={[styles.text, firstPageStyle.bottomText]}>A finance news experience that is noiseless, focused and far from the chaos of social media and classical news.</Text>
      </View>
    </View>
  )
};

function SecondOnBoardingPage({ data }: any) {
  return (
    <View style={[styles.page, styles.opacityBackground, secondPageStyle.container]}>
      <View style={styles.skipContainer}>
        <Text style={styles.skipText}>Skip</Text>
      </View>
      <View style={secondPageStyle.headerContainer} >
        <Text style={styles.boldText}>Which stocks are you interested in?</Text>
        <Text style={[styles.text, secondPageStyle.headerBottomText]}>Select all that apply. If you cant find your stock please search at below.</Text>
      </View>
      <View style={secondPageStyle.flatListContainer}>
        <FlatList
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          numColumns={2}
          data={data}
          renderItem={({ item }) => (
            <FlatListPart item={item}></FlatListPart>
          )}
        />
      </View>
      <View style={secondPageStyle.bottomContainer}>
        <Text style={[styles.text, secondPageStyle.bottomText]}>Can't find?</Text>
        <TextInput placeholder='Search stocks' placeholderTextColor='white' style={secondPageStyle.textInput} />
      </View>
    </View>
  )
};

function ThirdOnBoardingPage() {
  const [selected, setSelected] = useState(false);
  return (
    <View style={[styles.page, styles.opacityBackground, thirdPageStyle.container]}>
      <View style={styles.skipContainer}>
        <Text style={styles.skipText}>Skip</Text>
      </View>
      <View style={thirdPageStyle.headerContainer}>
        <Text style={[styles.boldText, thirdPageStyle.topText]} >You're almost done.</Text>
        <Text style={[styles.text, thirdPageStyle.middleText]}>We categorize all the major events, your interest areas and your stocks carefully to let you know the ones that interest you most.</Text>
        <Text style={thirdPageStyle.bottomText}>Do you want to turn on notifications?</Text>
      </View>
      <View style={thirdPageStyle.buttonContainer}>

        <Pressable style={({ pressed }) => pressed ? [thirdPageStyle.button, styles.pressed] : thirdPageStyle.button} onPress={() => setSelected(true)} >
          <Text style={styles.buttonText}>Yes</Text>
        </Pressable>
        <Pressable style={thirdPageStyle.button}>
          <Text style={styles.buttonText}>No</Text>
        </Pressable>
      </View>

      {(selected ?
        <View style={thirdPageStyle.conditionalContainer}>
          <Text style={styles.boldText}>You are all set.</Text>
          <TouchableOpacity style={thirdPageStyle.startButton}>
            <TextInput style={[styles.buttonText, thirdPageStyle.buttonText]}>START NOW!</TextInput>
          </TouchableOpacity>
        </View> : null)}

    </View>

  )
};

export default function OnboardingScreen({ navigation }: RootStackScreenProps<'Onboarding'>) {
  const data = [
    {
      title: 'APPL',
      isSelected: false,
    },
    {
      title: 'APPL',
      isSelected: false,
    }, {
      title: 'APPL',
      isSelected: false,
    }, {
      title: 'APPL',
      isSelected: false,
    }, {
      title: 'APPL',
      isSelected: false,
    }, {
      title: 'APPL',
      isSelected: false,
    }, {
      title: 'APPL',
      isSelected: false,
    }, {
      title: 'APPL',
      isSelected: false,
    }, {
      title: 'APPL',
      isSelected: false,
    }, {
      title: 'APPL',
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  viewPager: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  page: {
    backgroundColor: 'transparent',
  },
  opacityBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backgroundImage: {
    position: 'absolute',
    backgroundColor: Colors.background,
    width: Dimensions.get("window").width, //for full screen
  },
  boldText: {
    fontWeight: '700',
    fontSize: 34,
    color: Colors.Text.white,
  },
  text: {
    fontWeight: '400',
    fontSize: 16,
    color: Colors.Text.white,
  },
  skipContainer: {
    backgroundColor: 'transparent',
    paddingRight: 15,
  },
  skipText: {
    fontWeight: '600',
    fontSize: 18,
    color: Colors.Text.white,
    textAlign: 'right'
  },
  pressed: {
    backgroundColor: Colors.Button.blue,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 20
  },
});

const firstPageStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingTop: 440
  },
  textArea: {
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 40,
  },
  bottomText: {
    marginTop: 30,
  }
});

const secondPageStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  headerContainer: {
    backgroundColor: 'transparent',
    marginLeft: 27,
    marginTop: 12,
    marginRight: 15
  },
  headerBottomText: {
    marginTop: 20
  },
  flatListContainer: {
    backgroundColor: 'transparent',
    alignContent: 'center',
    paddingHorizontal: 66,
    marginVertical: 12
  },
  bottomContainer: {
    backgroundColor: 'transparent',
    marginHorizontal: 30,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 16
  },
  textInput: {
    backgroundColor: Colors.Button.blue,
    color: Colors.Text.white,
    fontWeight: '400',
    borderRadius: 16,
    width: '82%',
    height: 40,
    paddingHorizontal: 16,
    alignContent: 'center',
  },
  bottomText: {
    textAlign: 'center',
    margin: 10
  }
});

const thirdPageStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
    justifyContent: 'flex-end'
  },
  headerContainer: {
    backgroundColor: 'transparent',
    marginLeft: 35,
    alignContent: 'space-between',
    marginRight: 38,
    paddingRight: 8
  },
  topText: {
    marginVertical: 20,
  },
  middleText: {
    marginVertical: 20,
  },
  bottomText: {
    fontWeight: '600',
    fontSize: 18,
    color: Colors.Text.white,
    marginVertical: 35
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    borderRadius: 20,
    height: 46,
    width: '30%',
    borderWidth: 0.2,
    backgroundColor: Colors.Text.white,
    padding: 12,
  },
  conditionalContainer: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginTop: 45
  },
  startButton: {
    height: 43,
    width: '80%',
    backgroundColor: Colors.Button.blue,
    margin: 40
  },
  buttonText: {
    color: Colors.Text.white,
    paddingTop: 10
  }
});