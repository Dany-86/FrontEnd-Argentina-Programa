import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AboutMe } from '../models/aboutMe.model';

@Injectable({
  providedIn: 'root',
})
export class AboutMeService {

  url: string = "http://localhost:8080/api/"; 

  constructor(private httpClient: HttpClient) {}

  getAboutMe():Observable<AboutMe> { 
    return this.httpClient.get<AboutMe>(this.url + `aboutMe/get/`);
  }

  editAboutMe(newAboutMe: AboutMe):Observable<any> { 
    return this.httpClient.put<any>(this.url + `aboutMe/update/`, newAboutMe);
  }

}
