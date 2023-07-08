import { Injectable } from "@angular/core";
import { Recipe } from "./recipes.model";

@Injectable()
export class FavoritesService{
  private favoriteRecipes: Recipe[] = []
  private storageKey = 'favoriteRecipes';
  recipe!: Recipe;

  constructor() {
    const storedRecipes = localStorage.getItem(this.storageKey);
    if (storedRecipes) {
      this.favoriteRecipes = JSON.parse(storedRecipes);
    }
  }

    addToFavorites(recipe:Recipe) {
      this.favoriteRecipes.push(recipe);
      this.saveFavoritesToLocalStorage();
    }
      removeFromFavorites(recipe: Recipe) {
    const index = this.favoriteRecipes.findIndex((favRecipe) => favRecipe.id === recipe.id);
    if (index !== -1) {
      this.favoriteRecipes.splice(index, 1);
    }
  }
    getFavoriteRecipes() {
        return this.favoriteRecipes;
  }
   
  private saveFavoritesToLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.favoriteRecipes))
  }
}
