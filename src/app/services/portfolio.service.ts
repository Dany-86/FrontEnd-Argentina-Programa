import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  getData():Observable<any> { 
    return this.http.get('./assets/data/data.json'); // comprobar sin con ruta C:\Users\danie\Desktop\Argentina Programa\Proyecto Integrador Final\Protafolio Web (con Angular)\App-Mi-Porfolio1.0\mi-portfolio\src\assets\data\data.json funciona
  }
}

