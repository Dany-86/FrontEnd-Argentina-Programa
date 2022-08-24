import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AboutMe } from '../models/aboutMe.model';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AboutMeService {

  url: string = "http://localhost:8080/aboutMe/"; 

  constructor(private httpClient: HttpClient) {}

  getAboutMe():Observable<AboutMe> { 
    return this.httpClient.get<AboutMe>(this.url + `get/`);
  }

  editAboutMe(newAboutMe: AboutMe):Observable<any> { 
    return this.httpClient.put<any>(this.url + `update/`, newAboutMe);
  }

  // no se usa
  deleteAboutMe():Observable<any> { 
    return this.httpClient.delete<any>(this.url + `delete/`);
  }

  /* getData(): Observable<any> {

    return this.httpClient.get('./assets/data/data.json');
  }

  saveAboutMe(newAboutMe: AboutMe) {
    this.httpClient.put('./assets/data/data.json', newAboutMe); // no hace nada
    console.log(newAboutMe);
  } */

}
