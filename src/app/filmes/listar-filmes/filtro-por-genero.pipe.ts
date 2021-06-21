import { Pipe, PipeTransform } from '@angular/core';
import { Filmes } from 'src/app/models/filmes';

@Pipe({ name: 'filtroPorGenero' })
export class FiltroPorGenero implements PipeTransform {

  transform(filmes: Filmes[], generoQuery: string) {
    generoQuery = generoQuery.trim().toLowerCase();

    if (generoQuery) {
      return filmes.filter((filme) =>
        filme.genero.toLowerCase().includes(generoQuery)
      );
    } else {
      return filmes;
    }
  }

}
