import I18n from "i18n-js";
import { StyleSheet, View, Text } from "react-native";
import Colors from '../constants/Colors';

export default function EditProfileScreen() {
    <View style= {styles.container}>
        <Text>{I18n.t('EDIT_PROFILE.USERNAME')}</Text>
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 61,
        backgroundColor: Colors.background,
    },
        
})