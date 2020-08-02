import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipeComponent } from './recipe/recipe.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'recipes', children: [
      { path: ':id', component: RecipeComponent, pathMatch: 'full' }
    ]
  },
];

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RecipesComponent,
    RecipeComponent
  ]
})
export class RecipesModule { }
