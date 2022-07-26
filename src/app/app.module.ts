import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // para two way binding y formularios reactivos
import { AppRoutingModule } from './app-routing.module'; // para el routing
import { NgCircleProgressModule } from 'ng-circle-progress'; // para los circulos de progreso
import { HttpClientModule } from '@angular/common/http'; // para acceder a infoo

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderImagesComponent } from './components/header-images/header-images.component';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { HardAndSoftSkillsComponent } from './components/hard-and-soft-skills/hard-and-soft-skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BodyComponent } from './components/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    NavbarComponent,
    HeaderImagesComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    HardAndSoftSkillsComponent,
    ProjectsComponent,
    FooterComponent,
    NotFoundComponent,
    LoginPageComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
