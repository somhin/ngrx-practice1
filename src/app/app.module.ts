import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingModule } from './shopping/shopping.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './shopping/_store/_reducers';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Actions, EffectsModule } from '@ngrx/effects';
import { ShoppingEffects } from './shopping/_store/_effects/shopping.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoppingModule,
    EffectsModule.forRoot([ShoppingEffects]),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [Actions],
  bootstrap: [AppComponent],
})
export class AppModule {}
