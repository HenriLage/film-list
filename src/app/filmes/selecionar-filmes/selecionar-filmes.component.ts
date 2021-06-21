import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from 'src/app/core/filmes.service';
import { Filmes } from 'src/app/models/filmes';

@Component({
  selector: 'app-selecionar-filmes',
  templateUrl: './selecionar-filmes.component.html',
  styleUrls: ['./selecionar-filmes.component.css']
})
export class SelecionarFilmesComponent implements OnInit {

  filtroFilme!: number;
  filme!: Filmes;

  constructor(
    private filmesService: FilmesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(routeParams => {
      this.filtroFilme = routeParams.id});

      this.selecionarFilme(this.filtroFilme);

  }

  private selecionarFilme(id: number){
    this.filmesService.selecionar(id).subscribe(filme => this.filme = filme);
     
  }
}
