import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroComponent } from './Cadastro/Livro/Livro.component';
import { PlanoEnsinoComponent } from './Cadastro/PlanoEnsino/PlanoEnsino.component';
import { UsuarioComponent } from './Cadastro/Usuario/Usuario.component';
import { LoginComponent } from './Login/Login.component';
import { MenuComponent } from './Menu/Menu.component';

const routes: Routes = [     //Sempre que criado um novo componente, dever ser declarado aqui, para manuzeio de rotas e modules.
  { path: 'login', component: LoginComponent},
  { path: 'planoEnsino', component: PlanoEnsinoComponent},
  { path: 'livro', component: LivroComponent},
  { path: 'usuario', component: UsuarioComponent},
  { path: 'menu', component: MenuComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
