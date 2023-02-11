import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageerrorComponent } from './Components/pageerror/pageerror.component';
import { HomeComponent } from './Components/home/home.component';
import { MedicineHomeComponent } from './Components/medicine-home/medicine-home.component';
import { ViewProductDetailsComponent } from './Components/view-product-details/view-product-details.component';
import { ViewAllTopDealsComponent } from './Components/view-all-top-deals/view-all-top-deals.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'medicines',component:MedicineHomeComponent},
  {path:'view-product-details/:drug-code',component:ViewProductDetailsComponent},
  {path:'view-all-top-deals',component:ViewAllTopDealsComponent},
  {path:'',redirectTo:'./home',pathMatch:'full'},
  {path:'**',component:PageerrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
