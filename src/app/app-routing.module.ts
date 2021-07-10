import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AddressComponent } from './address/address.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ViewCartComponent } from './view-cart/view-cart.component';

const routes: Routes = [

  {path:'',component:ProductListComponent},
  {path:'view-cart',component:ViewCartComponent},
  {path:'order-summary',component:OrderSummaryComponent},
  {path:'details',component:ProductDetailsComponent},
  {path:'address',component:AddressComponent},
  {path:'account',component:AccountsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
