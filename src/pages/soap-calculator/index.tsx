import * as React from "react";
import { calculateLiquidSoapMountly } from "../../functions";

export interface ISoapCalculatorPageProps {
  id?: string;
}

function SoapCalculatorPage(
  props: React.PropsWithChildren<ISoapCalculatorPageProps>
) {
  const [toiletVisit, setToiletVisit] = React.useState<number>(6);
  const [pumpPerWash, setPumpPerWash] = React.useState<number>(2);
  const [amountSoapPerPump, setAmountSoapPerPump] = React.useState<number>(
    0.07
  );
  const [calculatedLiquidSoap, setCalculatedLiquidSoap] = React.useState<
    number
  >();

  const handleToiletVisitChange = React.useCallback((e: any) => {
    setToiletVisit(parseInt(e.target.value, 10));
  }, []);

  const handlePumpPerWashChange = React.useCallback((e: any) => {
    setPumpPerWash(parseInt(e.target.value, 10));
  }, []);
  const handleAmountSoapPerPumpChange = React.useCallback((e: any) => {
    if (e.target.value < 1.01 && e.target.value > 0) {
      setAmountSoapPerPump(parseFloat(e.target.value));
    } else {
      setAmountSoapPerPump(0.07);
    }
  }, []);
  React.useEffect(() => {
    if (toiletVisit && pumpPerWash && amountSoapPerPump) {
      setCalculatedLiquidSoap(
        calculateLiquidSoapMountly(toiletVisit, pumpPerWash, amountSoapPerPump)
      );
    }
  }, [toiletVisit, pumpPerWash, amountSoapPerPump, setCalculatedLiquidSoap]);

  return (
    <>
      <label htmlFor="toilet-visit">Toilet visits per day</label>
      <input
        type="number"
        id="toilet-visit"
        value={toiletVisit}
        onChange={handleToiletVisitChange}
      />
      <label htmlFor="pump-per-wash">Pump count per hand wash</label>
      <input
        type="number"
        id="pump-per-wash"
        value={pumpPerWash}
        onChange={handlePumpPerWashChange}
      />
      <label htmlFor="amount-soap-pump">
        Amount soap per pump (0.007 ml. average)
      </label>
      <input
        type="number"
        max="1"
        min="0.01"
        id="amount-soap-pump"
        step="0.01"
        value={amountSoapPerPump}
        onChange={handleAmountSoapPerPumpChange}
      />
      <p>You need {calculatedLiquidSoap} ML. soap mountly</p>
    </>
  );
}

const PureSoapCalculatorPage = React.memo(SoapCalculatorPage);

export { PureSoapCalculatorPage as SoapCalculatorPage };
