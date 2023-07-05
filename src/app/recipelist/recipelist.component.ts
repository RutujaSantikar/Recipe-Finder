import { Component , OnInit} from '@angular/core';
// import { Recipe } from '../recipes.model';
// import { recipe } from '../recipes.model';
// import { Router } from '@angular/router';

import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipes.service';


@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit{
  // recipe!: Recipe[];
  // constructor(private router:Router) {
  //   this.recipe = recipe;
  // }
  
  // openRecipe(id:number) {
  //    this.router.navigate(['/recipeList',id])
  // }
  // ngOnInit(): void {
    
  // }

  recipes!: Recipe[]
  index!: number;
  constructor(private recipeService: RecipeService) { }
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    // console.log(this.recipes)
    // console.log(this.id)
  }
}
