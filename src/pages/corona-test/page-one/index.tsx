import * as React from "react";
import { useCoronaTestContext } from "../../../context";

function PageOneComponent() {
  const { coronaTestState, setCoronaTestState } = useCoronaTestContext();

  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        value={coronaTestState.pageOne.name}
        onChange={e =>
          setCoronaTestState({
            type: "SET_NAME",
            payload: { name: e.target.value }
          })
        }
        id="name"
      />
      <label htmlFor="birth-date">Birth Date</label>
      <input
        type="number"
        value={coronaTestState.pageOne.birthDate}
        onChange={e =>
          setCoronaTestState({
            type: "SET_BIRTHDATE",
            payload: { birthDate: parseInt(e.target.value, 10) }
          })
        }
        id="birth-date"
      />
    </div>
  );
}

const PurePageOneComponent = React.memo(PageOneComponent);
export { PurePageOneComponent as PageOneComponent };
