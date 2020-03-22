import * as React from "react";
import { useCoronaTestContext } from "../../context";
import { PageOneComponent } from "./page-one";

export interface ICoronaTestPageProps {}

function CoronaTestPage(props: React.PropsWithChildren<ICoronaTestPageProps>) {
  const { coronaTestState, setCoronaTestState } = useCoronaTestContext();

  const handleNextOnClick = React.useCallback(() => {
    setCoronaTestState({ type: "INCREMENT_CRR_PAGE" });
  }, []);

  return (
    <div>
      {coronaTestState.pageOne.birthDate}
      {coronaTestState.currentPage === 0 && <PageOneComponent />}
      <button onClick={handleNextOnClick}>Next</button>
    </div>
  );
}

const PureCoronaTestPage = React.memo(CoronaTestPage);
export { PureCoronaTestPage as CoronaTestPage };
