import { Component, OnInit } from '@angular/core';
import { PlanoEnsinoService } from 'src/app/Services/PlanoEnsino.service';
import { LivroService } from 'src/app/Services/Livro.service';
import { PlanoEnsinoModel } from 'src/app/Models/PlanoEnsinoModel';
import { LivroModel } from 'src/app/Models/LivroModel';
import { SugestaoPlanoEnsinoModel } from './../../Models/SugestaoPlanoEnsinoModel';
import { SugestaoPlanoEnsinoService } from './../../Services/SugestaoPlanoEnsino.service';
import { getTestBed } from '@angular/core/testing';

@Component({
  selector: 'app-CadastroSugestao',
  templateUrl: './CadastroSugestao.component.html',
  styleUrls: ['./CadastroSugestao.component.css']
})
export class CadastroSugestaoComponent implements OnInit {

  constructor(private planoEnsinoService: PlanoEnsinoService,
              private livroService: LivroService,
              private sugestaoPlanoEnsinoService: SugestaoPlanoEnsinoService) { }
      
      public planos: PlanoEnsinoModel[] = [];
      public plano = new PlanoEnsinoModel;
      public mostrarListaPlano: boolean = true;
      public dadosPlano = [];
      pagPlano: number = 1;
      contadorPlano: number = 5;
      paginaAtualPlano: number = 1;

      public sugestoes: SugestaoPlanoEnsinoModel[] = [];
      public sugestao = new SugestaoPlanoEnsinoModel;
      public mostrarListaSugestao: boolean = true;
      public dadosSugestao = [];
      pagSugestao: number = 1;
      contadorSugestao: number = 5;
      paginaAtualSugestao: number = 1;

      public livros: LivroModel[]=[];
      public livro = new LivroModel;
      public mostrarListaLivro: boolean = true;
      public dadosLivro = [];
      pagLivro: number = 1;
      contadorLivro: number = 5;
      paginaAtualLivro: number = 1;

ngOnInit(){
this.getPlanos();
this.getLivros();
}

getPlanos() {
this.planoEnsinoService.getAll().subscribe(
(listaPlanos: PlanoEnsinoModel[]) => {
this.planos = listaPlanos;
return this.planos;
},
(erro: any) => {
console.error('Não foi possível carregar os planos de ensinos.');
}
);
}

getSugestoes() {
  this.sugestaoPlanoEnsinoService.getAll().subscribe(
  (listaSugestoes: SugestaoPlanoEnsinoModel[]) => {
  this.sugestoes = listaSugestoes;
  return this.sugestoes;
  },
  (erro: any) => {
  console.error('Não foi possível carregar as Sugestões aos Planos de Ensino!');
  }
  );
  }

getLivros(){
this.livroService.getAll().subscribe(
(listaLivros: LivroModel[]) => {
this.livros = listaLivros;
return this.livros;
},
(erro: any) => {
console.error('Não foi possível carregar os cursos.');
}
);
}

saveSugestaoPlano() {
if (this.plano.cdDisciplina) {
this.postSugestaoPlano();
} else {
this.postSugestaoPlano();
}
}

postSugestaoPlano() {
this.planoEnsinoService.post(this.plano).subscribe((resposta) => {
this.plano = new PlanoEnsinoModel();
}
);
alert('Plano de ensino cadastrado com sucesso!');
this.getPlanos();
}

putSugestaoPlano() {
this.mostrarListaPlano = true;
if(confirm('Deseja realmente editar a Sugestão ao Plano de Ensino ?')){
alert('A Sugestão ao Plano de Ensino foi atualizada com sucesso!');
this.sugestaoPlanoEnsinoService.put(this.sugestao).subscribe((resposta) => {this.sugestao = new SugestaoPlanoEnsinoModel();});
this.getSugestoes();
}
else{
alert('A Sugestão ao Plano de Ensino NÃO foi atualizada!');
this.getSugestoes();
}
}

deleteSugestaoPlano(sugestaoPlano: SugestaoPlanoEnsinoModel) {
if(this.sugestao.cdSugestaoPlanoEnsino)
if(confirm('Deseja realmente excluir a Sugestão ao Plano de Ensino?')){
alert('A Sugestão ao Plano de Ensino foi excluída com sucesso!');
this.sugestaoPlanoEnsinoService.delete(this.sugestao).subscribe((resposta) => {});
}
else{
alert('A Sugestão ao Plano de Ensino NÃO foi excluída!');
}
else{
alert('A Sugestão ao Plano de Ensino NÃO foi encontrada!');
}
}

abrirDetalhesPlano(plano: PlanoEnsinoModel) {
this.mostrarListaPlano = true;
this.plano = plano;
}

abrirDetalhesSugestao(sugestao: SugestaoPlanoEnsinoModel) {
this.mostrarListaSugestao = true;
this.sugestao = sugestao;
}

abrirDetalhesLivro(livro: LivroModel){
this.mostrarListaLivro = true;
this.livro = livro;
}
}