import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  ENDPOINT = 'http://starlord.hackerearth.com/recipe';
  recipe = new Recipe();

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.ENDPOINT);
  }

  getRecipeById(id: number) {
    this.getRecipes().pipe(take(1)).subscribe(recipes => {
      this.recipe = recipes.find(recipe => recipe.id == id);
    });
    return this.recipe;
  }
}
