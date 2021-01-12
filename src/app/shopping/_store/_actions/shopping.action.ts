import { Action } from '@ngrx/store';
import { ShoppingItem } from '../_models/shopping-item.model';

export enum ShoppingActionTypes {
  LOAD_SHOPPING = '[SHOPPING] Load Shopping',
  LOAD_SHOPPING_SUCCESS = '[SHOPPING] Successfully load shopping',
  LOAD_SHOPPING_FAILED = '[SHOPPING] Load Shopping failed',
  ADD_ITEM = '[SHOPPING] Add Item',
  ADD_ITEM_SUCCESS = '[SHOPPING] Successfully add shopping',
  ADD_ITEM_FAILED = '[SHOPPING] Add Shopping failed',
  DELETE_ITEM = '[SHOPPING] Delete Item',
  DELETE_ITEM_SUCCESS = '[SHOPPING] Successfully Delete shopping',
  DELETE_ITEM_FAILED = '[SHOPPING] Delete Shopping failed',
  // ADD_ITEM = '[SHOPPING] Add Item',
  // DELETE_ITEM = '[SHOPPING] Delete Item',
}

export class LoadShoppingAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING;
}

export class LoadShoppingSuccessAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_SUCCESS;

  constructor(public payload: Array<ShoppingItem>) {}
}

export class LoadShoppingFailureAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_FAILED;

  constructor(public payload: Error) {}
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;

  constructor(public payload: ShoppingItem) {}
}

export class AddItemSuccessAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_SUCCESS;

  constructor(public payload: ShoppingItem) {}
}

export class AddItemFailureAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_FAILED;

  constructor(public payload: Error) {}
}

export class DeleteItemAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM;

  constructor(public payload: string) {}
}

export class DeleteItemSuccessAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM_SUCCESS;

  constructor(public payload: string) {}
}

export class DeleteItemFailureAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM_FAILED;

  constructor(public payload: Error) {}
}

export type ShoppingAction =
  | LoadShoppingAction
  | LoadShoppingSuccessAction
  | LoadShoppingFailureAction
  | AddItemAction
  | AddItemSuccessAction
  | AddItemFailureAction
  | DeleteItemAction
  | DeleteItemSuccessAction
  | DeleteItemFailureAction;

// export class AddItemAction implements Action {
//   readonly type = ShoppingActionTypes.ADD_ITEM;

//   constructor(public payload: ShoppingItem) {}
// }

// export class DeleteItemAction implements Action {
//   readonly type = ShoppingActionTypes.DELETE_ITEM;

//   constructor(public payload: string) {}
// }
