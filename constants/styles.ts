import { StyleSheet } from "react-native";

import Colors from "./Colors";
import Layout from "./Layout";


export default StyleSheet.create({
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
        width: Layout.window.width, //for full screen
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

