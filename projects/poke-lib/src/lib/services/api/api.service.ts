import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from '../../constants/endpoints/urls';
import { Pokemon } from '../../models/pokemon';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class PokemonApiService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(URL_API);
  }

  getByName(name: string) {
    return this.http.get(URL_API)
    .pipe(
      filter((result: Pokemon) => result.name === name)
    );
  }

  getById(id: string) {
    return this.http.get(URL_API)
      .pipe(
        filter((result: Pokemon) => result.id === id)
      );
  }

}
