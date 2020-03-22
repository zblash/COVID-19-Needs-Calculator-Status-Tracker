import { ICoronaTestContextValues, CoronaTestActionsType } from ".";

export const reducer = (
  state: ICoronaTestContextValues,
  action: CoronaTestActionsType
) => {
  switch (action.type) {
    case "INCREMENT_CRR_PAGE":
      return { ...state, currentPage: state.currentPage + 1 };
    case "SET_NAME":
      return {
        ...state,
        pageOne: { ...state.pageOne, name: action.payload.name }
      };
    case "SET_BIRTHDATE":
      return {
        ...state,
        pageOne: { ...state.pageOne, birthDate: action.payload.birthDate }
      };
    case "SET_HEALTH":
      return {
        ...state,
        pageTwo: {
          ...state.pageTwo,
          healthEmployee: action.payload.healthEmployee
        }
      };
    case "SET_SICKPEOPLE":
      return {
        ...state,
        pageTwo: {
          ...state.pageTwo,
          contactSickPeople: action.payload.contactSickPeople
        }
      };
    case "SET_ANYDISEASE":
      return {
        ...state,
        pageTwo: {
          ...state.pageTwo,
          haveAnyDisease: action.payload.haveAnyDisease
        }
      };
    case "SET_TRAVEL":
      return {
        ...state,
        pageThree: {
          ...state.pageThree,
          travelCountry: action.payload.travelCountry
        }
      };
    case "SET_MEDICALCENTER":
      return {
        ...state,
        pageThree: {
          ...state.pageThree,
          lastFourteenMedicalCenter: action.payload.lastFourteenMedicalCenter
        }
      };
    case "SET_SICKNESS":
      return {
        ...state,
        pageThree: {
          ...state.pageThree,
          lastFourteenSickness: action.payload.lastFourteenSickness
        }
      };
    default:
      return state;
  }
};
