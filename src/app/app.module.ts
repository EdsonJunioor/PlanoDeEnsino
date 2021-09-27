import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivroComponent } from './Cadastro/Livro/Livro.component';
import { PlanoEnsinoComponent } from './Cadastro/PlanoEnsino/PlanoEnsino.component';
import { UsuarioComponent } from './Cadastro/Usuario/Usuario.component';
import { LoginComponent } from './Login/Login.component';
import { MenuComponent } from './Menu/Menu.component';

@NgModule({
  declarations: [		
    AppComponent,
      LoginComponent,
      MenuComponent,
      LivroComponent,
      PlanoEnsinoComponent,
      UsuarioComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
