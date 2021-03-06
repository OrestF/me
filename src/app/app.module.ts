import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routes/routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TechnologiesComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//Deploy on github pages
//sudo ngh --repo=https://06e4e741d0b56050f01a4b2f4f83fd58af5725eb@github.com/OrestF/OrestF.github.io.git --no-silent --branch=master
