import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cep } from './cep';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BcHomeService {

  constructor(public http: HttpClient) { }

  getCep(cep: any): Observable<Cep[]> {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
      .pipe(
        map((res: Cep[]) => {
          return res
        }))}
      
      
}