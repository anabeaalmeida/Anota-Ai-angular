import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { HomeComponent } from './home/home.component';
import {UsuarioCadastroComponent} from './usuario-cadastro/usuario-cadastro.component'
import {AuthGuardService} from './guards/auth-guard.service'



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: UsuarioLoginComponent },
  { path: 'home', component: HomeComponent,    canActivate: [AuthGuardService]},
  { path: 'cadastro-usuario', component: UsuarioCadastroComponent},
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }