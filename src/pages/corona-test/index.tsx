import * as React from 'react';
import { PageOneComponent } from './page-one';
import { useCoronaTestContext } from '~/context';

function CoronaTestPage() {
  const { coronaTestState, setCoronaTestState } = useCoronaTestContext();

  const handleNextOnClick = React.useCallback(() => {
    setCoronaTestState({ type: 'INCREMENT_CRR_PAGE' });
  }, [setCoronaTestState]);

  return (
    <div>
      {coronaTestState.pageOne.birthDate}
      {coronaTestState.currentPage === 0 && <PageOneComponent />}
      <button type="button" onClick={handleNextOnClick}>
        Next
      </button>
    </div>
  );
}

const PureCoronaTestPage = React.memo(CoronaTestPage);

export { PureCoronaTestPage as CoronaTestPage };
