import { Routes } from "@angular/router";
import { AboutComponent } from "src/app/pages/about/about.component";
import { Checkout1Component } from "src/app/pages/checkout/checkout1/checkout1.component";
import { Checkout2Component } from "src/app/pages/checkout/checkout2/checkout2.component";
import { Checkout3Component } from "src/app/pages/checkout/checkout3/checkout3.component";
import { ContactComponent } from "src/app/pages/contact/contact.component";
import { HomeComponent } from "src/app/pages/home/home.component";
import { OurPortfolioComponent } from "src/app/pages/our-portfolio/our-portfolio.component";
import { PriceComponent } from "src/app/pages/price/price.component";
import { ServicesComponent } from "src/app/pages/services/services.component";

export const DeveloperCompanyRouting:Routes =[

    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',component:HomeComponent
    },
    {
        path:'about',component:AboutComponent
    },
    {
        path:'price',component:PriceComponent
    },
    {
        path:'our-portfolio',component:OurPortfolioComponent
    },
    {
        path:'services',component:ServicesComponent
    },
    {
        path:'contact',component:ContactComponent
    },
    {
        path:'checkout1',component:Checkout1Component
    },
    {
        path:'checkout2',component:Checkout2Component
    },
    {
        path:'checkout3',component:Checkout3Component
    },
    
]