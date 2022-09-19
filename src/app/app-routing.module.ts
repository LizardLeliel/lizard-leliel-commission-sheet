import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { ComponentTestComponent } from './app/pages/component-test/component-test.ts'
import { PagesModule } from './pages/pages.module';
import { ComponentTestComponent } from './pages/component-test/component-test.component';


const routes: Routes = [
  { path: 'test', component: ComponentTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
