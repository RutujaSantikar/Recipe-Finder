import { Injectable } from "@angular/core";
import { Recipe } from "../model/recipes.model";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFireDatabase } from '@angular/fire/compat/database' 
import { map } from 'rxjs/operators'
import { Observable } from "rxjs";
@Injectable()
export class FavoritesService{
  private favoriteRecipes: Recipe[] = []
  private storageKey = 'favoriteRecipes';
  recipe!: Recipe;
  private userId: string | null = null;
  private favoritesPath='users'
  constructor(private afDb: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user) => {
      this.userId=user?user.uid:null
    })
 }
    addToFavorites(recipe:Recipe) {
    if (this.userId) {
      const favoritesRecipesRef = this.afDb.object(`${this.favoritesPath}/${this.userId}/favorites/${recipe.id}`)
      favoritesRecipesRef.set(recipe);
    }

  }
    removeFromFavorites(recipe: Recipe) {
    if (this.userId) {
      const favoriteRecipesRef = this.afDb.object(`${this.favoritesPath}/${this.userId}/favorites/${recipe.id}`);
      favoriteRecipesRef.remove();
    }
  }
  getFavoriteRecipes(): Observable<Recipe[]> {
    if (this.userId) {
      const favoriteRecipesRef = this.afDb.list<Recipe>(`${this.favoritesPath}/${this.userId}/favorites`);
      return favoriteRecipesRef.valueChanges();
    }
    return new Observable<Recipe[]>(observer => {
      observer.next([]); // Return an empty array when the user is not authenticated
      observer.complete();
    });
  }
}
