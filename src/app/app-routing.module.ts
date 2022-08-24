import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/main-body/head/about-me/about-me.component';
import { BodyComponent } from './components/main-body/body/body.component';
import { HeaderComponent } from './components/main-body/head/header/header.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginComponent } from './components/login/login.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginGuardService } from './services/loginGuard.service';

const routes: Routes = [
  {path: '', component: MainBodyComponent, canActivate: [LoginGuardService]},
  {path: 'home', component: MainBodyComponent},
  {path: 'login', component: LoginPageComponent},
  {path: '**', component: NotFoundComponent}, // ver si se peuede aplicar el concepto de rutas anidadas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
