import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DeveloperCompanyRouting } from './developer-company.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { AboutComponent } from 'src/app/pages/about/about.component';
import { PriceComponent } from 'src/app/pages/price/price.component';
import { OurPortfolioComponent } from 'src/app/pages/our-portfolio/our-portfolio.component';
import { ServicesComponent } from 'src/app/pages/services/services.component';
import { Checkout1Component } from 'src/app/pages/checkout/checkout1/checkout1.component';
import { Checkout2Component } from 'src/app/pages/checkout/checkout2/checkout2.component';
import { Checkout3Component } from 'src/app/pages/checkout/checkout3/checkout3.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    PriceComponent,
    OurPortfolioComponent,
    ServicesComponent,
    Checkout1Component,
    Checkout2Component,
    Checkout3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DeveloperCompanyRouting),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DeveloperCompanyModule { }
