import { EvilIcons } from "@expo/vector-icons";
import { Image, StyleSheet, TouchableHighlight } from "react-native";
import Colors from "../../constants/Colors";
import { Text, View } from "../Themed";


export default function NewsPage({ item }) {
    return (
        <TouchableHighlight
            key={item.key}>
            <View style={style.container}>
                <View style={style.leftContainer}>
                    <Text style={style.title}>{item.title}</Text>
                    <Text numberOfLines={2} style={style.message}>{item.message}</Text>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <Text style={style.key}>{item.share?.toUpperCase()}</Text>
                        <Text style={style.passedTime}>{item.createdTime + ' min ago'}</Text>
                    </View>
                </View>
                <View style={style.rightContainer}>
                    <Image source={{ uri: item.image }}
                        style={style.rightContainer}></Image>
                    <View style={style.bottomRightContainer}>
                        <EvilIcons name="play" style={style.EvilIcons} color={Colors.Icon.darkBlue}></EvilIcons>
                        <EvilIcons name="share-google" style={style.EvilIcons} color={Colors.Icon.darkBlue}></EvilIcons>
                        <EvilIcons name="tag" style={style.EvilIcons} color={Colors.Icon.darkBlue}></EvilIcons>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
}

const style = StyleSheet.create({
    container: {
        height: 191,
        marginTop: 20,
        marginLeft: 18,
        marginRight: 18,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 4,
        flexDirection: 'row',
        flex: 1,
    },
    leftContainer: {
        flex: 6,
        marginRight: 2
    },
    rightContainer: {
        flex: 4,
        height: 165

    },
    title: {
        flex: 3,
        color: 'black',
        fontSize: 17,
        fontWeight: '500',
        lineHeight: 24,
        backgroundColor: 'white',
    },
    message: {
        flex: 2,
        color: 'rgba(7, 45, 75, 0.6)',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 22,
        backgroundColor: 'white',
        flexWrap: 'wrap',
    },
    key: {
        color: 'rgba(47, 159, 248, 1)',
        fontSize: 12,
        fontWeight: '400',
    },
    passedTime: {
        width: 100,
        color: 'rgba(7, 45, 75, 0.4)',
        fontSize: 12,
        fontWeight: '400',
    },
    image: {

    },
    bottomRightContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    EvilIcons: {
        fontSize: 24
    }
})
