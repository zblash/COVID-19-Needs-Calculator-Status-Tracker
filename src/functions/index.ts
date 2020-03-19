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
