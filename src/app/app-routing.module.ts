import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarFilmesComponent } from './filmes/listar-filmes/listar-filmes.component';
import { SelecionarFilmesComponent } from './filmes/selecionar-filmes/selecionar-filmes.component';

const routes: Routes =  [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    children: [
      {
        path: '',
        component: ListarFilmesComponent
      },
      {
        path: ':nome',
        component: ListarFilmesComponent
      },
      {
      path: '**',
      component: ListarFilmesComponent
      }

    ]
  },

  {
    path: 'filme',
    children: [
      {
        path: '',
        component: SelecionarFilmesComponent
      },
      {
        path: ':id',
        component: SelecionarFilmesComponent
      }
    ]
  },

  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
