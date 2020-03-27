import axios from 'axios';

const API_URL = 'https://raw.githubusercontent.com/BlankerL/DXY-COVID-19-Data/master/json/DXYArea.json';

export interface CoronaTotalData {
  success: boolean;
  results: CountryCoronaData[];
}

export interface CountryCoronaData {
  locationId: string;
  continentEnglishName: string;
  provinceEnglishName: string;
  countryEnglishName: string;
  currentConfirmedCount: number;
  confirmedCount: number;
  suspectedCount: number;
  curedCount: number;
  deadCount: number;
}

export const calculateToiletPaperMountly = (sheetUsed: number, toiletVisitDaily: number, sheetsOnPaper: number) =>
  Math.ceil((toiletVisitDaily * sheetUsed * 30) / sheetsOnPaper);

export const calculateLiquidSoapMountly = (toiletVisitDaily: number, pumpPerWash: number, amountSoapPerPump: number) =>
  Math.ceil(toiletVisitDaily * pumpPerWash * amountSoapPerPump * 30);

const headers = () => ({
  'Content-Type': 'application/json',
});

export const getTotalCoronaData: () => Promise<CoronaTotalData> = () =>
  axios
    .get(API_URL, {
      headers: headers(),
    })
    .then(d => d.data);
