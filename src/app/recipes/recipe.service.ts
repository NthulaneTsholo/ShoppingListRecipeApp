import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListServce } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Recipe 1',
    'Testing this thing',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg',
    [new Ingredient('sdsssdsd', 2323), new Ingredient('dsasaas', 3322111)]),
    new Recipe('Recipe 2',
    'Testing this thing',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg',
    [new Ingredient('sdsssdsd', 2323), new Ingredient('dsasaas', 3322111)]),
    new Recipe('Recipe 3',
    'Testing this thing',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Recipe_logo.jpeg/600px-Recipe_logo.jpeg',
    [new Ingredient('sdsssdsd', 2323), new Ingredient('dsasaas', 3322111)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor(private shoppingListService: ShoppingListServce) {}


  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
