import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutesModule } from '../app-routes.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { GameModule } from '../game/game.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutesModule,
    MatProgressBarModule,
    GameModule
  ],
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  exports: [
    AppRoutesModule,
    HeaderComponent
  ]
})
export class CoreModule { }
