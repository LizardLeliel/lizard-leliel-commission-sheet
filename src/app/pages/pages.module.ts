import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentTestComponent } from './component-test/component-test.component';



@NgModule({
  declarations: [
    ComponentTestComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentTestComponent
  ]
})
export class PagesModule { }
