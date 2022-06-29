import { View, Text } from "../Themed";
import { Pressable, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

import Colors from "../../constants/Colors";
import styles from "../../constants/styles";
import I18n from "i18n-js";

export default function ThirdOnBoardingPage() {
    const [selected, setSelected] = useState(false);
    return (
        <View style={[styles.page, styles.opacityBackground, thirdPageStyle.container]}>
            <View style={styles.skipContainer}>
                <Text style={styles.skipText}>{I18n.t('ONBOARDING.THIRD_ONBOARDING.SKIP')}</Text>
            </View>
            <View style={thirdPageStyle.headerContainer}>
                <Text style={[styles.boldText, thirdPageStyle.topText]} >{I18n.t('ONBOARDING.THIRD_ONBOARDING.ALMOST')}</Text>
                <Text style={[styles.text, thirdPageStyle.middleText]}>{I18n.t('ONBOARDING.THIRD_ONBOARDING.CATEGORIZE')}</Text>
                <Text style={thirdPageStyle.bottomText}>{I18n.t('ONBOARDING.THIRD_ONBOARDING.NOTIFICATION')}</Text>
            </View>
            <View style={thirdPageStyle.buttonContainer}>

                <Pressable style={({ pressed }) => pressed ? [thirdPageStyle.button, styles.pressed] : thirdPageStyle.button} onPress={() => setSelected(true)} >
                    <Text style={styles.buttonText}>{I18n.t('ONBOARDING.THIRD_ONBOARDING.YES')}</Text>
                </Pressable>
                <Pressable style={thirdPageStyle.button}>
                    <Text style={styles.buttonText}>{I18n.t('ONBOARDING.THIRD_ONBOARDING.NO')}</Text>
                </Pressable>
            </View>

            {(selected ?
                <View style={thirdPageStyle.conditionalContainer}>
                    <Text style={styles.boldText}>{I18n.t('ONBOARDING.THIRD_ONBOARDING.ALL_SET')}.</Text>
                    <TouchableOpacity style={thirdPageStyle.startButton}>
                        <Text style={[styles.buttonText, thirdPageStyle.buttonText]}>{I18n.t('ONBOARDING.THIRD_ONBOARDING.START')}</Text>
                    </TouchableOpacity>
                </View> : null)}

        </View>

    )
};

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




