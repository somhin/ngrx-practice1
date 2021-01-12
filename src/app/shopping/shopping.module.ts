import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ShoppingEffects } from './_store/_effects/shopping.effects';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingReducer } from './_store/_reducers/shopping.reducer';

@NgModule({
  declarations: [ShoppingComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forFeature([ShoppingEffects]),
    StoreModule.forFeature('shopping', ShoppingReducer),
  ],
})
export class ShoppingModule {}
