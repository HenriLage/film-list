import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';

import { SelecionarFilmesComponent } from './selecionar-filmes/selecionar-filmes.component';
import { ListarFilmesComponent } from './listar-filmes/listar-filmes.component';
import { FiltroPorNome } from './listar-filmes/filtro-por-nome.pipe';
import { FiltroPorGenero } from './listar-filmes/filtro-por-genero.pipe';



@NgModule({
  declarations: [
    SelecionarFilmesComponent,
    ListarFilmesComponent,
    FiltroPorNome,
    FiltroPorGenero
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class FilmesModule { }
