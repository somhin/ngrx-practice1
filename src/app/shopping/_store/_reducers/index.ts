import { ActionReducerMap } from '@ngrx/store';
import { ShoppingReducer } from './shopping.reducer';

export const reducers: ActionReducerMap<any> = {
  shopping: ShoppingReducer,
};
