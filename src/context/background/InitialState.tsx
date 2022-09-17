import { Transaction } from '../../services/TransactionsService';

export interface IAppState {
    balance: number;
    transactions: Array<Omit<Transaction,"id">>;
}

export const initAppState: IAppState = {
    balance: 0,
    transactions: [],
};