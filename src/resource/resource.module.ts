import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceComponent } from './resource.component';

@NgModule({
  declarations: [
    ResourceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ResourceComponent
  ]
})
export class ResourceModule { }
