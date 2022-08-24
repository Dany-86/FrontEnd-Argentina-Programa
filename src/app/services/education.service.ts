import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Education } from "../models/education.model";

@Injectable({
    providedIn: 'root'
  })

export class EducationService {
        
    url: string = "http://localhost:8080/educations/";
    constructor(private httpClient: HttpClient) {}

      getEducations():Observable<Education[]> { 
        return this.httpClient.get<Education[]>(this.url + `get/`);
      }

      addEducation(newEducation: Education):Observable<any> { 
        return this.httpClient.post<any>(this.url + `add/`, newEducation);
      }

      editEducation(id: number, newEducation: Education):Observable<any> { 
        return this.httpClient.put<any>(this.url + `update/${id}`, newEducation);
      }

      deleteEducation(id: number):Observable<any> { 
        return this.httpClient.delete<any>(this.url + `delete/${id}`);
      }

}