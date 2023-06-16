import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {ProductRatingComponent} from "./components/product-rating/product-rating.component";
import {ProductTechComponent} from "./components/product-tech/product-tech.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [{
    path: '',
    component: HomeComponent
},{
    path: 'product/:id',
    component: ProductDetailsComponent,
    children : [{
        path: 'avis',
        outlet: 'auxproduct',
        component: ProductRatingComponent,
        canActivate: [AuthGuard]
    },{
        path: 'tech',
        outlet: 'auxproduct',
        component: ProductTechComponent,
        canActivate: [AuthGuard]
    }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
