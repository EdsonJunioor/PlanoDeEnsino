import { Component, OnInit } from '@angular/core';
import { PlanoEnsinoModel } from './../../Models/PlanoEnsinoModel';
import { PlanoEnsinoService } from './../../Services/PlanoEnsino.service';
@Component({
  selector: 'app-CadastroPlanoEnsino',
  templateUrl: './CadastroPlanoEnsino.component.html',
  styleUrls: ['./CadastroPlanoEnsino.component.css']
})
export class CadastroPlanoEnsinoComponent implements OnInit {

  constructor(private planoEnsinoService: PlanoEnsinoService) { }

  public planos: PlanoEnsinoModel[] = [];
  public plano = new PlanoEnsinoModel;
  public mostrarListaPlano: boolean = true;
  public dadosPlano = [];
  pagPlano: number = 1;
  contadorPlano: number = 5;
  paginaAtualPlano: number = 1;

  ngOnInit(){
    this.getPlanos();
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

  postPlano() {
    this.planoEnsinoService.post(this.plano).subscribe((resposta) => {
      this.plano = new PlanoEnsinoModel();
    }
    );
    alert('Plano de ensino cadastrado com sucesso!');
    this.getPlanos();
  }

  abrirDetalhesPlano(plano: PlanoEnsinoModel) {
    this.mostrarListaPlano = true;
    this.plano = plano;
  }
}
