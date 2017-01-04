import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DirectoryComponent } from './directory/directory.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { FilterPipe } from './filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
