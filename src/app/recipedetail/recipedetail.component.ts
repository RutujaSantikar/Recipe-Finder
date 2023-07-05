import { Component ,OnInit} from '@angular/core';
// import { Recipe } from '../recipes.model';
// import { recipe } from '../recipes.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipes.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {

  recipe!: Recipe;
  id!: number;
//   constructor(private route:ActivatedRoute) {
//     this.recipe = recipe;
//   }
  
//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       this.id = params['id'];
//   })
// }
   constructor(private recipeService:RecipeService, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      console.log(this.id)
      this.recipe = this.recipeService.getRecipe(this.id);
      console.log(this.recipe)
    })
  }
}
