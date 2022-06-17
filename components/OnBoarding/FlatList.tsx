import { Pressable, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default function FlatListPart({ item }) {
    return (
        <Pressable style={({ }) => item.isSelected ? [styles.flatListButtons, styles.pressed] : styles.flatListButtons}
            onPress={() => item.isSelected = !item.isSelected} >
            <Text style={styles.buttonText}>{item.title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressed: {
        backgroundColor: Colors.Button.blue,
    },
    flatListButtons: {
        borderRadius: 20,
        height: 45,
        width: '39%',
        borderWidth: 0.2,
        backgroundColor: Colors.Text.white,
        padding: 10,
        margin: 10,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '400',
        fontSize: 20
    },
})