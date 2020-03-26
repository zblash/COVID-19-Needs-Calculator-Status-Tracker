import axios from 'axios';

const API_KEY = 'apikey 5PMYYkTHSwDkgcOnEXRwIr:1ZyfRAYq5pDYYTlb6jVnyU';
const API_URL = 'https://api.collectapi.com/corona';
const API_TOTAL_DATA = '/totalData';
const API_COUNTRY_DATA = '/countriesData';

export interface TotalDataValue {
  success: boolean;
  result: {
    totalDeaths: string;
    totalCases: string;
    totalRecovered: string;
  };
}

interface CountryDataResultValue {
  country: string;
  totalCases: string;
  newCases: string;
  totalDeaths: string;
  newDeaths: string;
  totalRecovered: string;
  activeCases: string;
}

export interface CountryDataValue {
  success: boolean;
  result: CountryDataResultValue[];
}

export const calculateToiletPaperMountly = (sheetUsed: number, toiletVisitDaily: number, sheetsOnPaper: number) =>
  Math.ceil((toiletVisitDaily * sheetUsed * 30) / sheetsOnPaper);

export const calculateLiquidSoapMountly = (toiletVisitDaily: number, pumpPerWash: number, amountSoapPerPump: number) =>
  Math.ceil(toiletVisitDaily * pumpPerWash * amountSoapPerPump * 30);

const headers = () => ({
  authorization: API_KEY,
  'Content-Type': 'application/json',
});

export const getTotalCoronaData: () => Promise<TotalDataValue> = () =>
  axios
    .get(API_URL + API_TOTAL_DATA, {
      headers: headers(),
    })
    .then(d => d.data);

export const getCoronaDataByCountry: (country: string) => Promise<CountryDataValue> = (country: string) =>
  axios
    .get(API_URL + API_COUNTRY_DATA, {
      headers: headers(),
      params: { country },
    })
    .then(d => d.data);
