import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleGameComponent } from './simple-game.component';
import { ResourceModule } from 'src/resource/resource.module';
import { GameDatePipe } from 'src/game-date/game-date.pipe';

@NgModule({
  declarations: [
    SimpleGameComponent,
    GameDatePipe
  ],
  imports: [
    CommonModule,
    ResourceModule

  ], exports: [
    SimpleGameComponent
  ]
})
export class SimpleGameModule { }
