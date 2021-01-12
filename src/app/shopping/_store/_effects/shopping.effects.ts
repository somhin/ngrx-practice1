import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ShoppingService } from 'src/app/shopping/_store/_service/shopping.service';
import {
  AddItemAction,
  AddItemFailureAction,
  AddItemSuccessAction,
  DeleteItemAction,
  DeleteItemSuccessAction,
  DeleteItemFailureAction,
  LoadShoppingAction,
  LoadShoppingFailureAction,
  LoadShoppingSuccessAction,
  ShoppingActionTypes,
} from '../_actions/shopping.action';

@Injectable()
export class ShoppingEffects {
    
  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService
  ) {}

  @Effect() loadShopping$ = this.actions$.pipe(
    ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
    mergeMap(() =>
      this.shoppingService.getShoppingItems().pipe(
        map(
          (data) => new LoadShoppingSuccessAction(data),
          catchError((error) => of(new LoadShoppingFailureAction(error)))
        )
      )
    )
  );

  @Effect() addShopping$ = this.actions$.pipe(
    ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
    mergeMap((data) =>
      this.shoppingService.addShoppingItem(data.payload).pipe(
        map(() => new AddItemSuccessAction(data.payload)),
        catchError((error) => of(new AddItemFailureAction(error)))
      )
    )
  );

  @Effect() deleteShoppingItem$ = this.actions$.pipe(
    ofType<DeleteItemAction>(ShoppingActionTypes.DELETE_ITEM),
    mergeMap((data) =>
      this.shoppingService.deleteShoppingItem(data.payload).pipe(
        map(() => new DeleteItemSuccessAction(data.payload)),
        catchError((error) => of(new DeleteItemFailureAction(error)))
      )
    )
  );
}
