import { Image, StyleSheet, TouchableHighlight } from "react-native";
import Colors from "../../constants/Colors";
import { Text, View } from "../Themed";

export default function Story({ item, index, separators }) {
    return (
        <TouchableHighlight
            key={item.key}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            <View style={style.container}>
                <View style={style.circle}>
                    <Image style={style.logo} source={{uri: item.photo}}></Image>    
                </View>
                <Text numberOfLines={1} style={style.title}>{item.title}</Text>
            </View>
        </TouchableHighlight>
    );
}

const style = StyleSheet.create({
    container: {
        width: 82,
        height: 100,
        backgroundColor: Colors.background,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    circle: {
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'rgba(47, 159, 248, 1)',
        backgroundColor: Colors.background,
    },
    outBar: {

    },
    title: {
        width: 70,
        marginTop: 10,
        fontSize: 10,
        fontWeight: '400',
        color: 'white',
        textAlign: 'center',
    }
})
