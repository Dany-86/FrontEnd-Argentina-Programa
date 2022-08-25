import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from "../models/project.model";

@Injectable({
    providedIn: 'root'
  })

export class ProjectService {
        
    url: string = "http://localhost:8080/api/";
    constructor(private httpClient: HttpClient) {}

      getProjects():Observable<Project[]> { 
        return this.httpClient.get<Project[]>(this.url + `projects/get/`);
      }

      addProject(newProject: Project):Observable<any> { 
        return this.httpClient.post<any>(this.url + `projects/add/`, newProject);
      }

      // Modificar Actualizar sin id
      editProject(id: number, newProject: Project):Observable<any> { 
        return this.httpClient.put<any>(this.url + `projects/update/${id}`, newProject);
      }

      deleteProject(id: number):Observable<any> { 
        return this.httpClient.delete<any>(this.url + `projects/delete/${id}`);
      }

}