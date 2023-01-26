import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlurbListComponent } from './blurb-list/blurb-list.component';
import { BlurbComponent } from './blurb-list/blurb/blurb.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, BlurbListComponent, BlurbComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
