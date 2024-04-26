import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperCompanyComponent } from './layouts/developer-company/developer-company.component';

const routes: Routes = [
  {
    path:'',redirectTo:'developer-company',pathMatch:'full',
  },
  {
    path:'developer-company',component:DeveloperCompanyComponent,children:[
      {
        path:'',
        loadChildren:() => import('./layouts/developer-company/developer-company.module').then(m => m.DeveloperCompanyModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
