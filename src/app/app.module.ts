import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // para two way binding y formularios reactivos
import { AppRoutingModule } from './app-routing.module'; // para el routing
import { NgCircleProgressModule } from 'ng-circle-progress'; // para los circulos de progreso
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // para acceder a infoo

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main-body/head/header/header.component';
import { NavbarComponent } from './components/main-body/head/header/navbar/navbar.component';
import { HeaderImagesComponent } from './components/main-body/head/header/header-images/header-images.component';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AboutMeComponent } from './components/main-body/head/about-me/about-me.component';
import { ExperienceComponent } from './components/main-body/body/experience/experience.component';
import { EducationComponent } from './components/main-body/body/education/education.component';
import { HardAndSoftSkillsComponent } from './components/main-body/body/hard-and-soft-skills/hard-and-soft-skills.component';
import { ProjectsComponent } from './components/main-body/body/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BodyComponent } from './components/main-body/body/body.component';
import { LoginService } from './services/login.service';
import { ExperienceService } from './services/experience.service';
import { SocialNetworkService } from './services/socialNetwork.service';
import { HeadComponent } from './components/main-body/head/head.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { LoginProvisionalAuthenticationService } from 'src/app/services/loginProvisionalAuthentication.service';
import { InterceptorService } from './services/interceptor.service';
import { LoginGuardService } from './services/loginGuard.service';

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
    HeadComponent,
    MainBodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService, ExperienceService, SocialNetworkService, LoginProvisionalAuthenticationService, LoginGuardService,
  //{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
