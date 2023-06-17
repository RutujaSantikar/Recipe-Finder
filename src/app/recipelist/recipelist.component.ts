import { Component } from '@angular/core';
import { Recipe } from '../recipes.model';
import { recipe } from '../recipes.model';


@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent {
  recipe!: Recipe[];
  constructor() {
    this.recipe = recipe;
  }
  
  openRecipe(recipe:number) {
     
   }
}
