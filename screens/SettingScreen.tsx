import { Image, StyleSheet, Switch, Text } from 'react-native';
import { useState } from 'react';
import { View } from '../components/Themed';
import Colors from '../constants/Colors';

export default function SettingsScreen() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <View style={styles.profileNameContainer}>
                <Image source={require('../assets/images/elon.jpeg')} style={styles.profileImage}></Image>
                <Text style={styles.profileName}>Yigit Celik</Text>
                <Image source={require('../assets/images/edit-profile.png')} style={styles.editImage}></Image>
            </View>
            <View style={styles.line}></View>
            <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>Sign Up and don't lose your account data.</Text>
                <Image source={require('../assets/images/sign-in-with-Apple.png')} style={styles.signInWithAppleImage}></Image>
            </View>
            <View style={styles.line}></View>
            <View style={styles.appSettingsContainer}>
                <Text style={styles.blueTitle}>App Settings</Text>
                <View style={styles.horizontalContainer}>
                    <Text style={styles.subTitle}>Push Notifications</Text>
                    <Switch
                        thumbColor={Colors.switch.darkGrey}>
                    </Switch>
                </View>
                <View style={styles.horizontalContainer}>
                    <Text style={styles.subTitle}>Daily Brief</Text>
                    <Switch
                        trackColor={{ false: "#202020", true: "#2F9FF8" }}
                        onValueChange={toggleSwitch}
                        value={isEnabled}>
                    </Switch>
                </View>
                <View style={styles.horizontalContainer}>
                    <Text style={styles.subTitle}>Daily Brief Time</Text>
                    <Text style={styles.blueTitle}>09:00 AM</Text>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.appSettingsContainer}>
                <Text style={styles.blueTitle}>Others</Text>
                <View style={styles.horizontalContainer}>
                    <Text style={styles.subTitle}>About Us</Text>
                    <Image source={require('../assets/images/greater-than-sign.png')} style={styles.editImage}></Image>
                </View>
                <View style={styles.horizontalContainer}>
                    <Text style={styles.subTitle}>Privacy Policy</Text>
                    <Image source={require('../assets/images/greater-than-sign.png')} style={styles.editImage}></Image>
                </View>
                <View style={styles.horizontalContainer}>
                    <Text style={styles.subTitle}>Terms and Conditions</Text>
                    <Image source={require('../assets/images/greater-than-sign.png')} style={styles.editImage}></Image>
                </View>
            </View>
            <View style={styles.blueTabContainer}>
                <Image source={require('../assets/images/greater-than-sign.png')} style={styles.editImage}></Image>
            </View>
        </View>
    );
}

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
        marginLeft: 18,
        color: Colors.Text.white,
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
    }
});
