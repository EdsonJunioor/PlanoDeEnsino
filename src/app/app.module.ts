import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroLivroComponent } from './Cadastro/Livro/CadastroLivro.component';
import { CadastroPlanoEnsinoComponent } from './Cadastro/PlanoEnsino/CadastroPlanoEnsino.component';
import { CadastroUsuarioComponent } from './Cadastro/Usuario/CadastroUsuario.component';
import { LoginComponent } from './Login/Login.component';
import { CadastroCursoComponent } from './Cadastro/Curso/CadastroCurso.component';
import { CadastroSugestaoComponent } from './Cadastro/Sugestao/CadastroSugestao.component';
import { ConsultaCursoComponent } from './Consulta/Curso/ConsultaCurso.component';
import { ConsultaLivroComponent } from './Consulta/Livro/ConsultaLivro.component';
import { ConsultaSugestaoComponent } from './Consulta/Sugestao/ConsultaSugestao.component';
import { ConsultaPlanoEnsinoComponent } from './Consulta/PlanoEnsino/ConsultaPlanoEnsino.component';


@NgModule({
  declarations: [		    //Declarar os componentes criados aqui para que possa ser usada as diretivas e chamadas para API
    AppComponent,
      LoginComponent,
      CadastroLivroComponent,
      CadastroPlanoEnsinoComponent,
      CadastroUsuarioComponent,
      CadastroCursoComponent,
      CadastroSugestaoComponent,
      ConsultaCursoComponent,
      ConsultaLivroComponent,
      ConsultaSugestaoComponent,
      ConsultaPlanoEnsinoComponent
   ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }