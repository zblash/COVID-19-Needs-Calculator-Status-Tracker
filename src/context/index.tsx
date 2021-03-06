import * as React from 'react';
import { reducer } from './reducer';

export interface CoronaTestContextValues {
  currentPage: number;
  pageCount: number;
  pageOne: {
    name: string;
    birthDate: number;
  };
  pageTwo: {
    healthEmployee: boolean;
    contactSickPeople: boolean;
    haveAnyDisease: string[];
  };
  pageThree: {
    travelCountry: string[];
    lastFourteenMedicalCenter: boolean;
    lastFourteenSickness: boolean;
  };
}

export type CoronaTestActionsType =
  | {
      type: 'INCREMENT_CRR_PAGE';
    }
  | {
      type: 'SET_NAME';
      payload: { name: string };
    }
  | {
      type: 'SET_BIRTHDATE';
      payload: { birthDate: number };
    }
  | {
      type: 'SET_HEALTH';
      payload: { healthEmployee: boolean };
    }
  | {
      type: 'SET_SICKPEOPLE';
      payload: { contactSickPeople: boolean };
    }
  | {
      type: 'SET_ANYDISEASE';
      payload: { haveAnyDisease: string[] };
    }
  | {
      type: 'SET_TRAVEL';
      payload: { travelCountry: string[] };
    }
  | {
      type: 'SET_MEDICALCENTER';
      payload: { lastFourteenMedicalCenter: boolean };
    }
  | {
      type: 'SET_SICKNESS';
      payload: { lastFourteenSickness: boolean };
    };

const initialCoronaTestContextState: CoronaTestContextValues = {
  currentPage: 0,
  pageCount: 3,
  pageOne: {
    name: '',
    birthDate: 1990,
  },
  pageTwo: {
    healthEmployee: false,
    contactSickPeople: false,
    haveAnyDisease: [],
  },
  pageThree: {
    travelCountry: [],
    lastFourteenMedicalCenter: false,
    lastFourteenSickness: false,
  },
};

const initialCoronaTestContext: {
  coronaTestState: CoronaTestContextValues;
  setCoronaTestState: React.Dispatch<CoronaTestActionsType>;
} = {
  coronaTestState: initialCoronaTestContextState,
  setCoronaTestState: () => null,
};

export const CoronaTestContext = React.createContext(initialCoronaTestContext);

export const useCoronaTestContext = () => React.useContext(CoronaTestContext);

interface CoronaTestContextProviderProps {
  children: any;
}

export const CoronaTestContextProvider = ({ children }: CoronaTestContextProviderProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialCoronaTestContextState);
  const coronaTestState = state;
  const setCoronaTestState = dispatch;

  return (
    <CoronaTestContext.Provider value={{ coronaTestState, setCoronaTestState }}>{children}</CoronaTestContext.Provider>
  );
};
