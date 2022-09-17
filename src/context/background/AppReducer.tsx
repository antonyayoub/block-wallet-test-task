import Actions, { SetStateAction, SetTransactionAction, SetBalance } from '../contextActions';
import { IAppState } from './InitialState';

type AppAction = SetTransactionAction | SetStateAction | SetBalance;

const appReducer = (
  state: IAppState,
  action: AppAction
): IAppState => {
  switch (action.type) {
    case Actions.SET_STATE:
      return {
        ...state,
        ...action.payload
      }
    case Actions.SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case Actions.SET_BALANCE:
      return {
        ...state,
        balance: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
