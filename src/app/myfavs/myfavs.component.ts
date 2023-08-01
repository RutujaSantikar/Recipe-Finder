
import { Component,OnInit ,OnDestroy} from '@angular/core';
import { FavoritesService } from '../services/favorites.service';
import { Recipe } from '../model/recipes.model';
import { SnackbarService } from '../services/snackbar.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-myfavs',
  templateUrl: './myfavs.component.html',
  styleUrls: ['./myfavs.component.css']
})
export class MyfavsComponent implements OnInit,OnDestroy{
  recipe!:Recipe
  favoriteRecipes: Recipe[] = [];
  index!: number;
  private favoritesSubscription:Subscription | undefined
  constructor(private favService: FavoritesService,private snackbarService:SnackbarService, private router:Router) { }

  ngOnInit(): void {
    this. favoritesSubscription=this.favService.getFavoriteRecipes().subscribe((recipes:any) => {
      this.favoriteRecipes = recipes
    }, (error) => {
      console.log(error)
    })
  }
  ngOnDestroy(): void {
    if (this.favoritesSubscription) {
      this.favoritesSubscription.unsubscribe();
    }
  }
  openRecipeDetail(recipe:Recipe) {
    this.router.navigate(['/recipe-detail', recipe.id])
  
  }
  onRemove(recipe: Recipe) {
      this.favService.removeFromFavorites(recipe);
    this.snackbarService.successSnackBar('Recipe removed from favorites');
  }
}
