import axios from "axios";
import * as Application from 'expo-application';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { enviroment } from "../enviroments/enviroment";
import { storageKeys } from "../constants/stogareKeys";
import { Alert } from "react-native";
import UserService from "./user.service";
import StockModel from "../models/StockModel";

export let stocks: StockModel[] = [];

const StockService = {
    getStockList: async () => {
        try {
            if (stocks?.length > 0) {
                return stocks;
            }
            const response = await axios.get(enviroment.API + '/stock/getStocks?token=' + await UserService.getToken());
            const result =  response.data;
            if (result) {
                if (result.error) {
                    Alert.alert('error occured')
                }
                stocks = result.result as StockModel[];
                return stocks;
            }
            return [];
        } catch (error) {
            console.log(error);
            return [];
        }
    },
    getFilteredStocks: async (filter: string) => {
        if (stocks.length <= 0) return [];
        return stocks.filter((val) => val?.symbol.toLowerCase().includes(filter.toLowerCase()));
    },
    setStockSelected: async (key: string) => {
        stocks.map((s) => {
            if (s._id === key) s.isSelected = true;
        });
    },
    getStock: (key: string) => {
        return stocks.find((s) => s._id === key);
    },
};

export default StockService;