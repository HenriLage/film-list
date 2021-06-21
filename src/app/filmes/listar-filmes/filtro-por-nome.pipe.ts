import { Pipe, PipeTransform } from '@angular/core';
import { Filmes } from 'src/app/models/filmes';

@Pipe({ name: 'filtroPorNome' })
export class FiltroPorNome implements PipeTransform {

  transform(filmes: Filmes[], filmeQuery: string) {
    filmeQuery = filmeQuery.trim().toLowerCase();

    if (filmeQuery) {
      return filmes.filter((filme) =>
        filme.nome.toLowerCase().includes(filmeQuery)
      );
    } else {
      return filmes;
    }
  }

}
