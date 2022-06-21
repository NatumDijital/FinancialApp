import { View, Text } from "../Themed";
import { FlatList, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import styles from "../../constants/styles";
import StockModel from "../../constants/Stocks";
import FlatListContainer from "./FlatList";

export default function SecondOnBoardingPage({ data }: { data: StockModel[] }) {
    const skip = 'Skip'
    const boldText = 'Which stocks are you interested in?'
    const text = 'Select all that apply. If you cant find your stock please search at below.'
    const findText = 'Can\'t find\?'

    let [filteredData, setFilteredData] = useState(data);



    const onTextChanged = (key: string) => {
        if (key.length === 0) {
            setFilteredData(data);
        } else {
            setFilteredData([]);
            setFilteredData(data.filter((val) => val?.title.toLowerCase().includes(key.toLowerCase())));
        }
    }
    return (
        <View style={[styles.page, styles.opacityBackground, secondPageStyle.container]}>
            <View style={styles.skipContainer}>
                <Text style={styles.skipText}>{skip}</Text>
            </View>
            <View style={secondPageStyle.headerContainer} >
                <Text style={styles.boldText}>{boldText}</Text>
                <Text style={[styles.text, secondPageStyle.headerBottomText]}>{text}</Text>
            </View>
            <View style={secondPageStyle.flatListContainer}>
                <FlatList
                    initialNumToRender={10}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    numColumns={2}
                    data={filteredData}
                    renderItem={({ item }) => (
                        <FlatListContainer item={item}></FlatListContainer>
                    )}
                />
            </View>
            <View style={secondPageStyle.bottomContainer}>
                <Text style={[styles.text, secondPageStyle.bottomText]}>{findText}</Text>
                <View style={secondPageStyle.textInputArea}>
                    <TextInput placeholder='Search stocks' placeholderTextColor='#949494' style={secondPageStyle.textInput} onChangeText={onTextChanged} />
                    <Feather name="search" size={24} color="white" />
                </View>
            </View>
        </View>
    )
};

const secondPageStyle = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    headerContainer: {
        backgroundColor: 'transparent',
        marginLeft: 30,
        marginTop: 12,
        marginRight: 24
    },
    headerBottomText: {
        marginTop: 20
    },
    flatListContainer: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        paddingHorizontal: 66,
        marginVertical: 10,
        width: '100%',
        height: '55%',
    },
    bottomContainer: {
        backgroundColor: 'transparent',
        marginHorizontal: 30,
        justifyContent: 'space-evenly',
        marginTop: 15,
    },
    textInputArea: {
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 163, 255, 0.3)',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        backgroundColor: 'transparent',
        color: Colors.Text.white,
        fontWeight: '400',
        width: '80%',
        height: 40,
    },
    bottomText: {
        textAlign: 'center',
        margin: 10
    }
});



