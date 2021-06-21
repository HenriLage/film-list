import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmesService } from 'src/app/core/filmes.service';
import { Filmes } from 'src/app/models/filmes';

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.component.html',
  styleUrls: ['./listar-filmes.component.css']
})
export class ListarFilmesComponent implements OnInit {

  filmes: Filmes[] = [];
  pesquisa!: FormGroup;
  generos!: Array<string>;



  filtroFilme='';
  escolherFilme='';


  constructor(private filmesService: FilmesService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private changeDetectorRefs: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(routeParams => {
      this.filtroFilme = routeParams.nome});
      this.listarFilmes();
  }

  private listarFilmes(){
    this.filmesService.pegarTodos()
      .subscribe((filmes: Filmes[]) => this.filmes.push(...filmes));
      this.changeDetectorRefs.detectChanges();
  }

  verFilme(filme: Filmes) {
    console.log(filme.id);
    return this.router.navigateByUrl('/filme/'+ filme.id);
  }



}
