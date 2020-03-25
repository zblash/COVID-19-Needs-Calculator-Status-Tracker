import axios from "axios";

const API_KEY = "apikey 5PMYYkTHSwDkgcOnEXRwIr:1ZyfRAYq5pDYYTlb6jVnyU";
const API_URL = "https://api.collectapi.com/corona";
const API_TOTAL_DATA = "/totalData";
const API_COUNTRY_DATA = "/countriesData";

export const calculateToiletPaperMountly = (
  sheetUsed: number,
  toiletVisitDaily: number,
  sheetsOnPaper: number
) => {
  return Math.ceil((toiletVisitDaily * sheetUsed * 30) / sheetsOnPaper);
};

export const calculateLiquidSoapMountly = (
  toiletVisitDaily: number,
  pumpPerWash: number,
  amountSoapPerPump: number
) => {
  return Math.ceil(toiletVisitDaily * pumpPerWash * amountSoapPerPump * 30);
};

const headers = () => ({
  authorization: API_KEY,
  "Content-Type": "application/json"
});

export const getTotalCoronaData = () => {
  return axios
    .get(API_URL + API_TOTAL_DATA, {
      headers: headers()
    })
    .then(d => d.data.result);
};

export const getCoronaDataByCountry = (country: string) => {
  return axios
    .get(API_URL + API_COUNTRY_DATA, {
      headers: headers(),
      params: { country }
    })
    .then(d => d.data.result);
};
