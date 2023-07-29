
import { Component,OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { Recipe } from '../model/recipes.model';
import { SnackbarService } from '../services/snackbar.service';
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

    onRemove(recipe: Recipe) {
      this.favService.removeFromFavorites(recipe);
    this.snackbarService.successSnackBar('Recipe removed from favorites');
  }
}
