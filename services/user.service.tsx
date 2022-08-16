import axios from "axios";
import * as Application from 'expo-application';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { enviroment } from "../enviroments/enviroment";
import { storageKeys } from "../constants/stogareKeys";
import { Alert } from "react-native";
import StockModel from "../models/StockModel";

const createUser = async () => {
    const device = await Application.getIosIdForVendorAsync();
    const response = await axios.post(enviroment.API + '/user/create', {
        deviceId: device
    });
    const create = response.data;
    if (create) {
        if (create.error) {
            Alert.alert('Something has gone wrong');
        }
        const { token, user } = create;
        saveToken(token);
        saveUserId(user?._id);
    } else return false;
};

const loginUser = async () => {
    const response = await axios.post(enviroment.API + '/user/login?id=' + await getUserID());
    const login = response.data;
    if (login) {
        if (login.error) {
            // TODO: do something to notify user there was a problem.
            Alert.alert('Something has gone wrongg');
        }
        const { token, user } = login;
        saveToken(token);
        saveUserId(user?._id);

    } else return false;
};

const saveUserId = async (id: string) => {
    if (id) {
        return await AsyncStorage.setItem(storageKeys.userId, id);
    }
    return null;
};

const getUserID = async () => {
    return await AsyncStorage.getItem(storageKeys.userId);
};

const getUser = async () => {
    const response = await axios.get(enviroment.API + '/user/get');
};

const saveToken = async (token: string) => {
    if (token) {
        return await AsyncStorage.setItem(storageKeys.token, token);
    }
    return null;
};

const getToken = async () => {
    return await AsyncStorage.getItem(storageKeys.token);
};

const UserService = {
    init: async () => {
        const id = await getUserID();
        if (id === null) {
            return await createUser();
        } else {
            return await loginUser();
        }
    },
    getToken: getToken,
    getUserID: getUserID,
    token: getToken,
    setSelectedStocks: async (selections: StockModel[]) => {
        const result = await axios.post(enviroment.API + '/user/setStocks', { stocks: selections }).then((result) => result.data);
    }
}

export default UserService;