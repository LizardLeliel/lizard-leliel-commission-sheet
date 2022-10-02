import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesModule } from './pages/pages.module';

import { AboutMeComponent }        from './pages/about-me/about-me.component';
import { ArtCommissionComponent }  from './pages/art-commission/art-commission.component';
import { NotFoundComponent }       from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '',                component: AboutMeComponent },
  { path: 'art',             component: ArtCommissionComponent },
  { path: '**',              component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
