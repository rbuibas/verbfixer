import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }) // can write own here
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutesModule { }
