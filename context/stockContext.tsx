import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { enviroment } from "../enviroments/enviroment";
import StockModel from "../models/StockModel";
import LoadingScreen from "../screens/LoadingScreen";
import StockService, { stocks } from "../services/stocks.service";
import UserService from "../services/user.service";
import { objectToLink } from "../services/utils/utils";

// as the actual value you want to access

export const StockContext = createContext({
  getData: [] as StockModel[],
  setSelected: (_id: string) => { },
  getSelectedData: () => [] as StockModel[],
  updateUserStocks: async () => { },
});

export const StockProvider = ({ children }: any) => {

  const [data, setData] = useState<StockModel[]>();

  const getStockData = async () => {
    try {
      const d = await StockService.getStockList();
      setData(d);
    } catch (error) {
      console.error(error);
    }
  };

  const setSelected = (_id: string) => {
    data?.map((d) => {
      if (d._id === _id) d.isSelected = !d.isSelected;
    });
  };

  const getSelectedData = (): StockModel[] => {
    return data?.filter((d) => d.isSelected) as StockModel[];
  }

  const updateUserStocks = async () => {
    try {
      const selectedStocks = getSelectedData().filter((d) => d._id).map(({ _id }) => { return _id });
      const queryParams = {
        token: await UserService.getToken()
      };
      const response = await axios.post(enviroment.API + '/user/setStocks' + objectToLink(queryParams), {
        stocks: selectedStocks
      });
      const result = response.data;
      console.log('message',response.status);
      if (result) {
        if (result.error) {
          Alert.alert('Can not reach Main Page');
          return useNavigation().navigate('Onboarding');
        };
        return result;
      }
    } catch (error) {
      Alert.alert('Can not reach Main Page');
      return useNavigation().navigate('Onboarding');
    };
  };

  useEffect(() => {
    getStockData();
  }, []);

  const value = {
    getData: data as StockModel[],
    setSelected: setSelected,
    getSelectedData: getSelectedData,
    updateUserStocks: updateUserStocks,
  };

  return <StockContext.Provider value={value}>{children}</StockContext.Provider>
}