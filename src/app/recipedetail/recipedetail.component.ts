import { Component ,OnInit} from '@angular/core';
import { Recipe } from '../recipes.model';
import { recipe } from '../recipes.model';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
ngOnInit(): void {
  
}
  recipe!: Recipe[];
  constructor() {
    this.recipe = recipe;
  }
}
