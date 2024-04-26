import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeveloperCompanyComponent } from './layouts/developer-company/developer-company.component';
import { RouterModule } from '@angular/router';
import { DeveloperCompanyModule } from './layouts/developer-company/developer-company.module';
import { ComponentsModule } from './components/components.module';
import { ContactComponent } from './pages/contact/contact.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { Checkout1Component } from './pages/checkout/checkout1/checkout1.component';
import { Checkout2Component } from './pages/checkout/checkout2/checkout2.component';
import { Checkout3Component } from './pages/checkout/checkout3/checkout3.component';


@NgModule({
  declarations: [
    AppComponent,
    DeveloperCompanyComponent,
    ContactComponent,

    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    NgxPayPalModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
