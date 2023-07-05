import { Injectable } from "@angular/core";
import { Recipe } from "./recipes.model";
import { Ingredient } from "./ingredient.model";
import { Instructions } from "./instructions.model";
@Injectable()
export class RecipeService {
 
    private recipes: Recipe[] = [
        new Recipe(
            1,
            'Capsicum Corn Pizza',
            'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/country-feast-cheese-maxx.01396975bebd766302f117884bbb9304.1.jpg',
            4.2,
            4,
            '15 min',
            '20 min',
            'pizza',
            [
                new Ingredient('2 readymade pizza base'),
                new Ingredient('1 medium onion ( finely chopped)'),
                new Ingredient('1 medium tomato (finely chopped)'),
                new Ingredient(' 2 tbs garlic ( finely chopped)'),
                new Ingredient(' 2 tbs butter'),
                new Ingredient(' 1 tsp chilli flakes'),
                new Ingredient('  1 tsp oregano seasoning'),
                new Ingredient(' 2 tbs tomato ketchup'),
                new Ingredient(' 2 tbs oil'),
                new Ingredient('1 capsicum ( cut into strips)'),
                new Ingredient(' 1/2 cup boiled sweet corn'),
                new Ingredient(' Mozarella or processed cheese')
            ],
            [
                new Instructions("In a pan heat oil and add garlic. Saute till it gives a nice aroma. Add the onions and saute till soft."),
                new Instructions("Add the tomatoes, chilli flakes, and oregano seasoning and cook till tomatoes are soft."),
                new Instructions("Cool and grind to a paste."),
                new Instructions("Add the tomato ketchup to this paste and mix well."),
                new Instructions("Take a pizza base and spread the sauce on the base."),
                new Instructions("Put the pizza toppings of corn and capsicum. Grate cheese on top."),
                new Instructions("Heat a flat bottomed pan or tava and put 1 tbs of butter. When butter melts place the prepared pizza on it and cover with a lid."),
                new Instructions("Heat on slow flame till cheese melts and base turns a little crisp.")
    
        


            ]),
          new Recipe(
            2,
            'Capsicum Corn Pizza',
            'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/country-feast-cheese-maxx.01396975bebd766302f117884bbb9304.1.jpg',
            4.2,
            4,
            '15 min',
            '20 min',
            'pizza',
            [
                new Ingredient('2 readymade pizza base'),
                new Ingredient('1 medium onion ( finely chopped)'),
                new Ingredient('1 medium tomato (finely chopped)'),
                new Ingredient(' 2 tbs garlic ( finely chopped)'),
                new Ingredient(' 2 tbs butter'),
                new Ingredient(' 1 tsp chilli flakes'),
                new Ingredient('  1 tsp oregano seasoning'),
                new Ingredient(' 2 tbs tomato ketchup'),
                new Ingredient(' 2 tbs oil'),
                new Ingredient('1 capsicum ( cut into strips)'),
                new Ingredient(' 1/2 cup boiled sweet corn'),
                new Ingredient(' Mozarella or processed cheese')
            ],
            [
                new Instructions("In a pan heat oil and add garlic. Saute till it gives a nice aroma. Add the onions and saute till soft."),
                new Instructions("Add the tomatoes, chilli flakes, and oregano seasoning and cook till tomatoes are soft."),
                new Instructions("Cool and grind to a paste."),
                new Instructions("Add the tomato ketchup to this paste and mix well."),
                new Instructions("Take a pizza base and spread the sauce on the base."),
                new Instructions("Put the pizza toppings of corn and capsicum. Grate cheese on top."),
                new Instructions("Heat a flat bottomed pan or tava and put 1 tbs of butter. When butter melts place the prepared pizza on it and cover with a lid."),
                new Instructions("Heat on slow flame till cheese melts and base turns a little crisp.")
    
        


            ])
        
    ]

    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index:number) {
        return this.recipes[index];
    }
}