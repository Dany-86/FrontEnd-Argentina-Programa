import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from "../models/experience.model";

@Injectable({
    providedIn: 'root'
  })

export class ExperienceService {
        
    // url: string = "http://localhost:8080/api/"; 
    url: string = "https://api-myporfolio.herokuapp.com/api/"; // Remote

    constructor(private httpClient: HttpClient) {}

      getExperiences():Observable<Experience[]> { 
        return this.httpClient.get<Experience[]>(this.url + `experiences/get/`);
      }

      addExperience(newExperience: Experience):Observable<any> {
        return this.httpClient.post<any>(this.url + `experiences/add/`, newExperience);
      }

      editExperience(newExperience: Experience):Observable<any> { 
        return this.httpClient.put<any>(this.url + `experiences/update/`, newExperience);
      }

      deleteExperience(id: number):Observable<any> { 
        return this.httpClient.delete<any>(this.url + `experiences/delete/${id}`);
      }

}