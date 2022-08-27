import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // iNTERCEPTOR PARA MANDAR EL JWT EN HEADER - SOLUCIONAR PROBLEMAS

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main-body/head/header/header.component';
import { NavbarComponent } from './components/main-body/head/header/navbar/navbar.component';
import { HeaderImagesComponent } from './components/main-body/head/header/header-images/header-images.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AboutMeComponent } from './components/main-body/head/about-me/about-me.component';
import { ExperienceComponent } from './components/main-body/body/experience/experience.component';
import { EducationComponent } from './components/main-body/body/education/education.component';
import { HardAndSoftSkillsComponent } from './components/main-body/body/hard-and-soft-skills/hard-and-soft-skills.component';
import { ProjectsComponent } from './components/main-body/body/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BodyComponent } from './components/main-body/body/body.component';
import { ExperienceService } from './services/experience.service';
import { SocialNetworkService } from './services/socialNetwork.service';
import { HeadComponent } from './components/main-body/head/head.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
 import { InterceptorService } from './services/interceptor.service'; // iNTERCEPTOR PARA MANDAR EL JWT EN HEADER - SOLUCIONAR PROBLEMAS
import { LoginGuardService } from './services/loginGuard.guard';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
  providers: [ExperienceService, SocialNetworkService, AuthenticationService, LoginGuardService,
   { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true } // iNTERCEPTOR PARA MANDAR EL JWT EN HEADER - SOLUCIONAR PROBLEMAS
],
  bootstrap: [AppComponent]
})
export class AppModule { }
