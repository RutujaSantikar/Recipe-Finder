import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { MyfavsComponent } from './myfavs/myfavs.component';
import { CartComponent } from './cart/cart.component';
import { InspirationorderComponent } from './inspirationorder/inspirationorder.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
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
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
