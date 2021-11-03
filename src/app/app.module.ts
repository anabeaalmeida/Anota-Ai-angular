import { LembreteListaComponent } from './lembrete/lembrete-lista/lembrete-lista.component';
import { LembreteInserirComponent } from './lembrete/lembrete-inserir/lembrete-inserir.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';


import { AppComponent } from './app.component';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {AuthGuardService} from './guards/auth-guard.service'



import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { LembreteEditarComponent } from './lembrete/lembrete-editar/lembrete-editar.component';
import {ApiInterceptor} from './intercept/ApiInterceptor'

@NgModule({
  declarations: [
    AppComponent,
    UsuarioCadastroComponent,
    LembreteInserirComponent,
    LembreteListaComponent,
    CabecalhoComponent,
    UsuarioLoginComponent,
    HomeComponent,
    PageNotFoundComponentComponent,
    LembreteEditarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule

  ],
  providers: [MatDatepickerModule, AuthGuardService,{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]


})
export class AppModule { }
