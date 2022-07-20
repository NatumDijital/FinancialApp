import { EvilIcons } from '@expo/vector-icons';
import I18n from 'i18n-js';
import { Button, Dimensions, StyleSheet, TouchableHighlight } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import News from '../components/News/News';
import Stories from '../components/Stories/Stories';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';

function MorningTitle() {
  return (
    <View style={styles.morningContainer}>
      <View style={styles.morningDot}></View>
      {/* <EvilIcons name='user' color={Colors.Text.blue} size={25}></EvilIcons> */}
      <Text style={styles.morningText}>{I18n.t('HOME.MORNING')}</Text>
    </View>
  );
}

function SearchButton() {
  return (
    <View style={styles.searchContainer}>
      <EvilIcons name="search" color={'white'} size={25}></EvilIcons>
      <Text style={styles.searchText}>{I18n.t('HOME.SEARCH')}</Text>
    </View>
  );
}

function TopBar() {
  return (
    <View style={styles.topbarContainer}>
      <TouchableHighlight
        underlayColor='#fff'
        style={{
          alignSelf: 'stretch'
        }}
        activeOpacity={0.6}>
        <MorningTitle></MorningTitle>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#fff"
        activeOpacity={0.6}>
        <SearchButton />
      </TouchableHighlight>
    </View>
  );
}

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <TopBar></TopBar>
      <Stories></Stories>
      <News></News>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: Colors.background,
  },
  topbarContainer: {
    marginBottom: 25,
    backgroundColor: Colors.background,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  morningDot: {
    width: 6,
    height: 6,
    marginRight: 10,
    borderRadius: 25,
    backgroundColor: Colors.Button.primary,
  },
  morningContainer: {
    top: 0,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    paddingLeft: 15,
    paddingRight: 25,
    marginRight: 25,
    alignSelf: 'stretch',
    height: 40,
    backgroundColor: Colors.Button.faded,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  morningText: {
    color: Colors.Text.blue,
    fontWeight: '700',
    fontSize: 15,
  },
  searchContainer: {
    top: 0,
    borderRadius: 15,
    width: 150,
    height: 40,
    backgroundColor: Colors.Button.primary,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchText: {
    fontSize: 15,
    fontWeight: '700',
    color: 'white',
  }
});
