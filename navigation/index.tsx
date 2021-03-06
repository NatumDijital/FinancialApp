/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName, View } from 'react-native';
import { useEffect, useState } from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import HomeScreen from '../screens/HomeScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import SettingsScreen from '../screens/SettingScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import NewsScreen from '../screens/NewsScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyTheme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    background: '#081026'
  },
};

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={MyTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {

  const [isAppOpenedBefore, setIsAppOpenedBefore] = useState(false)

  useEffect(() => {
    async function appData() {
      const data = await AsyncStorage.getItem('isAppOpenedBefore');
      console.log(data);
      if (data) {
        setIsAppOpenedBefore(true);
      } else {
        setIsAppOpenedBefore(false);
        await AsyncStorage.setItem('isAppOpenedBefore', 'in');
      }
    }

    appData();
  }, [])

  return (
    <Stack.Navigator>
      {/* {!isAppOpenedBefore && ( */}
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        {/* )} */}
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name='News' component={NewsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{
      }}
      screenOptions={{
        tabBarStyle: {
          marginRight: 17,
          marginLeft: 17,
          marginBottom: 25,
          borderRadius: 100,
          height: 56,
          padding: 5,
          paddingBottom: 5,
          backgroundColor: Colors.Text.blue,
        },
        tabBarShowLabel: false,
        headerShown: false,
        headerTransparent: true,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          tabBarIcon: ({ color, focused }) =>
            <TabBarIcon name="home" color={Colors.Text.white} focused={focused} />
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="bookmark" color={Colors.Text.white} focused={focused} />,
          title: 'Tab Two',
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="settings" color={Colors.Text.white} focused={focused} />,
          title: 'Settings',
        }}
      />

    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Feather>['name'];
  color: string;
  focused: boolean,
}) {
  const focus = props.focused;
  // TODO: add bottom icon if focused on
  if (focus) {
    return (
      <View style={{ alignItems: 'center' }}>
        <Feather size={24} style={{ marginBottom: -3 }} {...props} />
        <View style={
          {
            width: 5,
            height: 5,
            borderRadius: 5,
            backgroundColor: Colors.Text.white,
            position: "absolute",
            bottom: -9.5
          }
        }></View>
      </View>
    )
  }
  return (
    <Feather size={24} style={{ marginBottom: -3 }} {...props} />
  );
};

