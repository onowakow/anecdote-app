import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlurbListComponent } from './blurb-list/blurb-list.component';
import { BlurbComponent } from './blurb-list/blurb/blurb.component';
import { BlurbFormComponent } from './blurb-form/blurb-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlurbListComponent,
    BlurbComponent,
    BlurbFormComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
