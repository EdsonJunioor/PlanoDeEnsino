import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivroComponent } from './Cadastro/Livro/Livro.component';
import { PlanoEnsinoComponent } from './Cadastro/PlanoEnsino/PlanoEnsino.component';
import { UsuarioComponent } from './Cadastro/Usuario/Usuario.component';
import { LoginComponent } from './Login/Login.component';
import { CursoComponent } from './Cadastro/Curso/curso.component';
import { SugestaoComponent } from './Cadastro/Sugestao/sugestao.component';

@NgModule({
  declarations: [		    //Declarar os componentes criados aqui para que possa ser usada as diretivas e chamadas para API
    AppComponent,
      LoginComponent,
      LivroComponent,
      PlanoEnsinoComponent,
      UsuarioComponent,
      CursoComponent,
      SugestaoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
