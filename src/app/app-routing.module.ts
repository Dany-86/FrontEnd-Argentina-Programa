import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginGuardService } from './services/loginGuard.guard';

const routes: Routes = [
  {path: '', component: MainBodyComponent, canActivate: [LoginGuardService]},
  {path: 'home', component: MainBodyComponent},
  {path: 'login', component: LoginPageComponent},
  {path: '**', component: NotFoundComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
