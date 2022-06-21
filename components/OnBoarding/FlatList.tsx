import { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";


export default function FlatListContainer({ item }) {
    const updateData = () => {
        item.isSelected = !item.isSelected;
    }
    return (
        <Pressable style={[styles.flatListButtons, item.isSelected ? styles.pressed : []]}
            onPress={updateData} >
            <Text style={[styles.buttonText, item.isSelected ? styles.white : {}]}>{item.title}</Text>
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
        margin: 15,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: '400',
        fontSize: 20,
    },
    white: {
        color: 'white',
    }
})