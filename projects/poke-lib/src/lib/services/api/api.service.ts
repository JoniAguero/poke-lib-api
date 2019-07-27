import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_API } from '../../constants/endpoints/urls';

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get(URL_API);
  }

  /* }
  getDataByName(name: string) {
    return this.http.get(this.URL)
    .pipe(
      map((result: BrastlewarkModel) => result.Brastlewark.find(item => item.name === name))
    );
  }
  getDataById(id: number) {
    return this.http.get(this.URL)
      .pipe(
        map((result: BrastlewarkModel) => result.Brastlewark.find(item => item.id === id))
      );
  } */

}
