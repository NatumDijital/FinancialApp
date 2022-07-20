import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';
import { News } from '../models/NewsModel';
import { RootStackParamList } from '../types';
import { AntDesign, Feather, EvilIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import I18n from "i18n-js";

export default function NewsScreen() {
    const data: News = {
        createdTime: '52',
        id: 0,
        image: '',
        message: '',
        share: 'AAPL',
        title: 'Why Apple, Meta and Salesforce.com Plunged Today',
        videoUrl: '',
        detailedMessage: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam; <b>Sed nunc, quod agimus;</b> Habent enim et bene longam et satis litigiosam disputationem. Duo Reges: constructio interrete. </p>

        <p>Non igitur bene. Similiter sensus, cum accessit ad naturam, tuetur illam quidem, sed etiam se tuetur; <b>Quid turpius quam sapientis vitam ex insipientium sermone pendere?</b> Quos quidem tibi studiose et diligenter tractandos magnopere censeo. <mark>Facillimum id quidem est, inquam.</mark> <i>Contemnit enim disserendi elegantiam, confuse loquitur.</i> Stuprata per vim Lucretia a regis filio testata civis se ipsa interemit. Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam; </p>

        <p>Atqui perspicuum est hominem e corpore animoque constare, cum primae sint animi partes, secundae corporis. An me, inquam, nisi te audire vellem, censes haec dicturum fuisse? Quod quidem nobis non saepe contingit. Quis istud possit, inquit, negare? Quamquam te quidem video minime esse deterritum. <i>Omnes enim iucundum motum, quo sensus hilaretur.</i> Nec lapathi suavitatem acupenseri Galloni Laelius anteponebat, sed suavitatem ipsam neglegebat; Quid ergo attinet gloriose loqui, nisi constanter loquare? Sint modo partes vitae beatae. </p>`
    }

    // const {params} = useRoute<RouteProp<RootStackParamList, 'News'>>();
    // console.log(params.data.id);

    // fetch('https://myhtarena.com/getNews/' + params.data.id).then((response) => {
    //     data = reponse;
    // });

    return (
        <SafeAreaView style={styles.container}>

            {/* <View>
                // Headers
            </View>
            <View>
                // Premium left message
            </View>
            <View>
                // Subscribe for Premium
            </View>
            <View>
                {data.title}
            </View>
            <View>
                {data.share}
                {data.createdTime}
                // share cooment etc....
            </View>
            <View>{data.detailedMessage}</View> */}
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <Text style={styles.headerText}><AntDesign name="left"></AntDesign>{I18n.t('NEWS.PREVIOUS')}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.headerText}>{I18n.t('NEWS.NEXT')}<AntDesign name="right"></AntDesign></Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.leftMessage}>{I18n.t('NEWS.FREE')}</Text>
            </View>
            <View style={styles.subscribeContainer}>
                <Feather name='gift' size={22} color={Colors.Text.white} />
                <Text style={styles.subscribeText}>{I18n.t('NEWS.PREMIUM')}</Text>
                <Pressable style={styles.upgradeButton}>
                    <Text style={styles.subscribeText}>{I18n.t('NEWS.UPGRADE')}</Text>
                </Pressable>
            </View>
            <View>
                <Text style={styles.titleText}>{data.title}</Text>
            </View>
            <View style={styles.underTitleContainer} >
                <TouchableOpacity style={styles.filterTextContainer}>
                    <Text style={styles.filterText}>{data.share?.toUpperCase()}</Text>
                </TouchableOpacity>
                <Text style={styles.passedTime}>{data.createdTime + ' min ago'}</Text>
                <View style={styles.iconsContainer}>
                    <Feather name="play-circle" color={Colors.Text.white} size={16}></Feather>
                    <Feather name="share" color={Colors.Text.white} size={16}></Feather>
                    <Feather name="bookmark" color={Colors.Text.white} size={16}></Feather>
                </View>
            </View>
            <View style={styles.richContainer} >
                <WebView source={{ html: data.detailedMessage }} style={styles.richContainer} />
            </View>
        </SafeAreaView>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        marginRight: 12
    },
    headerContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
    headerText: {
        color: Colors.Text.blue,
        fontWeight: '600',
        fontSize: 16
    },
    leftMessage: {
        color: Colors.Text.orange,
        fontSize: 17,
        fontWeight: '400'
    },
    subscribeContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
    subscribeText: {
        color: Colors.Text.white,
        fontSize: 15,
        fontWeight: '400'
    },
    upgradeButton: {
        backgroundColor: Colors.updatebutton.blue,
        borderRadius: 4,
        paddingHorizontal: 18,
        paddingVertical: 9,
        marginLeft: 35
    },
    titleText: {
        fontWeight: '700',
        fontSize: 26,
        color: Colors.Text.white
    },
    underTitleContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 20,
        paddingRight: 25
    },
    filterTextContainer: {
        height: 20,
        width: '15%',
        borderRadius: 4,
        backgroundColor: Colors.Text.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    filterText: {
        color: Colors.Text.black,
        fontSize: 12,
        fontWeight: '400',
    },
    passedTime: {
        color: Colors.Text.white,
        fontSize: 12,
        fontWeight: '400',
    },
    iconsContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 0.5
    },
    richContainer: {
        flex: 1,
        backgroundColor: 'transparent'
    },
});
