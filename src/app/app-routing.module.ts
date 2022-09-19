import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { ComponentTestComponent } from './app/pages/component-test/component-test.ts'
import { PagesModule } from './pages/pages.module';

import { ComponentTestComponent }  from './pages/component-test/component-test.component';
import { AboutMeComponent }        from './pages/about-me/about-me.component';
import { ProgrammingComponent }    from './pages/programming/programming.component';
import { WebDevelopmentComponent } from './pages/web-development/web-development.component';
import { ArtCommissionComponent }  from './pages/art-commission/art-commission.component';
import { NotFoundComponent }       from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '',                component: AboutMeComponent },
  { path: 'test',            component: ComponentTestComponent },
  { path: 'programming',     component: ProgrammingComponent },
  { path: 'web-development', component: WebDevelopmentComponent },
  { path: 'art',             component: ArtCommissionComponent },
  { path: '**',              component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
