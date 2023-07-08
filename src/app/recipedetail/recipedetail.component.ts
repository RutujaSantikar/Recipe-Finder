import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipes.service';
import { Recipe } from '../recipes.model';
import { FavoritesService } from '../favorites.service';
import { SnackbarService } from '../snackbar.service';
@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {

  recipe!: Recipe;
  id!: number;

   constructor(private recipeService:RecipeService, private route:ActivatedRoute,private favService:FavoritesService,private snackbarService:SnackbarService){}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      // console.log(this.id)
      this.recipe = this.recipeService.getRecipe(this.id);
      // console.log(this.recipe)
    })
  }

  onAddToFav() {
    // console.log('hello my fav babes')
    const recipe = this.favService.addToFavorites(this.recipe);
    if (this.recipe) {
      this.snackbarService.successSnackBar('Added to Favorite')
    }
    console.log(this.recipe);

  }
}
