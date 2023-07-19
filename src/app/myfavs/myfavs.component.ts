
import { Component,OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { Recipe } from '../recipes.model';
import { SnackbarService } from '../snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myfavs',
  templateUrl: './myfavs.component.html',
  styleUrls: ['./myfavs.component.css']
})
export class MyfavsComponent implements OnInit{
  recipe!:Recipe
  favoriteRecipes: Recipe[] = [];
  index!: number;
  constructor(private favService: FavoritesService,private snackbarService:SnackbarService, private router:Router) { }
  ngOnInit(): void {
    this.favoriteRecipes = this.favService.getFavoriteRecipes();
  }

  openRecipeDetail(recipe:Recipe) {
    this.router.navigate(['/recipe-detail', recipe.id])
  
  }
  // onRemove() {
  //   console.log('hey i want to delete')
  //   const removeRecipe = this.favService.removeFromFavorites(this.recipe)
  //   console.log(removeRecipe)

  // }
    onRemove(recipe: Recipe) {
      this.favService.removeFromFavorites(recipe);
    // this.favoriteRecipes.splice(index, 1);
    this.snackbarService.successSnackBar('Recipe removed from favorites');
  }
}
