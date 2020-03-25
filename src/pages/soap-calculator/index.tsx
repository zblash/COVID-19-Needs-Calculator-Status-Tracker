import * as React from 'react';
import styled from 'styled-components';

import HandSoap from '../../assets/img/hand-soap.svg';
import { calculateLiquidSoapMountly } from '~/functions';
import { Container } from '~/components/container';
import { UIInput } from '~/components/ui/input';
import { UIRange } from '~/components/ui/range';

export interface ISoapCalculatorPageProps {
  id?: string;
}
const StyledInputSep = styled.div`
  width: 50%;
  float: left;
  display: flex;
  justify-content: center;
  margin: 10px 0 10px 0;
`;
const StyledInputWrapper = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
`;
const StyledCalculationWrapper = styled.div`
  margin-top: 5%;
  width: 100%;
`;
const StyledSummary = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const StyledH = styled.h1`
  font-size: 72px;
  margin: 0;
  margin-right: 2%;
`;
const StyledP = styled.p`
  margin-bottom: 0;
`;
const StyledImg = styled.img`
  width: 32px;
  height: 32px;
  margin: 6px;
`;
function SoapCalculatorPage(props: React.PropsWithChildren<ISoapCalculatorPageProps>) {
  const [toiletVisit, setToiletVisit] = React.useState<number>(6);
  const [pumpPerWash, setPumpPerWash] = React.useState<number>(2);
  const [amountSoapPerPump, setAmountSoapPerPump] = React.useState<number>(0.07);
  const [calculatedLiquidSoap, setCalculatedLiquidSoap] = React.useState<number>();

  const handleToiletVisitChange = React.useCallback((e: string) => {
    setToiletVisit(parseInt(e, 10));
  }, []);

  const handlePumpPerWashChange = React.useCallback((e: string) => {
    setPumpPerWash(parseInt(e, 10));
  }, []);
  const handleAmountSoapPerPumpChange = React.useCallback((e: string) => {
    if (parseFloat(e) < 1.01 && parseFloat(e) > 0) {
      setAmountSoapPerPump(parseFloat(e));
    } else {
      setAmountSoapPerPump(0.07);
    }
  }, []);
  React.useEffect(() => {
    if (toiletVisit && pumpPerWash && amountSoapPerPump) {
      setCalculatedLiquidSoap(calculateLiquidSoapMountly(toiletVisit, pumpPerWash, amountSoapPerPump));
    }
  }, [toiletVisit, pumpPerWash, amountSoapPerPump, setCalculatedLiquidSoap]);

  return (
    <Container>
      <StyledInputSep>
        <StyledInputWrapper>
          <UIInput
            id="toilet-visit"
            type="number"
            value={toiletVisit}
            onChange={handleToiletVisitChange}
            label="Toilet visits per day"
          />
        </StyledInputWrapper>
      </StyledInputSep>
      <StyledInputSep>
        <StyledInputWrapper>
          <UIInput
            id="amount-soap-pump"
            type="number"
            step="0.01"
            value={amountSoapPerPump}
            onChange={handleAmountSoapPerPumpChange}
            label="Amount soap per pump(0.07 ml. average)"
          />
        </StyledInputWrapper>
      </StyledInputSep>

      <StyledInputWrapper>
        <UIRange
          label="Pump count per hand wash"
          id="pump-per-wash"
          min={2}
          max={25}
          value={pumpPerWash}
          onChange={handlePumpPerWashChange}
        />
      </StyledInputWrapper>

      <StyledCalculationWrapper>
        <StyledSummary>
          <StyledH>{calculatedLiquidSoap}</StyledH>
          <div>
            <StyledP>
              <strong>ML. of soap per month</strong>
            </StyledP>
            <StyledP>
              <span>Calculated with a {pumpPerWash} pump count per hand wash</span>
            </StyledP>
          </div>
        </StyledSummary>
        <StyledSummary>
          {calculatedLiquidSoap &&
            Array(Math.min(calculatedLiquidSoap, 75))
              .fill(0)
              .map((k, i) => <StyledImg key={i} src={HandSoap} alt="toilet-paper" />)}
        </StyledSummary>
      </StyledCalculationWrapper>
    </Container>
  );
}

const PureSoapCalculatorPage = React.memo(SoapCalculatorPage);

export { PureSoapCalculatorPage as SoapCalculatorPage };
