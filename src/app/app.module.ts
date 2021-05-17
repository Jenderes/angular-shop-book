import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BookComponent } from './book/book.component';
import { StoreComponent } from './store/store.component';
import { CustomerComponent } from './customer/customer.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SettingBookComponent } from './setting-book/setting-book.component';
import { SettingCustomerComponent } from './setting-customer/setting-customer.component';
import { SettingStoreComponent } from './setting-store/setting-store.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BookComponent,
    StoreComponent,
    CustomerComponent,
    PurchaseComponent,
    SettingBookComponent,
    SettingCustomerComponent,
    SettingStoreComponent,
    NotFoundComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
