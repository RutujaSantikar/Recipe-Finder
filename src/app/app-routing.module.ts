import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { MyfavsComponent } from './myfavs/myfavs.component';
import { SignupComponent } from './auth/signup.component';
import { RecipelistComponent } from './recipelist/recipelist.component';
import { RecipedetailComponent } from './recipedetail/recipedetail.component';
import { AuthGuard } from './auth/auth.gaurd';
const routes: Routes = [

  {
   path :'',  redirectTo :'/recipes' , pathMatch:'full'
  }
,
  {
    path: 'recipes', component: RecipelistComponent,
    
 }
,
  {
    path: 'favorites', component: MyfavsComponent,
    canActivate:[AuthGuard]
  },
 
 
  {
    path:'signup', component:SignupComponent
  }
  , 

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
