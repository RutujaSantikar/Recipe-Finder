import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { MyfavsComponent } from './myfavs/myfavs.component';
import { CartComponent } from './cart/cart.component';
// import { InspirationorderComponent } from './inspirationorder/inspirationorder.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { RecipedetailComponent } from './recipedetail/recipedetail.component';
const routes: Routes = [
  {
   path:'', component: RecipelistComponent
 }
,
  {
    path:'favorites', component:MyfavsComponent,
  },
  // {
  //   path:'favorites/:id', component:RecipedetailComponent
  // },
  {
    path:'cart', component:CartComponent
  },
  {
    path: 'signup', component:SignupComponent
  }
  , {
    path:'login', component:LoginComponent
  },

  {
   path:'recipe-detail/:id', component:RecipedetailComponent
  }
  ,
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
