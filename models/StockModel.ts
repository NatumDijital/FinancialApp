export default interface StockModel {
    _id: string;
    companyName: string;
    symbol: string;
    financialStatus: string;
    marketCategory: string;
    lotSize: number;
    securityName: string;
    isSelected?: boolean;
}