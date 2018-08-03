import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground/playground.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlaygroundComponent],
  exports: [PlaygroundComponent]
})
export class GameModule { }
