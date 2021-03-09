import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BcHomeService {

  constructor(public http: HttpClient) { }

  getCep(cep: any): Observable<any[]> {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
      .pipe(
        map((res: any[]) => {
          return res;
        })); }

  postCep(data: any): void{
    console.log(data);
  }
}