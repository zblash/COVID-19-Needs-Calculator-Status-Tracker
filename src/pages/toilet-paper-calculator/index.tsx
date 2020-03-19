import * as React from "react";
import { calculateToiletPaperMountly } from "../../functions/index";
export interface IToiletPaperCalculatorPageProps {
  id?: string;
}

function ToiletPaperCalculatorPage(
  props: React.PropsWithChildren<IToiletPaperCalculatorPageProps>
) {
  const [sheetUsed, setSheetUsed] = React.useState<number>(8);
  const [toiletVisit, setToiletVisit] = React.useState<number>(6);
  const [sheetsOnPaper, setSheetsOnPaper] = React.useState<number>(100);
  const [calculatedPapers, setCalculatedPapers] = React.useState<number>();

  const handleSheetUsedChange = React.useCallback((e: any) => {
    setSheetUsed(parseInt(e.target.value, 10));
  }, []);

  const handleToiletVisitChange = React.useCallback((e: any) => {
    setToiletVisit(parseInt(e.target.value, 10));
  }, []);

  const handleSheetsOnPaperChange = React.useCallback((e: any) => {
    setSheetsOnPaper(parseInt(e.target.value, 10));
  }, []);

  React.useEffect(() => {
    if (sheetsOnPaper && toiletVisit && sheetUsed) {
      setCalculatedPapers(
        calculateToiletPaperMountly(sheetUsed, toiletVisit, sheetsOnPaper)
      );
    }
  }, [sheetsOnPaper, toiletVisit, sheetUsed, setCalculatedPapers]);

  return (
    <>
      <label htmlFor="sheet-used">Sheets used per visit</label>
      <input
        type="number"
        id="sheet-used"
        value={sheetUsed}
        onChange={handleSheetUsedChange}
      />
      <label htmlFor="toilet-visit">Toilet visits per day</label>
      <input
        type="number"
        id="toilet-visit"
        value={toiletVisit}
        onChange={handleToiletVisitChange}
      />
      <label htmlFor="shets-on-paper">Sheets on Toilet Paper</label>
      <input
        type="number"
        id="sheets-on-paper"
        value={sheetsOnPaper}
        onChange={handleSheetsOnPaperChange}
      />
      <p>You need {calculatedPapers}</p>
    </>
  );
}
const PureToiletPaperCalculatorPage = React.memo(ToiletPaperCalculatorPage);

export { PureToiletPaperCalculatorPage as ToiletPaperCalculatorPage };
