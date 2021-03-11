import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { URLS } from '../constants/constants';
import { CartComponent } from './cart/cart.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { SearchComponent } from './search/search.component';
import { BillingInfoComponent } from './billing-info/billing-info.component';


export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: URLS.SEARCH_DETAILS,
    component: SearchDetailComponent
  },
  {
    path: URLS.SEARCH,
    component: SearchComponent
  },
  {
    path: URLS.CART,
    component: CartComponent
  },
  {
    path: URLS.MY_COLLECTION,
    component: MyCollectionComponent
  },
  {
    path: URLS.BILLING_INFO,
    component: BillingInfoComponent
  },
  {
    path: URLS.BILLING_INFO_DETAILS,
    component: BillingInfoComponent
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }