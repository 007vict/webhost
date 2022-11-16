import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { Saga } from './saga';
import { CardPlanState } from './types';

export const initialState: CardPlanState = {
  card: [
    {
    title: 'BASIC',
    price: 29,
    countUser: 1,
    countEmail: "1000",
    contacts: "5",
    coffeeCup: 5
  },
  {
    title: 'ADVANCED',
    price: 59,
    countUser: 10,
    countEmail: "2000",
    contacts: "20",
    coffeeCup: 20
  },
  {
    title: 'BUSINESS',
    price: 139,
    countUser: 20,
    countEmail: "Unlimited",
    contacts: "Unlimited",
    coffeeCup: 100
  },
  ]
};

const slice = createSlice({
  name: 'cardplan',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {
    },
  },
});

export const { actions: Actions } = slice;
export const selectAllCard = initialState

export const useSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: Saga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
