import { Ingredient } from "./ingredient.model";
import { Instructions } from "./instructions.model";

export class Recipe{
  public id !:number;
  public title!: string;
  public img!: string;
  public ratings!: number;
  public servings!:number;
  public cooking_time!: string;
  public prepration_time!: string;
  public cuisine!: string;
  public ingredients!: Ingredient[];
  public instructions!: Instructions[]

   constructor(id:number, title:string, img:string,ratings:number,
    servings:number, cooking_time:string, prepration_time:string, cuisine:string,
   ingredients: Ingredient[], instructions: Instructions[]
    ){
     this.id=id;
     this.title=title;
     this.img=img;
     this.ratings=ratings;
     this.servings=servings;
     this.cooking_time=cooking_time;
     this.prepration_time = prepration_time;
     this.cuisine = cuisine;
     this.ingredients = ingredients;
     this.instructions= instructions
     
    }
     
 }









