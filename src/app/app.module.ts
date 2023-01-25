import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AnecdoteListComponent } from './anecdote-list/anecdote-list.component';
import { AnecdoteComponent } from './anecdote-list/anecdote/anecdote.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnecdoteListComponent,
    AnecdoteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
