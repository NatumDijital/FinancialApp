import { Pressable, Image, StyleSheet, Switch, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { View } from '../components/Themed';
import { AntDesign } from "@expo/vector-icons";

import Colors from '../constants/Colors';
import I18n from "i18n-js";

function SettingsEditProfile({ onBackButton }: any) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <AntDesign name="left" onPress={onBackButton} style={styles.iconBackButton}></AntDesign>
                </TouchableOpacity>
                <Text style={styles.title}>{I18n.t('SETTINGS.EDIT_PROFILE.EDIT')}</Text>
            </View>
            <View style={styles.changePictureContainer}>
                <Image source={require('../assets/images/elon.jpeg')} style={styles.changePictureImage}></Image>
                <Text style={styles.changePictureText}>{I18n.t('SETTINGS.EDIT_PROFILE.CHANGE')}</Text>
            </View>
            <View style={styles.TextInputContainer}>
                <Text style={styles.subTitle}>{I18n.t('SETTINGS.EDIT_PROFILE.USERNAME')}</Text>
                <TextInput style={styles.textInputs}></TextInput>
                <Text style={styles.subTitle}>{I18n.t('SETTINGS.EDIT_PROFILE.EMAIL')}</Text>
                <TextInput style={styles.textInputs}></TextInput>
                <Text style={styles.subTitle}>{I18n.t('SETTINGS.EDIT_PROFILE.PHONE')}</Text>
                <TextInput style={styles.textInputs}></TextInput>
                <Text style={styles.subTitle}>{I18n.t('SETTINGS.EDIT_PROFILE.ID')}</Text>
                <TextInput style={styles.textInputs}></TextInput>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.upDateProfileButton}>
                    <Text style={styles.buttonText}>{I18n.t('SETTINGS.EDIT_PROFILE.UPDATE')}</Text>
                </Pressable>
            </View>

        </View>

    )
}

function SettingsMainPage({ onPress }: any) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{I18n.t('SETTINGS.MAIN.SETTINGS')}</Text>
            <View style={styles.profileNameContainer}>
                <Image source={require('../assets/images/elon.jpeg')} style={styles.profileImage}></Image>
                <Text style={styles.profileName}>{I18n.t('SETTINGS.MAIN.NAME')}</Text>
                <TouchableOpacity onPress={onPress}>
                    <Image source={require('../assets/images/edit-profile.png')} style={styles.editImage}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.line}></View>
            <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>{I18n.t('SETTINGS.MAIN.SIGN_UP')}</Text>
                <Image source={require('../assets/images/sign-in-with-Apple.png')} style={styles.signInWithAppleImage}></Image>
            </View>
            <View style={styles.line}></View>
            <View style={styles.appSettingsContainer}>
                <Text style={styles.blueTitle}>{I18n.t('SETTINGS.MAIN.APP')}</Text>
                <View style={styles.horizontalContainer}>
                    <Text style={styles.subTitle}>{I18n.t('SETTINGS.MAIN.PUSH')}</Text>
                    <Switch
                        thumbColor={Colors.switch.darkGrey}>
                    </Switch>
                </View>
                <View style={styles.horizontalContainer}>
                    <Text style={styles.subTitle}>{I18n.t('SETTINGS.MAIN.BRIEF')}</Text>
                    <Switch trackColor={{ false: "#202020", true: "#2F9FF8" }} />
                </View>
                <View style={styles.horizontalContainer}>
                    <Text style={styles.subTitle}>{I18n.t('SETTINGS.MAIN.BRIEF_TIME')}</Text>
                    <Text style={styles.blueTitle}>{I18n.t('SETTINGS.MAIN.TIME')}</Text>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.appSettingsContainer}>
                <Text style={styles.blueTitle}>{I18n.t('SETTINGS.MAIN.OTHERS')}</Text>
                <View style={styles.horizontalContainer}>
                    <Text style={styles.subTitle}>{I18n.t('SETTINGS.MAIN.ABOUT')}</Text>
                    <Image source={require('../assets/images/greater-than-sign.png')} style={styles.editImage}></Image>
                </View>
                <View style={styles.horizontalContainer}>
                    <Text style={styles.subTitle}>{I18n.t('SETTINGS.MAIN.POLICY')}</Text>
                    <Image source={require('../assets/images/greater-than-sign.png')} style={styles.editImage}></Image>
                </View>
                <View style={styles.horizontalContainer}>
                    <Text style={styles.subTitle}>{I18n.t('SETTINGS.MAIN.TERMS')}</Text>
                    <Image source={require('../assets/images/greater-than-sign.png')} style={styles.editImage}></Image>
                </View>
            </View>
            <View style={styles.blueTabContainer}>
                <Image source={require('../assets/images/greater-than-sign.png')} style={styles.editImage}></Image>
            </View>
        </View>
    )
}

export default function SettingsScreen() {
    const [editPageIsEnabled, setEditProfile] = useState(false);

    function showEditPage() {
        setEditProfile(true);
    }

    function onHideEditPage() {
        setEditProfile(false);
    }

    if (editPageIsEnabled) return (<SettingsEditProfile onBackButton={onHideEditPage}></SettingsEditProfile>);
    return (<SettingsMainPage onPress={showEditPage} />);
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 61,
        backgroundColor: Colors.background,
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        lineHeight: 36,
        color: Colors.Text.white,
        marginLeft: 8
    },
    profileNameContainer: {
        alignContent: 'center',
        marginLeft: 5,
        backgroundColor: Colors.background,
        paddingLeft: 20,
        paddingBottom: 24,
        marginTop: 27,
        flexDirection: 'row',
    },
    profileImage: {
        borderRadius: 120,
        width: 40,
        height: 40,
    },
    profileName: {
        fontSize: 20,
        color: Colors.Text.white,
        width: 95,
        height: 23,
        marginLeft: 9,
        marginTop: 6,
        fontWeight: '700',
        marginRight: 12
    },
    signUpContainer: {
        flexDirection: 'row',
        marginLeft: 5,
        backgroundColor: Colors.background,
        paddingLeft: 20,
    },
    signUpText: {
        color: Colors.Text.white,
        height: 44,
        width: 150,
        marginTop: 18,
        marginBottom: 14,
    },
    signInWithAppleImage: {
        borderRadius: 4,
        marginTop: 18,
        marginLeft: 6
    },
    appSettingsContainer: {
        backgroundColor: Colors.background,
        flexDirection: 'column',
        marginLeft: 30,
        marginRight: 16,
        height: 250,
        justifyContent: 'space-around',
    },
    blueTitle: {
        fontSize: 20,
        color: Colors.Text.blue,
        fontWeight: '700',
    },
    line: {
        marginLeft: 5,
        height: 0.5,
        backgroundColor: Colors.border.grey,
    },
    horizontalContainer: {
        backgroundColor: Colors.background,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    subTitle: {
        color: Colors.Text.white,
        fontWeight: '500',
        fontSize: 17,
    },
    editImage: {
        height: 28,
        width: 28
    },
    blueTabContainer: {
        backgroundColor: Colors.Text.blue,
        height: 56,
        width: 342,
        borderRadius: 16,
        alignItems: 'center'
    },
    changePictureContainer: {
        backgroundColor: Colors.background,
        marginTop: 20,
        marginLeft: 5,
        flexDirection: 'column',
        alignItems: 'center'
    },
    changePictureImage: {
        borderRadius: 120,
        width: 142,
        height: 142,
        overflow: "hidden",
        marginBottom: 8,
        borderWidth: 5,
        borderColor: Colors.Text.white
    },
    changePictureText: {
        color: Colors.Text.blue,
        fontSize: 14,
        fontWeight: '400',
    },
    TextInputContainer: {
        flexDirection: 'column',
        backgroundColor: Colors.background,
        justifyContent: 'space-around',
        marginHorizontal: 26,
        paddingTop: 15
    },
    textInputs: {
        height: 40,
        borderWidth: 1,
        borderColor: Colors.border.lightGrey,
        borderRadius: 8,
        marginBottom: 19,
        marginTop: 6,
        color: Colors.Text.white,
        fontWeight: '400',
        fontSize: 14,
        padding: 11

    },
    buttonContainer: {
        backgroundColor: Colors.background,
        alignItems: 'center',
        marginVertical: 25
    },
    buttonText: {
        color: Colors.Text.white,
        fontSize: 15,
        fontWeight: '400'
    },
    upDateProfileButton: {
        backgroundColor: Colors.updatebutton.blue,
        padding: 10,
        borderRadius: 4,
    },
    iconBackButton: {
        color: Colors.Text.white,
        fontSize: 25,
        marginLeft: 10,
    },
    header: {
        backgroundColor: Colors.background,
        flexDirection: 'row',
        alignItems: 'center',
    }
});
