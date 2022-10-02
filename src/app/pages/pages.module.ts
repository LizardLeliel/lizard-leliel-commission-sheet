import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentTestComponent } from './component-test/component-test.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProgrammingComponent } from './programming/programming.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { ArtCommissionComponent } from './art-commission/art-commission.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { StyleCommissionInfoComponent } from '../components/style-commission-info/style-commission-info.component';
import { WideCardRowComponent } from '../components/wide-card-row/wide-card-row.component';
// './art-commission/style-commission-info/style-commission-info.component';



@NgModule({
  declarations: [
    ComponentTestComponent,
    AboutMeComponent,
    ProgrammingComponent,
    WebDevelopmentComponent,
    ArtCommissionComponent,
    NotFoundComponent,

    StyleCommissionInfoComponent,
    WideCardRowComponent
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
