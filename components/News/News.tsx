import { FlatList, Platform, StyleSheet, TouchableHighlight, Image } from "react-native";
import Colors from "../../constants/Colors";
import { Text, View } from "../Themed";
import NewsPage from "./NewsPage";

export default function News() {
    const title = "News";
    const data = [
        {
            key: "All",
            filter: null,
            selected: false,
        },
        {
            key: "AAPL",
            filter: "AAPL",
            selected: false,
        },
        {
            key: "TESLA",
            filter: "AAPL",
            selected: false,
        },
        {
            key: "GOOGLE",
            filter: "AAPL",
            selected: false,
        }
    ];

    const news = [
        {
            id: 123553,
            title: "Tesla CEO Elon Musk blasts SEC amid investigation",
            message: "Instagram could be jumping on the paid subscription you need to know that",
            share: "tesla",
            createdTime: 345345,
            image: 'https://te-emlak365-com.cdn.vidyome.com/tebilisim/emlak365-com/uploads/2022/04/elon-musk-twitteri-satin-aldi-teslanin-126-milyar-dolari-buhar-oldu-1280x720.jpg',
            videoURL: null,
        },
        {
            id: 123554,
            title: "Tesla CEO Elon Musk blasts SEC amid investigation",
            message: "Instagram could be jumping on the paid subscription you need to know that",
            share: "twtr",
            createdTime: 345345,
            image: 'https://st.depositphotos.com/1000350/1663/i/950/depositphotos_16632665-stock-photo-shocked-bald-man-holding-comb.jpg',
            videoURL: null,
        },
        {
            id: 123555,
            title: "Tesla CEO Elon Musk blasts SEC amid investigation",
            message: "Instagram could be jumping on the paid subscription you need to know that",
            share: "twtr",
            createdTime: 345345,
            image: 'https://st.depositphotos.com/1000350/1663/i/950/depositphotos_16632665-stock-photo-shocked-bald-man-holding-comb.jpg',
            videoURL: null,
        },
        {
            id: 123556,
            title: "Tesla CEO Elon Musk blasts SEC amid investigation",
            message: "Instagram could be jumping on the paid subscription you need to know that",
            share: "twtr",
            createdTime: 345345,
            image: 'https://st.depositphotos.com/1000350/1663/i/950/depositphotos_16632665-stock-photo-shocked-bald-man-holding-comb.jpg',
            videoURL: null,
        },
    ];

    const onPress = (item) => {
        console.log('pressed:' + item.selected);
        item.selected != item.selected;
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                style={styles.filterList}
                horizontal={true}
                data={data}
                renderItem={({ item }) => (
                    <TouchableHighlight style={styles.filterTextContainer}
                        onPress={() => onPress(item)}
                        underlayColor={Colors.Button.primary}
                    >
                        <Text style={[styles.filterText, item.selected ? { color: 'white' } : {}]}>{item.key}</Text>
                    </TouchableHighlight>
                )}
            />
            <FlatList
                style={styles.newsContainer}
                data={news}
                renderItem={({ item }) => (
                    <NewsPage item={item}></NewsPage>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        marginTop: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: 'white',
        marginLeft: 18,
    },
    filterList: {
        marginTop: 15,
    },
    filterTextContainer: {
        height: 30,
        marginLeft: 18,
        marginRight: 0,
        borderRadius: 50,
        marginBottom: 5,
        justifyContent: 'center',
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
    },
    filterText: {
        color: 'black',
        textAlignVertical: 'center',
        paddingRight: 15,
        paddingLeft: 15,
    },
    newsContainer: {
    
    },
    imagesContainer: {
        
    }

});