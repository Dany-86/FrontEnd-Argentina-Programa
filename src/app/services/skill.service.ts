import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from "../models/skill.model";

@Injectable({
    providedIn: 'root'
  })

export class SkillService {
        
    url: string = "http://localhost:8080/api/";
    constructor(private httpClient: HttpClient) {}

      getSkills():Observable<Skill[]> { 
        return this.httpClient.get<Skill[]>(this.url + `skills/get/`);
      }

      addSkill(newSkill: Skill):Observable<any> { 
        return this.httpClient.post<any>(this.url + `skills/add/`, newSkill);
      }

      // Modificar Actualizar sin id
      editSkill(newSkill: Skill):Observable<any> { 
        return this.httpClient.put<any>(this.url + `skills/update/`, newSkill);
      }

      deleteSkill(id: number):Observable<any> { 
        return this.httpClient.delete<any>(this.url + `skills/delete/${id}`);
      }

}
