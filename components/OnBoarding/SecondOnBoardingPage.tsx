import { View, Text } from "../Themed";
import { FlatList, TextInput, StyleSheet } from "react-native";
import { useState, useCallback } from "react";
import { Feather } from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import styles from "../../constants/styles";
import StockModel from "../../models/StockModel";
import FlatListContainer from "./FlatList";
import I18n from "i18n-js";
import { useEffect } from "react";

export default function SecondOnBoardingPage({ data }: { data: StockModel[] }) {

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    let [filteredData, setFilteredData] = useState<StockModel[]>(data);

    const onTextChanged = (key: string) => {
        if (key.length === 0) {
            setFilteredData(data);
        } else {
            setFilteredData([]);
            setFilteredData(data.filter((val) => val?.symbol.toLowerCase().includes(key.toLowerCase())));
        }
    }

    return (
        <View style={[styles.page, styles.opacityBackground, secondPageStyle.container]}>
            <View style={styles.skipContainer}>
                <Text style={styles.skipText}>{I18n.t('ONBOARDING.SECOND_ONBOARDING.SKIP')}</Text>
            </View>
            <View style={secondPageStyle.headerContainer} >
                <Text style={styles.boldText}>{I18n.t('ONBOARDING.SECOND_ONBOARDING.WHICH')}</Text>
                <Text style={[styles.text, secondPageStyle.headerBottomText]}>{I18n.t('ONBOARDING.SECOND_ONBOARDING.SELECT')}</Text>
            </View>
            
            <View style={secondPageStyle.flatListContainer}>
                <FlatList
                    initialNumToRender={10}
                    maxToRenderPerBatch={50}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    numColumns={2}
                    data={filteredData}
                    renderItem={({ item }) => (
                        <FlatListContainer item={item} ></FlatListContainer>
                    )}
                />
            </View>
            <View style={secondPageStyle.bottomContainer}>
                <Text style={[styles.text, secondPageStyle.bottomText]}>{I18n.t('ONBOARDING.SECOND_ONBOARDING.FIND')}</Text>
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



