import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { MyfavsComponent } from './myfavs/myfavs.component';
import { CartComponent } from './cart/cart.component';
import { InspirationorderComponent } from './inspirationorder/inspirationorder.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path:'', component:InspirationorderComponent
  }
  ,

  {
    path:'favorites', component:MyfavsComponent
  },
  {
    path:'cart', component:CartComponent
  },
  {
    path: 'signup', component:SignupComponent
  }
  , {
    path:'login', component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
