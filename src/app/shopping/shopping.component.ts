import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './_store/_models/app-state.model';
import { ShoppingItem } from './_store/_models/shopping-item.model';
import {
  AddItemAction,
  DeleteItemAction,
} from './_store/_actions/shopping.action';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
})
export class ShoppingComponent implements OnInit {
  shoppingItems$: Observable<Array<ShoppingItem>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  newShoppingItem: ShoppingItem = { id: '', name: '' };

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select((store) => store.shopping.list);
    this.loading$ = this.store.select((store) => store.shopping.loading);
    this.error$ = this.store.select((store) => store.shopping.error);
  }

  addItem(): void {
    this.newShoppingItem.id = uuid();
    this.store.dispatch(new AddItemAction(this.newShoppingItem));
    this.newShoppingItem = { id: '', name: '' };
  }

  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }
}
