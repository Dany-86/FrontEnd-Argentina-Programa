import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from "../models/experience.model";

@Injectable({
    providedIn: 'root'
  })

export class ExperienceService {
        
    url: string = "http://localhost:8080/experiences/"; //URL AL BACK
    //urlJson: string = './assets/data/data.json';

    constructor(private httpClient: HttpClient) {}

   /*  getData():Observable<any> { // usando el .json
      return this.httpClient.get<any>(this.urlJson);
    } */

      getExperiences():Observable<Experience[]> { // GET REQUEST AL BACK - TODAS LAS EXPERIENCIAS
        return this.httpClient.get<Experience[]>(this.url + `get/`);
      }

      /* getExperience(id: number):Observable<Experience> { // GET REQUEST AL BACK - UNA EXPERIENCIA
        return this.httpClient.get<Experience>(this.url + ´${id}´);
      } */

      addExperience(newExperience: Experience):Observable<any> { // POST REQUEST AL BACK
        return this.httpClient.post<any>(this.url + `add/`, newExperience);
      }

      editExperience(id: number, newExperience: Experience):Observable<any> { // PUT/PATCH REQUEST AL BACK
        return this.httpClient.put<any>(this.url + `update/${id}`, newExperience);
      }

      deleteExperience(id: number):Observable<any> { // DELETE REQUEST AL BACK
        return this.httpClient.delete<any>(this.url + `delete/${id}`);
      }

    /* addExperience(newExperience: Experience): void {
        console.log("Se esta agregando una experiencia nueva -> " + JSON.stringify(newExperience));
    }

    editExperience(index: number, newExperience: Experience) {
      console.log("Se ha editado el elemento: " + index + ", la nueva experiencia es: " + JSON.stringify(newExperience));
      ;
    }

    deleteExperience(index: number) {
        console.log("Se ha borrado el elemento: " + index);
    } */
}