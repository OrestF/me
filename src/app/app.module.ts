import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TechnologiesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'technologies', component: TechnologiesComponent},
      {path: '', component: HomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
