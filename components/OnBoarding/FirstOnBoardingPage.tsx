import { View, Text } from "../Themed";
import { StyleSheet } from "react-native";

import styles from "../../constants/styles";

export default function FirstOnBoardingPage() {
    const boldText = 'Everthing you need to invest.'
    const text = 'A finance news experience that is noiseless, focused and far from the chaos of social media and classical news.'
    return (
        <View style={[styles.page, firstPageStyle.container]}>
            <View style={firstPageStyle.textArea}>
                <Text style={styles.boldText}>{boldText}</Text>
                <Text style={[styles.text, firstPageStyle.bottomText]}>{text}</Text>
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
