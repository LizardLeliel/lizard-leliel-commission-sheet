import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { NgbConfig } from '@ng-bootstrap/ng-bootstrap'; 

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module'

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { QuickCurrencyConvertComponent } from './components/quick-currency-convert/quick-currency-convert.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    NgbModule,

    HttpClientModule,
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngbConfig: NgbConfig) {
    ngbConfig.animation = false;
  }
}
