import { View, Text } from "../Themed";
import { StyleSheet } from "react-native";

import styles from "../../constants/styles";
import I18n from "i18n-js";


export default function FirstOnBoardingPage() {
    return (
        <View style={[styles.page, firstPageStyle.container]}>
            <View style={firstPageStyle.textArea}>
                <Text style={styles.boldText}>{I18n.t('ONBOARDING.FIRST_ONBOARDING.TITLE')}</Text>
                <Text style={[styles.text, firstPageStyle.bottomText]}>{I18n.t('ONBOARDING.FIRST_ONBOARDING.MESSAGE')}</Text>
            </View>
        </View>
    )
};

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
        marginRight: 57,
        marginBottom: 38,
    },
    bottomText: {
        marginTop: 30,
    }
});
