import { FlatList, Platform, StyleSheet, TouchableHighlight } from "react-native";
import Colors from "../../constants/Colors";
import Story from "./Story";
import { Text, View } from "../Themed";

export default function Stories() {
    const title = "Top stories today";
    const data = [
        { 
            title: 'Elon Musk denemiş ama olmamış',
            photo: 'https://media.gettyimages.com/photos/tesla-ceo-elon-musk-talks-during-a-tour-of-the-plant-of-the-future-picture-id1234732042?s=2048x2048'
        },
        { 
            title: 'Elon Musk',
            photo: 'https://media.gettyimages.com/photos/tesla-ceo-elon-musk-talks-during-a-tour-of-the-plant-of-the-future-picture-id1234732042?s=2048x2048'
        },
        { 
            title: 'Elon Musk',
            photo: 'https://media.gettyimages.com/photos/tesla-ceo-elon-musk-talks-during-a-tour-of-the-plant-of-the-future-picture-id1234732042?s=2048x2048'
        },
        { 
            title: 'Elon Musk',
            photo: 'https://media.gettyimages.com/photos/tesla-ceo-elon-musk-talks-during-a-tour-of-the-plant-of-the-future-picture-id1234732042?s=2048x2048'
        },
        { 
            title: 'Elon Musk',
            photo: 'https://media.gettyimages.com/photos/tesla-ceo-elon-musk-talks-during-a-tour-of-the-plant-of-the-future-picture-id1234732042?s=2048x2048'
        },
        { 
            title: 'Elon Musk',
            photo: 'https://media.gettyimages.com/photos/tesla-ceo-elon-musk-talks-during-a-tour-of-the-plant-of-the-future-picture-id1234732042?s=2048x2048'
        },
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                style={styles.list}
                horizontal={true}
                data={data}
                renderItem={({ item, index, separators }) => (
                    <Story item={item} index={index} separators={separators}></Story>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: 'white',
        marginLeft: 18,
    },
    list: {
        marginTop: 15,
    },
});