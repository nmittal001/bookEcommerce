import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule, DialogComponent } from './shared';

import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './reducers';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { BillingInfoComponent } from './billing-info/billing-info.component';
import { environment } from '../environments/environment'; // Angular CLI environment
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from './effects/search.effects';
import { CardComponent } from './shared/card/card.component';

@NgModule({
  declarations: [AppComponent,
    SideBarComponent,
    SearchComponent,
    CartComponent,
    MyCollectionComponent,
    SearchDetailComponent,
    BillingInfoComponent,
    DialogComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([SearchEffects]),
    MaterialModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
