import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentTestComponent } from './component-test/component-test.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProgrammingComponent } from './programming/programming.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { ArtCommissionComponent } from './art-commission/art-commission.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    ComponentTestComponent,
    AboutMeComponent,
    ProgrammingComponent,
    WebDevelopmentComponent,
    ArtCommissionComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentTestComponent,
    AboutMeComponent,
    ProgrammingComponent,
    WebDevelopmentComponent,
    ArtCommissionComponent,
    NotFoundComponent
  ]
})
export class PagesModule { }
