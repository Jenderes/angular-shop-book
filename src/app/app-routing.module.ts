import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './main/main.component';
import {BookComponent} from './book/book.component';
import {CustomerComponent} from './customer/customer.component';
import {StoreComponent} from './store/store.component';
import {PurchaseComponent} from './purchase/purchase.component';
import {SettingBookComponent} from './setting-book/setting-book.component';
import {SettingCustomerComponent} from './setting-customer/setting-customer.component';
import {SettingStoreComponent} from './setting-store/setting-store.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component:  MainComponent, children: [
      { path: 'book', component: BookComponent},
      { path: 'customer', component: CustomerComponent},
      { path: 'store', component: StoreComponent},
      { path: 'purchase', component: PurchaseComponent},
      { path: 'setting/book', component: SettingBookComponent},
      { path: 'setting/customer', component: SettingCustomerComponent},
      { path: 'setting/store', component: SettingStoreComponent}
    ]},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
