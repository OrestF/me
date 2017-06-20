import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ProjectsComponent } from './components/projects/projects.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdTooltipModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TechnologiesComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'technologies', component: TechnologiesComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: '', component: HomeComponent}
    ]),
    MdTooltipModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
