import { ThisReceiver } from '@angular/compiler';
import { Component,OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { Recipe } from '../recipes.model';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-myfavs',
  templateUrl: './myfavs.component.html',
  styleUrls: ['./myfavs.component.css']
})
export class MyfavsComponent implements OnInit{
  recipe!:Recipe
  favoriteRecipes: Recipe[] = [];
  constructor(private favService: FavoritesService,private snackbarService:SnackbarService) { }
  ngOnInit(): void {
    this.favoriteRecipes = this.favService.getFavoriteRecipes();
  }

  onRemove() {
    console.log('hey i want to delete')
     const removeRecipe= this.favService.removeFromFavorites(this.recipe)

  }
}
