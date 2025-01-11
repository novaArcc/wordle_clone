import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule } from '@angular/material/card'
import { ResultsListComponent } from "./results-list/results-list.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    InputFieldComponent,
    ResultsListComponent,
    MatCardModule,
    ResultsListComponent,
    HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
