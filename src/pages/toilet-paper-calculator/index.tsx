import * as React from "react";
import { calculateToiletPaperMountly } from "../../functions/index";
import { UIInput } from "../../components/ui/input";
import styled from "styled-components";
import ToiletPaper from "../../assets/img/toilet-paper.svg";

export interface IToiletPaperCalculatorPageProps {
  id?: string;
}

const StyledFormContainer = styled.div`
  width: 58%;
  padding-top: 12%;
  margin-right: 2%;
  height: 100%;
  float: right;
  background-color: #f0f4ff;
`;
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
const StyledRangeWrapper = styled.div`
  width: 100%;
`;
const StyledInputRange = styled.input`
  -webkit-appearance: none;
  margin-top: 10px;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4caf50;
    cursor: pointer;
  }
  ::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4caf50;
    cursor: pointer;
  }
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
      <StyledFormContainer>
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
              id="shets-on-paper"
              type="number"
              value={sheetsOnPaper}
              onChange={handleSheetsOnPaperChange}
              label="Sheets on Toilet Paper"
            />
          </StyledInputWrapper>
        </StyledInputSep>
        <StyledInputWrapper>
          <StyledRangeWrapper>
            <label htmlFor="sheet-used">
              Sheets used per visit ({sheetUsed})
            </label>
            <StyledInputRange
              id="sheet-used"
              type="range"
              min="2"
              max="25"
              value={sheetUsed}
              onChange={(e: any) => handleSheetUsedChange(e.target.value)}
            />
          </StyledRangeWrapper>
        </StyledInputWrapper>

        <StyledCalculationWrapper>
          <StyledSummary>
            <StyledH>{calculatedPapers}</StyledH>
            <div>
              <StyledP>
                <strong>Toilet Paper Rolls per month</strong>
              </StyledP>
              <StyledP>
                <span>
                  Caluclated with a {sheetsOnPaper} sheets toilet paper
                </span>
              </StyledP>
            </div>
          </StyledSummary>
          <StyledSummary>
            {calculatedPapers &&
              Array(calculatedPapers)
                .fill(0)
                .map((k, i) => (
                  <StyledImg key={i} src={ToiletPaper} alt="toilet-paper" />
                ))}
          </StyledSummary>
        </StyledCalculationWrapper>
      </StyledFormContainer>
    </>
  );
}
const PureToiletPaperCalculatorPage = React.memo(ToiletPaperCalculatorPage);

export { PureToiletPaperCalculatorPage as ToiletPaperCalculatorPage };
