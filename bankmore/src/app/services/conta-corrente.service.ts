import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContaCorrenteService {
  private api = {
    informacoes : `${environment.apiBFF}/ContasCorrentes/informacoes`,
    saldo : `${environment.apiBFF}/ContasCorrentes/saldo`,
  } 

  constructor(private http: HttpClient) { }

  getInformacoes(): Observable<any> {    
    return this.http.get<any>(this.api.informacoes);
  }

  getSaldo(): Observable<any> {
    return this.http.get<any>(this.api.saldo);
  }
}
