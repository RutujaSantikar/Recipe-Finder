import { Component , OnInit,OnChanges} from '@angular/core';
import { Router } from '@angular/router';


import { Recipe } from '../model/recipes.model';
import { RecipeService } from '../services/recipes.service';


@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit{


  recipes!: Recipe[]
  index!: number;
  searchRecipe = ""
  filteredRecipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, private router:Router) { }
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.filterRecipes();
  
    // console.log(this.recipes)
    // console.log(this.id)
  }
  // ngOnChanges() {
  //   this.filterRecipes();
  // }

  filterRecipes() {
  
    this.filteredRecipes = this.recipes.filter((recipe) => {
      return recipe.title.toLowerCase().match(this.searchRecipe.toLowerCase())
    })
  }
  openRecipeDetail(index:number) {
    this.router.navigate(['/recipe-detail', index])
    console.log(index);
  }

  

   
}
