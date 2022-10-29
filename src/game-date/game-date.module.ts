import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDatePipe } from './game-date.pipe';



@NgModule({
  declarations: [
    GameDatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GameDatePipe
  ]
})
export class GameDateModule { }
