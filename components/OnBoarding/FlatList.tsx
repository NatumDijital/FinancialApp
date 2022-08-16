import { useContext, useEffect, useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { StockContext } from "../../context/stockContext";
import StockModel from "../../models/StockModel";


export default function FlatListContainer({ item }: {item: StockModel}) {

    const [i, setSelectedItem] = useState<boolean>(!!item?.isSelected);

    const stocks = useContext(StockContext);

    
    const setSelected = () => {
        setSelectedItem(!i);
            stocks.setSelected(item._id);
    }
  

    return (
        <Pressable style={[styles.flatListButtons, i ? styles.pressed : null]}
            onPress={setSelected} >
            <Text style={[styles.buttonText, i ? styles.white : null]}>{item.symbol}</Text>
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