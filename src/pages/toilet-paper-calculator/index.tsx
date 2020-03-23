import * as React from "react";
import { calculateToiletPaperMountly } from "../../functions/index";
import { UIInput } from "../../components/ui/input";
export interface IToiletPaperCalculatorPageProps {
  id?: string;
}

function ToiletPaperCalculatorPage(
  props: React.PropsWithChildren<IToiletPaperCalculatorPageProps>
) {
  const [sheetUsed, setSheetUsed] = React.useState<number>(6);
  const [toiletVisit, setToiletVisit] = React.useState<number>(6);
  const [sheetsOnPaper, setSheetsOnPaper] = React.useState<number>(100);
  const [calculatedPapers, setCalculatedPapers] = React.useState<number>();

  const handleSheetUsedChange = React.useCallback((e: string) => {
    setSheetUsed(parseInt(e, 10));
  }, []);

  const handleToiletVisitChange = React.useCallback((e: string) => {
    setToiletVisit(parseInt(e, 10));
  }, []);

  const handleSheetsOnPaperChange = React.useCallback((e: string) => {
    setSheetsOnPaper(parseInt(e, 10));
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
      <UIInput
        id="sheet-used"
        type="number"
        value={sheetUsed}
        onChange={handleSheetUsedChange}
        label="Sheets used per visit"
      />
      <UIInput
        id="toilet-visit"
        type="number"
        value={toiletVisit}
        onChange={handleToiletVisitChange}
        label="Toilet visits per day"
      />
      <UIInput
        id="shets-on-paper"
        type="number"
        value={sheetsOnPaper}
        onChange={handleSheetsOnPaperChange}
        label="Sheets on Toilet Paper"
      />

      <p>You need {calculatedPapers}</p>
    </>
  );
}
const PureToiletPaperCalculatorPage = React.memo(ToiletPaperCalculatorPage);

export { PureToiletPaperCalculatorPage as ToiletPaperCalculatorPage };
